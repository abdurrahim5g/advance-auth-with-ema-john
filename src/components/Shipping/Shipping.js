import React from "react";
import { useAuthContex } from "../../contex/AuthContexProvider";

const Shipping = () => {
  const { user } = useAuthContex();

  return (
    <div className="shipping-component">
      <h2>This is Shipping page</h2>
      {user?.uid && (
        <p>
          <strong>User email:</strong> <em>{user.email}</em>
        </p>
      )}
    </div>
  );
};

export default Shipping;
