import { useEffect, useState } from "react";

const url = "https://randomuser.me/api/";

export const PrintData = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setUser(data.results);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <>
      {user.map((person, index) => (
        <ul key={person.login.uuid}>
          <li>{person.gender}</li>
          <li>{person.name.title}</li>
          <li>{person.name.first}</li>
          <li>{person.name.last}</li>
          <li>{person.email}</li>
        </ul>
      ))}
    </>
  );
};
