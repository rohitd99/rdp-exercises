function deepCopy(originalObj)
{
    if(typeof originalObj !== "object")
    {
        return originalObj;
    }
    let newObj = {...originalObj};
    let keys = Object.keys(originalObj);
    for(key of keys)
    {
        if(originalObj[key] instanceof Object)
        {
            newObj[key] = deepCopy(originalObj[key]);
        }
    }
    return newObj;
    
}

ogobj = {
    name : "Rohit",
    age : 20,
    skills: ["React","JavaScript","Vue"],
    printSkills: () =>{
        for(skill of skills)
        {
            console.log(skill);
        }
    },
    minime: {
        gharkanaam: "Chotu",
        skills: ["Khana banana","Jhaadu Pocha lagana","Kapde dhona"],
    }
}

newobj = deepCopy(ogobj);

newobj.minime.gharkanaam = "Golu";
newobj.skills[0] = "Angular";
console.log(newobj);
console.log(ogobj);