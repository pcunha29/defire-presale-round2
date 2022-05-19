import { useState, createRef } from "react";
import { Progress } from "antd";
import Footer from "./components/navigation/footer";
import Navbar from "./components/navigation/navbar";
import Card from "./components/card";
import InformationBanner from "./components/informationBanner";
import MainLogo from "./components/mainLogo";

import defireIcon from "./images/defireIcon.svg";
import gDEFIRE from "./images/gDEFIREIcon.svg";
import USDC from "./images/usdc-logo.svg";

function App() {
  const [selectedNetwork, setSelectedNetwork] = useState("AVAX");
  const reference = createRef();

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
      <Navbar reference={reference} setSelectedNetwork={setSelectedNetwork} />

      <section className="container mt-20 h-auto">
        <MainLogo />

        <div className="mt-32 sm:flex justify-around">
          {topInformation &&
            topInformation.map((info, i) => {
              return <InformationBanner info={info} key={i} />;
            })}
        </div>

        <div ref={reference as React.RefObject<HTMLDivElement>} />
        <div className="mt-32 sm:mt-64 mb-20 grid lg:grid-cols-3 lg:gap-14">
          <Card
            swapDisabled={true}
            selectedNetwork={selectedNetwork}
            network={"MATIC"}
            reference={reference}
          />
          <Card
            selectedNetwork={selectedNetwork}
            network={"AVAX"}
            reference={reference}
          />
          <Card
            swapDisabled={true}
            selectedNetwork={selectedNetwork}
            network={"FTM"}
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
