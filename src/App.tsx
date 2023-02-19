import React from 'react';
import CounterList from "./Components/CounterList";
import SetList from "./Components/SetList";
import s from "../src/Components/Counter.module.css"


function App() {

    return (
        <div className={s.theme}>
            <CounterList/>
            <SetList/>
        </div>

    );
}


export default App;
