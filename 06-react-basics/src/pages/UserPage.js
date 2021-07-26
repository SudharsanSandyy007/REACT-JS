import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function UserPage() {
  const history = useHistory();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      history.push(`/users/${name}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button>GO</button>
      </form>
    </div>
  );
}

export default UserPage;
