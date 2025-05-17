
import './App.css';
import Header from './MyComponent/Header';
import Todos from './MyComponent/Todos';
import Footer from './MyComponent/Footer';

function App() {
  return (
    <>
    <Header extra="practice" searchbar={true}/>
    <Todos/>
    <Footer/>
  </>
  );
}

export default App;
