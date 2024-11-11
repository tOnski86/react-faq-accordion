/* eslint-disable react/prop-types */
import { useState } from "react";
import IconMinus from "/icon-minus.svg";
import IconPlus from "/icon-plus.svg";

function AccordionItem({ item }) {
  const { title, text } = item;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="[&:not(:last-child)]:border-b-2 [&:not(:last-child)]:border-pink [&:not(:last-child)]:pb-4 pt-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-semibold text-md leading-5">{title}</h2>
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
