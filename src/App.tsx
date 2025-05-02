import './assets/index.css';
import AccordionGroup from './components/AccordionGroup';

const items = [
  { id: '1', title: 'What is React?', content: 'React is a JavaScript library for building UIs.' },
  { id: '2', title: 'What is TypeScript?', content: 'TypeScript adds type safety to JavaScript.' },
  { id: '3', title: 'What is Tailwind CSS?', content: 'Tailwind is a utility-first CSS framework.' },
];

function App() {
  return (
    <>
      <AccordionGroup items={items} />
    </>
  );
}

export default App;
