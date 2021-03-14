import './App.css';
import Card from './components/Card';
import FaqList from './components/FaqList';
import { faqData } from './data/faq-data.js';

function App() {
	return (
		<Card title="FAQ">
			<FaqList data={faqData} />
		</Card>
	);
}

export default App;
