import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });
  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      ></input>
      <ul className="list">
        {filtered.map((contact, key) => (
          <li key={key}>
            <span>{contact.fullname}</span>
            <span>{contact.phoneNumber}</span>
          </li>
        ))}
      </ul>
      <div className="totalContacts">Total contacts ({filtered.length})</div>
    </div>
  );
}

export default List;
