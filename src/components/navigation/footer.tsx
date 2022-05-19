import twitter from "../../images/twitter.svg";
import discord from "../../images/discord.svg";
import medium from "../../images/medium.svg";

function Footer() {
  return (
    <footer>
      <section className="px-7 mt-32 sm:mt-52"></section>
      <div className=" text-defire-water flex justify-between mt-20 sm:mt-28 pb-10 px-7">
        <p className="text-xs sm:text-s pt-3 pr-5">
          © DeFIRE . One Ecosystem, the best of DeFi
        </p>
        <ul className="grid grid-cols-3 gap-9 pr-5">
          <li>
            <a
              href="https://twitter.com/DeFIRE_ORG"
              target="_blank"
              rel="noreferrer"
            >
              <img className="h-10 sm:h-5" src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/DeFIRE"
              target="_blank"
              rel="noreferrer"
            >
              <img className="h-10 sm:h-5" src={discord} alt="discord" />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@defire.org"
              target="_blank"
              rel="noreferrer"
            >
              <img className="h-10 sm:h-5" src={medium} alt="medium" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
