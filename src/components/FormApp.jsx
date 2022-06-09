import React from "react";

const FormApp = ({ formValues, handleChange, agregarUsuario }) => {
  return (
    <form onSubmit={agregarUsuario}>
      <div className="form-group">
        <label>First name</label>
        <input
          className="form-control"
          type="text"
          name="first_name"
          value={formValues.first_name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Last name</label>
        <input
          className="form-control"
          type="text"
          name="last_name"
          value={formValues.last_name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          className="form-control"
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Avatar</label>
        <input
          className="form-control"
          type="text"
          placeholder="Ingrese la url de la imagen"
          name="avatar"
          value={formValues.avatar}
          onChange={handleChange}
        />
      </div>
      <div className="my-3">
        <button className="btn btn-primary">Guardar</button>
      </div>
    </form>
  );
};

export default FormApp;
