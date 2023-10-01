import useFetchData from "./hooks/useFetchData";

function App() {

  const [loading,error,user] = useFetchData("https://65197ddc818c4e98ac606f45.mockapi.io/api/users");
  console.log(user);
  if(loading)
  {
    return(
      <div className="min-h-screen bg-gray-300 flex justify-center items-center">
        <h1 className="text-xl text-center text-white">Please wait while we load ...</h1>
      </div>
    );
  }
  if(error)
  {
    return(
      <div className="min-h-screen bg-gray-300 flex justify-center items-center">
        <h1 className="text-xl text-center text-red-500">{error.message}</h1>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col gap-4 items-center p-4">
      <h1 className="text-2xl text-black">User Details</h1>
      <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4 text-gray-600">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl"><span className="text-gray-950">Name : </span>{user.name}</h1>
            <p className="text-xl capitalize"><span className="text-gray-950">Sex : </span>{user.sex}</p>
          </div>
          <p className="text-xl"><span className="text-gray-950">Job Title : </span>{user.job}</p>
      </div>
    </div>
  );
}

export default App;
