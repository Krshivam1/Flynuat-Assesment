import { createContext, useState } from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

// question 3. example for useContext

interface User {
  name: string;
  email: string;
}

export const usersContext = createContext<User | undefined>(undefined);

const ContextComponent = () => {
  const [user, setUser] = useState<User>({
    name: "John",
    email: "john@gmail.com",
  });

  return (
    <div>
      <h2>Context example</h2>
      <usersContext.Provider value={user}>
        <Dashboard />
        <Sidebar />
      </usersContext.Provider>
    </div>
  );
};

export default ContextComponent;
