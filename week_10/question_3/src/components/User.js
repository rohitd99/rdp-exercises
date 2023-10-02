import {useEffect,memo} from "react";

function User({user,theme})
{
    
    useEffect(() => {
        console.log(user.name + " rendered");
    });
    if(theme === null)
    {
        return(
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4 text-gray-950">
                <h1 className="text-md"><span className="text-gray-950">Name : </span>{user.name}</h1>
                <p className="text-md capitalize"><span className="text-gray-950">Department : </span>{user.department}</p>
            </div>
        );

    }else{

        return(
            <div className={`w-full max-w-md ${theme ? "bg-gray-600" : "bg-white"} shadow-lg rounded-lg p-4 flex flex-col gap-4 ${theme ? "text-white" : "text-gray-950"}`}>
                <h1 className="text-md"><span className={`${theme ? "text-white" : "text-gray-950"}`}>Name : </span>{user.name}</h1>
                <p className="text-md capitalize"><span className={`${theme ? "text-white" : "text-gray-950"}`}>Department : </span>{user.department}</p>
            </div>
        );
    }
    
}

export default memo(User);