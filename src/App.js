import logo from './logo.svg';
import ironhacklogo from './assets/images/ironhack-logo.svg'
import menutop from './assets/images/menu-top.svg'
import img1 from './assets/images/icon1.png'
import img2 from './assets/images/icon2.png'
import img3 from './assets/images/icon3.png'
import img4 from './assets/images/icon4.png'
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="Container">
      <div className="Top">
        <img src={ironhacklogo} alt="Ironhack logo" />
        <img src={menutop} alt="Menu top" />
      </div>
      <div className="Main">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <span>Awesome!</span>
      </div>
      <div className="Links">
        <div className="Card"><img src={img1} alt="" /><h1>Declarative</h1><p>React makes it painless to create interactive UIs.</p></div>
        <div className="Card"><img src={img2} alt="" /><h1>Components</h1><p>Build encapsulated compponents that manage their state.</p></div>
        <div className="Card"><img src={img3} alt="" /><h1>Single-Way</h1><p>A set of immutable values are passed to the components'.</p></div>
        <div className="Card"><img src={img4} alt="" /><h1>JSX</h1><p>Statically-typed, designed to run on modern browsers.</p></div>
      </div>
      </div>
    </div>
  );
}

export default App;
