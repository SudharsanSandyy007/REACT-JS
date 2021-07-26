import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const fetchUsers = async (pageNo) => {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?results=5&page=${pageNo}`
    );
    const data = await response.json();
    console.log(data);
    return data.results;
  } catch (e) {
    console.log(e);
  }
};

function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const params = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      const results = await fetchUsers(1);
      setUsers(results);
      setPage((prev) => prev + 1);
    };
    makeRequest();
  }, []);

  const handleLoadMore = async () => {
    const results = await fetchUsers(page);
    setUsers((prev) => [...prev, ...results]);
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <h2>{params.username}</h2>

      {users.map((u) => (
        <p key={u.email}>
          {u.name.first} {u.name.last}
        </p>
      ))}

      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
}

export default Users;
