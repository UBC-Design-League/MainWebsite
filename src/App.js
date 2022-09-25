import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./MainPage/Home"
import About from "./MainPage/About"
import Designathon from "./MainPage/Designathon";
import Event from "./MainPage/Event";
import Contact from "./MainPage/Contact";
import Sponsor from "./MainPage/Sponsor";
import './App.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<Home/>}/>
                    <Route exact path={"/About"} element={<About/>}/>
                    <Route exact path={"/Designathon"} element={<Designathon/>}/>
                    <Route exact path={"/Events"} element={<Event/>}/>
                    <Route exact path={"/Contact"} element={<Contact/>}/>
                    <Route exact path={"/Sponsor"} element={<Sponsor/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
