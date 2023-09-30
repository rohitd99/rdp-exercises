import Employee from "./Employee";

function View(props)
{
    const {dispatch,state,view} = props;
    const data = getDataFromView(view);

    function getDataFromView(view)
    {
        if(view === "All")
        {
            return state;
        }else{
            return state.filter((emp) => emp.department === view);
        }
    }
    return(
        <div className='flex justify-center'>
            <ul className='flex flex-col gap-4 max-w-xl w-full'>
                {
                    data.map((employee) => {
                    return(
                        <Employee key={employee.id} dispatch={dispatch} employee={employee}>
                        </Employee>
                    );
                    })
                }
            </ul>
      </div>
    );
}

export default View;