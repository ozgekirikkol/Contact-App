import React, { useEffect, useState } from "react";

const initialFormValues = {
  fullname: "",
  phoneNumber: "",
};

function Form({ addForm, contact }) {
  useEffect(() => {
    setForm({ initialFormValues });
  }, [contact]);

  const [form, setForm] = useState({ initialFormValues });

  const onChangeInput = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value, });

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phoneNumber === "") {
      return false;
    }
    addForm([form,...contact]);
    setForm(initialFormValues);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="formInput">
          <input
            name="fullname"
            placeholder="Name"
            value={form.fullname}
            onChange={onChangeInput}
            required
          ></input>
        </div>
        <div>
          <input
             
            name="phoneNumber"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={onChangeInput}
            required
          ></input>
        </div>

        <div className="btn">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
