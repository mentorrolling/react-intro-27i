import React, { useState, useEffect } from "react";
import MessageApp from "./MessageApp";
import FormApp from "./FormApp";

import data from "../data/user";

const IntroApp = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  });

  //Cuando se monta componente
  useEffect(() => {
    //effecto
    getData();
  }, []);

  const getData = () => {
    setTimeout(() => {
      setUsers(data);
    }, 2000);
  };

  //cuando se actualiza el componente
  // useEffect(() => {
  //   //Efecto
  //   console.log("Me actualicé :)");

  //   //en que momento
  // }, [users]);

  // const { roles, usuario } = props;
  //   console.log(roles);
  //   console.log(usuario);

  //desestructuración de objetos
  // const { username } = usuario;

  //Desestructuración de Arreglos
  //   roles[0]
  //   roles[1]
  //   roles[2]
  // const [rolAdmin, , rolDev] = roles;
  //   console.log(rolDev);

  const agregarUsuario = (e) => {
    e.preventDefault();

    const id = new Date().getTime();

    const newUser = { ...formValues, id };
    //spread operator
    setUsers([...users, newUser]);

    setShow(true);
    setTimeout(() => {
      setShow(false);
      setFormValues({
        first_name: "",
        last_name: "",
        email: "",
        avatar: "",
      });
    }, 2000);
  };
  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3 className="text-center">Intro App</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-3">
          <FormApp
            formValues={formValues}
            handleChange={handleChange}
            agregarUsuario={agregarUsuario}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {show && <MessageApp />}

          {users.length > 0 ? (
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
          ) : (
            <h3>Cargando...</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroApp;
