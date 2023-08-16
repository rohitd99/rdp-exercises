// To get an error type the wrong link
fetch("https://whatthecommit.com/index.json")
.then((response) =>{
    
    if(response.status === 200)
        return response.json();
    else
        throw new Error("Some Error occured");
})
.then((data) =>{
    console.log(data.commit_message);
})
.catch(e => {
    console.error(e);
})


async function getMessage(resource)
{
    const response = await fetch(resource);
    if(response.status !== 200)
        throw new Error("Some Error occured");
    const data = await response.json();
    console.log(data.commit_message);
}

getMessage("https://whatthecommit.com/index.json").catch((e) => console.error(e));