import React from "react";
import { useAuthContex } from "../../contex/AuthContexProvider";

const Inventory = () => {
  const { user } = useAuthContex();
  return (
    <div>
      <h2>This is Inventory</h2>
      <h3>
        User email: <i>{user?.email}</i>
      </h3>
    </div>
  );
};

export default Inventory;
