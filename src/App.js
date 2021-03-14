import './App.css';
import FaqCard from './components/FaqCard';
import { faqData } from './data/faq-data.js';

function App() {
	return <FaqCard title="FAQ" body={faqData} />;
}

export default App;
