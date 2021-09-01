import SignupBox from './component/SignupBox';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h3>Sipmle, traffic-based pricing </h3>
        <p>Sign-upo for 30 day-trial</p>
        <p>No credit-card required</p>
      </header>
      <SignupBox/>
    </div>
  );
}

export default App;
