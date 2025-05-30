import React, { useEffect, useState } from "react";
import UserList from "./components/UserList";

export interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Error loading users");
        const data: User[] = await res.json();
        setUsers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (isLoading) return <p className="loading">Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Users:</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
