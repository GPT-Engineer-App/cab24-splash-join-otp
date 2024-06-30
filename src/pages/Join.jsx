import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Join = () => {
  const navigate = useNavigate();

  const handleJoin = () => {
    navigate("/otp");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Join CABs 24</h1>
        <p className="text-center">Enter your details to join.</p>
        <div className="mt-4 flex justify-center">
          <Button onClick={handleJoin}>Join Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Join;