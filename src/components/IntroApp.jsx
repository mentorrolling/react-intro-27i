import React, { useState } from "react";
import { data } from "../data/user";

const IntroApp = (props) => {
  const [usuarios, setUsuarios] = useState(data);
  // console.log(props);
  //desestructuración de objetos
  const { dato, roles } = props;

  const { username } = dato;
  // console.log(username);
  // console.log(roles);

  //desestructuración de arreglos
  // const [rol1, rol2, rol3] = roles;
  const [rol3] = roles;

  console.log(rol3);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>
            Username: <small>{username}</small>
          </h3>
          <h3>
            Rol: <small>{rol3}</small>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((user) => (
                <tr key={user.id}>
                  <td>
                    <img
                      className="intro-img"
                      src={user.avatar}
                      alt={user.first_name}
                    />
                  </td>
                  <td className="intro-celda">{user.first_name}</td>
                  <td className="intro-celda">{user.last_name}</td>
                  <td className="intro-celda">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IntroApp;
