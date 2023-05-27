import React from "react";
import { useAuthContex } from "../../contex/AuthContexProvider";

const Inventory = () => {
  const { user } = useAuthContex();
  return (
    <div>
      <h2>This is Inventory</h2>
      <h3>User name: {user?.name}</h3>
    </div>
  );
};

export default Inventory;
