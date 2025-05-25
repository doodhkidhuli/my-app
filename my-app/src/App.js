
import './App.css';
import Header from './MyComponent/Header';
import Todos from './MyComponent/Todos';
import Footer from './MyComponent/Footer';

function App() {
  const onDelete =(todos) => {
    alert("I am onDelete" + todos);
  }
  let todos = [
    {
      sno:1,
      title:"Go to the dashboard",
      desc:"you can see your profile and other details here"
    },
    {
      sno:2,
      title:"Go to the settings",
      desc:"you can change your password and other details here"
    },
    {
      sno:3,
      title:"Go to the help",
      desc:"you can see the help and support here"
    }
  ]
  return (
    <>
    <Header extra="practice" searchbar={true}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
  </>
  );
}

export default App;
