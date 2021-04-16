import {useState} from "react";
import {Demo} from "./InputSubmit";

export const InfoRate = () =>{

    const [result, setResult] = useState();

    return(
        <div>
            <div>
                <p>It`s Your Value {result}</p>
                <Demo  setResult={setResult}/>
            </div>
        </div>
    )
    
}
