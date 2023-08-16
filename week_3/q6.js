const Promises = [];

for(let i = 0; i < 10;i++)
{
    Promises.push(fetch("https://whatthecommit.com/index.json"));
}

Promise.all(Promises)
.then((responses) =>{
    
    const data = [];
    responses.forEach((response) => {

        if(response.status !== 200)
            throw new Error("Some error occured");
        data.push(response.json());
    })
    return data;
})
.then((PromiseArr) =>{
    Promise.all(PromiseArr)
    .then((data) => {
        data.forEach((d) =>{

            console.log(d.commit_message);
        })
        console.log("Done!!");
    })
})
.catch((e) => console.log(e));


async function getTenMessages()
{
    const Promises = [];
    for(let i = 0; i < 10;i++)
    {
        Promises.push(fetch("https://whatthecommit.com/index.json"));
    }

    // console.log(Promises);

    const responses = await Promise.all(Promises);
    const data = [];
    responses.forEach((response) => {
        if(response.status !== 200)
            throw new Error("Some error occured");
        data.push(response.json());
    })
    const messageArr = await Promise.all(data);
    // console.log(messageArr);
    messageArr.forEach((m) => {
        console.log(m.commit_message);
    })

}

getTenMessages();