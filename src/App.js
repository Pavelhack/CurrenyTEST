import './App.css';
import {Main} from "./components/Main";
import {InfoRate} from "./components/InfoRate";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Route, Switch} from "react-router-dom"


export const App = () => {
    return (
        <div className="App">
            <Header/>
            <div className="content">

                <Switch>

                    <Route exact path="/">
                        <Main />
                    </Route>

                    <Route exact path="/InfoRate">
                        <InfoRate/>
                    </Route>

                </Switch>
            </div>
            <Footer/>
        </div>
    );
}