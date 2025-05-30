import UserCard from "./UserCard";
import { User } from "../App";

interface Props {
  users: User[];
}

const UserList: React.FC<Props> = ({ users }) => {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} email={user.email} />
      ))}
    </ul>
  );
};

export default UserList;
