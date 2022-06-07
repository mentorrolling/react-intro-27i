import React, { useEffect, useState } from "react";
import { data } from "../data/user";
import FormApp from "./FormApp";
import MessageApp from "./MessageApp";

const IntroApp = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  });

  const [update, setUpdate] = useState(false);
  //desestructuración de objetos
  // const { dato, roles } = props;

  // const { username } = dato;
  // console.log(username);
  // console.log(roles);

  //desestructuración de arreglos
  // const [rol1, rol2, rol3] = roles;
  // const [rol3] = roles;

  // console.log(rol3);

  //Cuando se monta el componente
  useEffect(() => {
    setUsuarios(data);
  }, []);

  //Cuando se actualiza el estado
  useEffect(() => {
    console.log("Me actualicé :)");
  }, [usuarios]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdate(true);
    const id = usuarios[usuarios.length - 1].id + 1;

    const newUsuario = {
      id,
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      email: formValues.email,
      avatar: formValues.avatar,
    };
    setUsuarios([...usuarios, newUsuario]);
    setFormValues({
      first_name: "",
      last_name: "",
      email: "",
      avatar: "",
    });
    setTimeout(() => {
      setUpdate(false);
    }, 2000);
  };

  return (
    <>
      <div className="row mb-3">
        <div className="col-6 offset-3">
          <FormApp
            handleSubmit={handleSubmit}
            formValues={formValues}
            setFormValues={setFormValues}
          />
          {update && (
            <div className="mt-3">
              <MessageApp />
            </div>
          )}
          {/* <h3>
            Username: <small>{username}</small>
          </h3>
          <h3>
            Rol: <small>{rol3}</small>
          </h3> */}
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
    </>
  );
};

export default IntroApp;
