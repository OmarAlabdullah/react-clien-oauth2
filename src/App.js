import {Login} from "./Login";
import {Register} from "./Register";
import {useState} from "react";


function App() {
    const [currentForm, setCurrentForm] = useState('login')

    const toggleForm = (formName) =>{
        setCurrentForm(formName);
    }

  return (
    <div className="page">
        {
            currentForm === 'login' ?<Login onFormSwitch={toggleForm} /> :<Register onFormSwitch={toggleForm} />
        }
    </div>
  );
}

export default App;
