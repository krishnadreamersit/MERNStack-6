import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PersonList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getPersons();
  }, []);
  const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imtyc2huYUBnbWFpbC5jb20iLCJpYXQiOjE2NjQyOTY3MjQsImV4cCI6MTY2NDI5ODUyNH0.epaF3dw9nD7ExWGGHJh3MhNBUaG4DI8XxXeCXHnuM38';
  const config = {
    headers: { Authorization: `${token}` }
  };
  const getPersons = async () => {
    const response = await axios.get("http://localhost:5000/persons", config);
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/persons/${id}`);
      getPersons();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Link to="add" className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    to={`edit/${user._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PersonList;