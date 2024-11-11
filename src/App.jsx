import { useEffect, useState } from 'react';

import Accordion from './components/Accordion';
import Header from './components/Header';

function App() {
  const [state, setState] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const res = await fetch('./data/data.json');
      const data = await res.json();
      setState(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Accordion />
    </div>
  );
}

export default App;
