import { useContext } from 'react'
import { usersContext } from './ContextComponent';

const Sidebar = () => {
    const user = useContext(usersContext);
  return (
    <div>Your email is: {user?.email}</div>
  )
}

export default Sidebar