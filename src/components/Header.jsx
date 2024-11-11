const bgMobile = "/background-pattern-mobile.svg";
const bgDesktop = "/background-pattern-desktop.svg";

function Header() {
  return (
    <>
      <div
        style={{ backgroundImage: `url("${bgMobile}")` }}
        className="block h-48 bg-pink bg-cover bg-bottom px-7 py-28 sm:hidden"
      ></div>
      <div
        style={{ backgroundImage: `url("${bgDesktop}")` }}
        className="hidden h-48 bg-pink bg-cover bg-bottom px-7 sm:block sm:py-40"
      ></div>
    </>
  );
}

export default Header;
