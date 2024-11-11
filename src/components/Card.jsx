/* eslint-disable react/prop-types */
function Card({ children }) {
  return (
    <div className="rounded-md bg-white p-6 mx-6 -mt-20 sm:max-w-xl sm:-mt-40 sm:mx-auto sm:px-10 sm:py-12">
      {children}
    </div>
  );
}

export default Card;
