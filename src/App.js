import './App.css';
import React, {useState} from "react"
import {SelectForm} from "./components/Select";
import {InfoRate} from "./components/InfoRate";
import {Header} from "./components/Header";
import {Route, Switch} from "react-router-dom"


export const App = () => {
    return (
        <div className="App">
            <Header/>
            <div className="content">

                <Switch>

                    <Route exact path="/">
                        <SelectForm />
                    </Route>

                    <Route exact path="/InfoRate">
                        <InfoRate/>
                    </Route>

                </Switch>
            </div>
        </div>
    );
}