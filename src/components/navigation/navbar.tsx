import defireTypography from "../../images/defireTypography.svg";

function Navbar(props: any) {
  const { setSelectedNetwork, reference } = props;

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
      <div className="flex flex-col sm:flex-row items-end sm:items-center w-96">
        <label className=" text-sm font-medium text-gray-900 dark:text-gray-400">
          Network:
        </label>

        <select
          id="small"
          className="w-32 px-2 ml-2 mt-4 sm:mt-0 field"
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="AVAX">Avalanche</option>
          <option value="FTM">Fantom</option>
          <option value="MATIC">Polygon</option>
        </select>

        <button className="main-button ml-2 w-32 mt-4 sm:mt-0">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
