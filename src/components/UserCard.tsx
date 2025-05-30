interface Props {
  name: string;
  email: string;
}

const UserCard: React.FC<Props> = ({ name, email }) => {
  return (
    <li className="user">
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
    </li>
  );
};

export default UserCard;
