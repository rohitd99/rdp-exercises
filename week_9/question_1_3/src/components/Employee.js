import { ACTIONS } from "../utils/utility";

function Employee(props)
{
    const { employee, dispatch} = props;

    function handleDelete()
    {
        dispatch({
            type: ACTIONS.DELETE,
            payload: {
                id: employee.id
            }
        });
    }

    return(
        <li className="flex justify-between p-2 bg-white shadow-lg rounded-md">
            <div className="flex flex-col gap-2">
                <p className="text-md">{employee.name}</p>
                <p className="text-sm text-gray-400">{employee.department}</p>
            </div>
            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={handleDelete}>Delete</button>
        </li>
    );
}

export default Employee;