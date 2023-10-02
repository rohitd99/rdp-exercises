import UserList from "./components/UserList";
import {users} from './utils/users';

function App() {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col gap-4 items-center p-4">
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
