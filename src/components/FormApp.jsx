import React from "react";

const FormApp = ({ handleSubmit, formValues, setFormValues }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          name="first_name"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              [e.target.name]: e.target.value,
            })
          }
          value={formValues.first_name}
          required
        />
      </div>
      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          name="last_name"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              [e.target.name]: e.target.value,
            })
          }
          value={formValues.last_name}
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formValues.email}
          onChange={(e) =>
            setFormValues({
              ...formValues,
              [e.target.name]: e.target.value,
            })
          }
          required
        />
      </div>
      <div className="form-group">
        <label>Avatar</label>
        <input
          type="text"
          className="form-control"
          placeholder="Agregar url de imagen"
          name="avatar"
          value={formValues.avatar}
          onChange={(e) =>
            setFormValues({
              ...formValues,
              [e.target.name]: e.target.value,
            })
          }
          required
        />
      </div>
      <div className="mt-2">
        <button className="btn btn-primary">Guardar</button>
      </div>
    </form>
  );
};

export default FormApp;
