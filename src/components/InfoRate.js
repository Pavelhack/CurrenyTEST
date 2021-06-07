import {useState} from "react";
import {Demo} from "./InputSubmit";
import classes from "./InfoRate.module.css";

export const InfoRate = () =>{

    const CLASSES = {
        CONTAINER: classes.container,
        BLOCK: classes.block_1136,
        CONVERTER: classes.converter,
        CONVERTER_CONTENT_GREETING: classes.converter_content_greeting,
    }

    const [result, setResult] = useState();

    return(
        <div className = {CLASSES.CONTAINER}>
            <div className = {CLASSES.CONVERTER}>
                <div className = {CLASSES.BLOCK}>
                    <div className = {CLASSES.CONVERTER_CONTENT_GREETING}>
                        <h1>You can calculate the required value here</h1>
                        <p>Result is : {result}</p>
                    </div>
                    <Demo  setResult={setResult}/>
                </div>
            </div>
            
        </div>
    )
}
