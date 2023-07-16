import { useContext } from "react";
import { usersContext } from "./ContextComponent";

const Dashboard = () => {
  const user = useContext(usersContext);
  return (
    <h2>Hi, {user?.name}</h2>
  );
};

export default Dashboard;
