import React from "react";

import "./UsersList.css";

import UserItem from "./UserItem.js";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Users Found.</h2>
      </div>
    );
  } else {
    return (
      <div>
        <ul className="users-list">
          {props.items.map((user) => (
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placeCount={user.places}
            />
          ))}
        </ul>
      </div>
    );
  }
};

export default UsersList;
