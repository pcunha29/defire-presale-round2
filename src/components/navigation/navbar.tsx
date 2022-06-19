import defireTypography from "../../images/defireTypography.svg";

function Navbar(props: any) {
  const { setSelectedNetwork, reference, loadWeb3Modal } = props;

  const handleSelect = (e: string) => {
    setSelectedNetwork(e);
    const ref = reference.current;
    if (ref) {
      ref.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <nav className="p-4 sm:p-7 flex justify-between w-full">
      <img
        className="h-5 mt-1 sm:mt-0 sm:self-center"
        src={defireTypography}
        alt="Defire Typography Logo"
      />
      <div className="flex flex-col items-end w-96">
        <button
          className="main-button ml-2 w-32 mt-4 sm:mt-0"
          onClick={loadWeb3Modal}
        >
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
