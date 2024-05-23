

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { nanoid } from 'nanoid';

// function UserList() {
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({});
//   const [search, setSearch] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentUserId, setCurrentUserId] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEditing) {
//       const updatedUsers = users.map(user => 
//         user.id === currentUserId ? { ...user, ...formData } : user
//       );
//       setUsers(updatedUsers);
//       setIsEditing(false);
//       setCurrentUserId(null);
//     } else {
//       let id = nanoid();
//       const newUser = { ...formData, id };
//       setUsers([...users, newUser]);
//     }
//     setFormData({});
//     e.target.reset();
//   };

//   const deleteUser = (id) => {
//     let new_users = users.filter(item => item.id !== id);
//     setUsers([...new_users]);
//     console.log(new_users);
//   };

//   const editUser = (id) => {
//     const userToEdit = users.find(user => user.id === id);
//     setFormData(userToEdit);
//     setIsEditing(true);
//     setCurrentUserId(id);
//   };

//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(search.toLowerCase()) ||
//     user.address.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="container">
//       <div className="row mt-5 text-center">
//         <div className="col-md-6 offset-md-3">
//           <div className="card">
//             <div className="card-header bg-primary text-white">
//               <h1 className="text-center">{isEditing ? "Edit User" : "Add User"}</h1>
//             </div>
//             <div className="card-body">
//               <form onSubmit={handleSubmit}>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   className="form-control my-2"
//                   value={formData.name || ""}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="number"
//                   name="age"
//                   placeholder="Age"
//                   className="form-control my-2"
//                   value={formData.age || ""}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone"
//                   className="form-control my-2"
//                   value={formData.phone || ""}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="Address"
//                   className="form-control my-2"
//                   value={formData.address || ""}
//                   onChange={handleChange}
//                   required
//                 />
//                 <button type="submit" className="btn btn-primary">
//                   {isEditing ? "Update User" : "Add User"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6 offset-md-3 mt-3">
//           <input
//             type="text"
//             placeholder="Search by name or address"
//             className="form-control mb-3"
//             value={search}
//             onChange={handleSearchChange}
//           />
//         </div>
//         <div className="col-md-12 mt-3">
//           <table className="table table-bordered">
//             <thead className="thead-dark">
//               <tr>
//                 <th scope="col">T/R</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Age</th>
//                 <th scope="col">Phone number</th>
//                 <th scope="col">Address</th>
//                 <th scope="col">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredUsers.map((user, index) => (
//                 <tr key={user.id}>
//                   <td>{index + 1}</td>
//                   <td>{user.name}</td>
//                   <td>{user.age}</td>
//                   <td>{user.phone}</td>
//                   <td>{user.address}</td>
//                   <td>
//                     <button onClick={() => editUser(user.id)} className="btn btn-warning mr-2">
//                       Edit
//                     </button>
//                     <button onClick={() => deleteUser(user.id)} className="btn btn-danger">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserList;


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { nanoid } from 'nanoid';

function UserList() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({});
  const [search, setSearch] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedUsers = users.map(user => 
        user.id === currentUserId ? { ...user, ...formData } : user
      );
      setUsers(updatedUsers);
      setIsEditing(false);
      setCurrentUserId(null);
    } else {
      let id = nanoid();
      const newUser = { ...formData, id };
      setUsers([...users, newUser]);
    }
    setFormData({});
    e.target.reset();
  };

  const deleteUser = (id) => {
    let new_users = users.filter(item => item.id !== id);
    setUsers([...new_users]);
    console.log(new_users);
  };

  const editUser = (id) => {
    const userToEdit = users.find(user => user.id === id);
    setFormData(userToEdit);
    setIsEditing(true);
    setCurrentUserId(id);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row mt-5 text-center">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h1 className="text-center">{isEditing ? "Edit User" : "Add User"}</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control my-2"
                  value={formData.name || ""}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  className="form-control my-2"
                  value={formData.age || ""}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="form-control my-2"
                  value={formData.phone || ""}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="form-control my-2"
                  value={formData.address || ""}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="btn btn-primary">
                  {isEditing ? "Update User" : "Add User"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6 offset-md-3 mt-3">
          <input
            type="text"
            placeholder="Search by name or address"
            className="form-control mb-3"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-md-12 mt-3">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">T/R</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Phone number</th>
                <th scope="col">Address</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>
                    <button onClick={() => editUser(user.id)} className="btn btn-warning mr-2">
                      Edit
                    </button>
                    <button onClick={() => deleteUser(user.id)} className="btn btn-danger ml-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserList;
