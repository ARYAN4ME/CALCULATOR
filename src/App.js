
import './App.css';
import Header from './component/header';
import Calculator from './calculator/calculator';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const btnHandel = () => {
    toast("this is my first message");
  }
  return (
    <div>
     
      <Calculator/>
    
      
    </div>
  );
}

export default App;
