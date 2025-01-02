import React from "react";

import UsersList from "../components/UsersList";

const user = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max",
      image:
        "https://images.pexels.com/photos/4065187/pexels-photo-4065187.jpeg?auto=compress&cs=tinysrgb&w=600",
      places: 3,
    },
    {
      id: "u2",
      name: "Manu",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      places: 2,
    },
    {
      id: "u3",
      name: "Manu",
      image:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600",
      places: 1,
    },
  ];

  return (
    <div>
      <UsersList items={USERS} />
    </div>
  );
};

export default user;
