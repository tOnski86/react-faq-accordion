/* eslint-disable react/prop-types */
const bgMobile = "/background-pattern-mobile.svg";
const bgDesktop = "/background-pattern-desktop.svg";

function Header() {
  return (
    <>
      <div
        style={{ backgroundImage: `url("${bgMobile}")` }}
        className="block h-48 bg-pink px-7 py-28 sm:hidden bg-cover bg-bottom"
      ></div>
      <div
        style={{ backgroundImage: `url("${bgDesktop}")` }}
        className="hidden h-48 bg-pink px-6 py-28 sm:block bg-cover bg-bottom"
      ></div>
    </>
  );
}

export default Header;
