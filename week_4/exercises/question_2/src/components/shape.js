function Shape(props)
{
    const {classes,classesInside,svg} = props;
    
    if(svg)
    {
        return(
            <div className={classes}>
                <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 24 24"><path d="M24 16.971l-7.029 7.029h-9.942l-7.029-7.029v-9.942l7.029-7.029h9.942l7.029 7.029z" fill="plum"/></svg>
            </div>
        );
    }
        
    return(
        <div className={classes}>
            <div className={classesInside}></div> 
        </div>
    );
    
}

export default Shape;