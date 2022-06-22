import { Progress, Form, Input } from "antd";

import FTM from "../images/ftm-logo.svg";
import AVAX from "../images/avax-logo.svg";
import MATIC from "../images/matic-logo.svg";

function Card(props: any) {
  const { swapDisabled, selectedNetwork, network } = props;

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const networkInfo = (network: any) => {
    switch (network) {
      case "FTM":
        return { img: FTM, text: "Fantom" };
      case "AVAX":
        return { img: AVAX, text: "Avalanche" };
      case "MATIC":
        return { img: MATIC, text: "Polygon" };
      default:
        return { img: FTM, text: "Fantom" };
    }
  };
  return (
    <div
      className={
        selectedNetwork !== network
          ? "relative opacity-70 blur-[2px]	scale-95 cursor-not-allowed hidden lg:block"
          : "relative transition-all delay-300"
      }
    >
      <div className="flex lg:block relative -top-8 lg:absolute left-0 lg:top-0 lg:-left-11 text-defire-water ">
        <img
          className="h-8 w-8"
          src={networkInfo(network).img}
          alt={`${network} logo`}
        />
        <span className="pl-2 lg:pl-0 w-full lg:rotate-180 leading-8 pb-2 lg:[writing-mode:vertical-lr] font-bold text-md">
          {networkInfo(network).text}
        </span>
      </div>

      <div className="absolute top-0 sm:-top-32 flex justify-center w-full z-2">
        <Progress
          //width={320}
          width={250}
          type="circle"
          showInfo={false}
          percent={24}
          format={(percent) => `${percent} Token`}
          strokeColor={"#F64B51"}
          trailColor={"rgba(246, 75, 81, 0.2)"}
        />
        <div className="absolute top-24 text-5xl text-defire-water flex flex-col text-center">
          <span>999.9 of</span>
          <span className="text-sm">999,999.99 DFIRE </span>
        </div>
      </div>

      <div className="sm:px-4 pb-16 pt-64 text-defire-water bg-defire-light-purple bg-opacity-20 shadow-lg h-auto rounded-xl">
        <div className="px-10">
          <p className="font-bold text-lg text-defire-cyan mb-4">
            Price Tolerance
          </p>
          <div className="grid grid-cols-2 gap-1">
            <div className="flex flex-col">
              <span className="text-defire-water font-bold">Minimum Price</span>
              <span className="field text-center leading-[50px]">0.70$</span>
            </div>
            <div className="flex flex-col">
              <span className="text-defire-water font-bold">Minimum Price</span>
              <span className="field text-center leading-[50px]">999$</span>
            </div>
          </div>
          <span className="text-[10px] text-defire-red">
            The transaction will not go through if current DFIRE price is
            greater than Maximum Price
          </span>

          <p className="font-bold text-lg text-defire-cyan mt-6 mb-4">
            Minimum Swapping amount
          </p>
          <p className="field text-center leading-[50px]">100 DEFIRE</p>

          <Form
            className="!font-SpaceGrotesk mt-6"
            name="Token"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
          >
            <Form.Item
              label={<label className="text-defire-water">Swap Amount</label>}
              name="Swap Amount"
              rules={[
                {
                  required: true,
                  message: "Please input your Swap Amount!",
                },
              ]}
            >
              <Input
                disabled={network !== selectedNetwork}
                className="field"
                placeholder="Token amount"
              />
            </Form.Item>
          </Form>

          <button
            disabled={!swapDisabled || network !== selectedNetwork}
            className="mt-10 w-full mb-2 main-button disabled:text-opacity-50 disabled:text-defire-water "
          >
            Authorize USDC
          </button>
          <button
            disabled={swapDisabled || network !== selectedNetwork}
            className="w-full main-button bg-defire-red text-defire-water"
          >
            Swap
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
