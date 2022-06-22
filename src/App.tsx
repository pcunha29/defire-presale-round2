import { useCallback, useState } from "react";
import { Progress } from "antd";

import Footer from "./components/navigation/footer";
import Navbar from "./components/navigation/navbar";
import Card from "./components/card";
import InformationBanner from "./components/informationBanner";

import Web3Modal from "web3modal";
import { providerOptions } from "./helpers/providerOptions";

import MainLogo from "./components/mainLogo";
import defireIcon from "./images/defireIcon.svg";
import gDEFIRE from "./images/gDEFIREIcon.svg";
import USDC from "./images/usdc-logo.svg";

const { ethers } = require("ethers");
const web3Modal = new Web3Modal({
  cacheProvider: true,
  theme: "light",
  providerOptions, // required
});

function App() {
  const [injectedProvider, setInjectedProvider] = useState();

  const logoutWallet = async () => {
    console.log(injectedProvider);
    await web3Modal.clearCachedProvider();

    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  const connectWallet = useCallback(async () => {
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
      logoutWallet();
    });
  }, [setInjectedProvider]);

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
      <Navbar
        web3Modal={web3Modal}
        connectWallet={connectWallet}
        logoutWallet={logoutWallet}
      />

      <section className="container mt-20 h-auto">
        <MainLogo />

        <div className="mt-32 sm:flex justify-around">
          {topInformation &&
            topInformation.map((info, i) => {
              return <InformationBanner info={info} key={i} />;
            })}
        </div>

        <div className="mt-32 sm:mt-64 mb-20 flex justify-center lg:gap-14">
          <Card
            swapDisabled={true}
            selectedNetwork={"MATIC"}
            network={"MATIC"}
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
