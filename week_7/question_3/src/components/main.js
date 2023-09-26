import { useState } from "react";
import WithLogging from "./withLogging";

function Main(props)
{
    const [num,setNum] = useState(0);
    const {text} = props;
    return(
        <main>
            <h1>{text}</h1>
            <button className="button" onClick={() => setNum(prev => prev + 1)}>Clicked {num}</button>
        </main>
    );
}

Main.componentName = "Main";

export default WithLogging(Main);