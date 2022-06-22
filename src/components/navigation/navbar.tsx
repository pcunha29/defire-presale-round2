import defireTypography from "../../images/defireTypography.svg";

function Navbar(props: any) {
  const {
    connectWallet,
    logoutWallet,
    web3Modal,
  } = props;

  return (
    <nav className="p-4 sm:p-7 flex justify-between w-full">
      <img
        className="h-5 mt-1 sm:mt-0 sm:self-center"
        src={defireTypography}
        alt="Defire Typography Logo"
      />
      <div className="flex flex-col items-end w-96">
        {web3Modal && web3Modal.cachedProvider ? (
          <button
            className="main-button ml-2 w-32 mt-4 sm:mt-0"
            onClick={logoutWallet}
          >
            Logout Wallet
          </button>
        ) : (
          <button
            className="main-button ml-2 w-32 mt-4 sm:mt-0"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
