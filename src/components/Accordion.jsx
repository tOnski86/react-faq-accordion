/* eslint-disable react/prop-types */
import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ content }) {
  const [openID, setOpenID] = useState(null);

  return (
    <div>
      <ul>
        {content.map((item) => (
          <AccordionItem
            item={item}
            key={item.id}
            onOpen={setOpenID}
            openID={openID}
          />
        ))}
      </ul>
    </div>
  );
}

export default Accordion;
