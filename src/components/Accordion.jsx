/* eslint-disable react/prop-types */
import AccordionItem from './AccordionItem';

function Accordion({ content }) {
  return (
    <div>
      <ul>
        {content.map(item => (
          <AccordionItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default Accordion;
