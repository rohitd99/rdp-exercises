import {useEffect} from 'react';

const WithLogging = (Component) => {
    
    return function WithLoggingComponent(props)
    {
        useEffect(() => {
            console.log(Component.name + " is rendered");
        },[]);

        return(
            <Component {...props}></Component>
        );
    };

};

export default WithLogging;