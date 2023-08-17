function Button(props)
{
    const {type,text,handleClick} = props;
    // console.log(handleClick);
    return(
        <>
            <button type={type} onClick={handleClick}>{text}</button>
        </>
    );
}

export default Button;