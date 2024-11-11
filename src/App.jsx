import Accordion from './components/Accordion';
import Header from './components/Header';

import useFetch from './utilities/useFetch';

function App() {
  const { content } = useFetch();

  return (
    <div>
      <Header />
      <Accordion content={content} />
    </div>
  );
}

export default App;
