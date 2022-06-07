import React, { useState } from "react";

import data from "../data/user";

const IntroApp = (props) => {
  const [users, setUsers] = useState(data);

  const { roles, usuario } = props;
  //   console.log(roles);
  //   console.log(usuario);

  //desestructuración de objetos
  const { username } = usuario;

  //Desestructuración de Arreglos
  //   roles[0]
  //   roles[1]
  //   roles[2]
  const [rolAdmin, , rolDev] = roles;
  //   console.log(rolDev);

  const agregarUsuario = () => {
    const newUser = {
      id: new Date().getTime(),
      email: "josefina@rollingcode.com",
      first_name: "Josefina",
      last_name: "Maximo",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    };

    setUsers([...users, newUser]);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Intro App</h3>
          <h4>
            Username: <small>{username}</small>
          </h4>
          <p>Rol: {rolDev}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-outline-info" onClick={agregarUsuario}>
            Agregar
          </button>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <th>
                    <img
                      className="intro-img"
                      src={user.avatar}
                      alt={user.first_name}
                    />
                  </th>
                  <th className="intro-celda">{user.first_name}</th>
                  <th className="intro-celda">{user.last_name}</th>
                  <th className="intro-celda">{user.email}</th>
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
