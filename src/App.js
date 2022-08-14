import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Routes,
    Route
} from 'react-router-dom';
import NavBar from "./components/nav/NavBar";
import Televisores from "./components/categories/Televisores";
import NotebooksYTablets from "./components/categories/NotebooksYTablets";
import Celulares from "./components/categories/Celulares";


function App() {
    return <>

        <NavBar/>
        <Routes>
                <Route path='/' component={Home}></Route>
                <Route path='/televisores' component={Televisores}></Route>
                <Route path='/notebooks-y-tablets' component={NotebooksYTablets}></Route>
                <Route path='/celulares' component={Celulares}></Route>
        </Routes>

    </>;

}

export default App;
