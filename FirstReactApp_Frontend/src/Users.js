import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const users = [
   {
      id: 1,
      name: 'John Doe',
   },
   {
      id: 2,
      name: 'Jane Smith',
   },
   {
      id: 3,
      name: 'Alice Johnson',
   },
   {
      id: 4,
      name: 'Bob Brown',
   },
   {
      id: 5,
      name: 'Charlie White',
   }

];



const Users = () => {
     return (
      <Box 
         sx ={{width: 'calc(100% - 100px)', margin: 'auto',marginTop: '100px',}}>
         <UserForm />
         <UsersTable rows ={users} />
      </Box>
     );
   }

export default Users;
