function InformationBanner(props: any) {
  const { info } = props;
  return (
    <div className="relative my-7 sm:my-0 sm:w-52 text-defire-cyan bg-defire-light-purple bg-opacity-20 shadow-lg rounded-xl p-4 flex flex-col text-right">
      <span className="mb-2">{info.title} </span>
      {info.progresBar && info.progresBar}
      <span className={info.progresBar ? "text-center font-bold" : "font-bold"}>
        {info.amount}
      </span>
      <img
        src={info.icon}
        alt="token icon"
        className="w-10 h-10 absolute -top-5 left-4"
      />
    </div>
  );
}

export default InformationBanner;
