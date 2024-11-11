/* eslint-disable react/prop-types */
function AccordionItem({ item }) {
  const { title, text } = item;

  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default AccordionItem;
