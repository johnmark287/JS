// import logo from './logo.svg';
import "./App.css";
import { Avator } from "./components/pages/Avator";
import { Counter } from "./components/pages/Counter";
import image from "./assets/image/WhatsApp Image 2023-11-07 at 19.05.12.jpeg";
import WizardForm from "./components/wizard_form/WizardForm";
// import WizardForm  from './components/wizard_form/WizardForm';
// import { Step } from './components/wizard_form/Step1';
// import { Step2 } from './components/wizard_form/Step2';
// import { Step3 } from './components/wizard_form/Step2';

function App() {
	return (
    	<div className="App">
    		<Avator image={image} radius={75} size={120}></Avator>
    		<Counter />
    		<WizardForm />
    	</div>
	);
}

export default App;
