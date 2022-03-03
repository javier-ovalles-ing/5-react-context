import logo from './logo.svg';
import './App.css';
import MyPage from './Components/MyPage';
import MyPageContext from './Components/MyPageContext';
import CrudApi from './Components/CrudApi';
import { CrudProvider } from './context/CrudContext';

function App() {
  return( 
    <div>
      <h1>React Context API</h1>
      <a
      href="https//es.reactjs.org/docs/context.html"
      target="_blank"
      rel="norefer"
      >
        Documentacion
      </a>
      <CrudProvider>
        <CrudApi/>
      </CrudProvider>
      <hr/>
      <MyPageContext/>
      <hr/>
      <MyPage/>
    </div>
  );
}

export default App;
