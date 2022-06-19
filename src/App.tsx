import { useState, createRef, useEffect, useCallback } from "react";
import { Progress } from "antd";
import Footer from "./components/navigation/footer";
import Navbar from "./components/navigation/navbar";
import Card from "./components/card";
import InformationBanner from "./components/informationBanner";
import MainLogo from "./components/mainLogo";
import { Web3ModalSetup } from "./helpers";

import defireIcon from "./images/defireIcon.svg";
import gDEFIRE from "./images/gDEFIREIcon.svg";
import USDC from "./images/usdc-logo.svg";

const web3Modal = Web3ModalSetup();
const providers = [`https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`];
const { ethers } = require("ethers");

function App() {
  const reference = createRef();
  const [injectedProvider, setInjectedProvider] = useState();
  const [address, setAddress] = useState();
  const logoutOfWeb3Modal = async () => {
    await web3Modal.clearCachedProvider();
    if (
      injectedProvider &&
      injectedProvider.provider &&
      typeof injectedProvider.provider.disconnect == "function"
    ) {
      await injectedProvider.provider.disconnect();
    }
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  const loadWeb3Modal = useCallback(async () => {
    const provider = await web3Modal.connect();
    setInjectedProvider(new ethers.providers.Web3Provider(provider));

    provider.on("chainChanged", (chainId: any) => {
      console.log(`chain changed to ${chainId}! updating providers`);
      setInjectedProvider(new ethers.providers.Web3Provider(provider));
    });

    provider.on("accountsChanged", () => {
      console.log(`account changed!`);
      setInjectedProvider(new ethers.providers.Web3Provider(provider));
    });

    // Subscribe to session disconnection
    provider.on("disconnect", (code: any, reason: any) => {
      console.log(code, reason);
      logoutOfWeb3Modal();
    });
  }, [setInjectedProvider]);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  //INFO THAT NEEDS TO BE Dynamic
  const topInformation = [
    { title: "My Flare amount:", amount: "12 FLARE", icon: gDEFIRE },
    { title: "My DFIRE Amount:", amount: "100 DEFIRE", icon: defireIcon },
    { title: "Swapped Amount:", amount: "2000 USDC", icon: USDC },
  ];

  const priceProgressBar = () => {
    return (
      <div className="flex ">
        {/* min historical value */}
        <span className="text-xs leading-6">0.90$</span>
        <Progress
          className="mx-2"
          percent={65}
          showInfo={false}
          strokeColor={"#F64B51"}
          trailColor={"rgba(246, 75, 81, 0.2)"}
        />
        {/* max historical value */}
        <span className="text-xs leading-6">999$</span>
      </div>
    );
  };

  const bottomInformation = [
    { title: "All Deposits:", amount: " 999999 USDC", icon: USDC },
    {
      title: "DEFIRE Price:",
      amount: "7.8 USD",
      icon: defireIcon,
      progresBar: priceProgressBar(),
    },
  ];

  return (
    <div className="font-SpaceGrotesk h-auto customGradient">
      <Navbar reference={reference} loadWeb3Modal={loadWeb3Modal} />

      <section className="container mt-20 h-auto">
        <MainLogo />

        <div className="mt-32 sm:flex justify-around">
          {topInformation &&
            topInformation.map((info, i) => {
              return <InformationBanner info={info} key={i} />;
            })}
        </div>

        <div ref={reference as React.RefObject<HTMLDivElement>} />
        <div className="mt-32 sm:mt-64 mb-20 flex justify-center lg:gap-14">
          <Card
            swapDisabled={true}
            selectedNetwork={"MATIC"}
            network={"MATIC"}
            reference={reference}
          />
        </div>

        <div className="sm:flex justify-between">
          {bottomInformation &&
            bottomInformation.map((info, i) => {
              return <InformationBanner info={info} key={i} />;
            })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
