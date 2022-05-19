import defireIcon from "../images/defireIcon.svg";

function MainLogo() {
  return (
    <div className="flex justify-center">
      <img
        src={defireIcon}
        alt="Defire Logo"
        className="text-center w-24 sm:w-32"
      />
    </div>
  );
}

export default MainLogo;
