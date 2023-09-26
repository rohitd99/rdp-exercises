import {useEffect} from 'react';

const WithLogging = (WrappedComponent) => {
    
    return function WithLoggingComponent(props)
    {
        useEffect(() => {
            console.log(WrappedComponent.componentName + " is rendered");
        },[]);

        return(
            <WrappedComponent {...props}></WrappedComponent>
        );
    };

};

export default WithLogging;