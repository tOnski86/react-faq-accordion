/* eslint-disable react/prop-types */
import IconMinus from "/icon-minus.svg";
import IconPlus from "/icon-plus.svg";

function AccordionItem({ item, openID, onOpen }) {
  const { title, text, id } = item;

  const isOpen = id === openID;

  function handleToggle() {
    onOpen(isOpen ? null : id);
  }

  return (
    <li
      className="pt-4 hover:cursor-pointer sm:pt-6 [&:not(:last-child)]:border-b-2 [&:not(:last-child)]:border-pink [&:not(:last-child)]:pb-4 sm:[&:not(:last-child)]:pb-6"
      onClick={handleToggle}
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-md font-semibold leading-5">{title}</h2>
        <img
          src={`${isOpen ? IconMinus : IconPlus}`}
          alt={`${isOpen ? "minus icon" : "plus icon"}`}
        />
      </div>
      {isOpen && <p className="mt-5 text-sm sm:text-base">{text}</p>}
    </li>
  );
}

export default AccordionItem;
