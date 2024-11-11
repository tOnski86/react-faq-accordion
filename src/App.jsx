import Accordion from "./components/Accordion";
import Card from "./components/Card";
import Header from "./components/Header";
import Title from "./components/Title";

import useFetch from "./utilities/useFetch";

function App() {
  const { content } = useFetch();

  return (
    <div className="bg-pink min-h-screen pb-28">
      <Header />
      <Card>
        <Title />
        <Accordion content={content} />
      </Card>
    </div>
  );
}

export default App;
