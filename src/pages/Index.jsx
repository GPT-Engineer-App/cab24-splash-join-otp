import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/join");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">CABs 24</h1>
        <p className="text-center">Welcome to CABs 24. Your journey starts here.</p>
      </div>
    </div>
  );
};

export default Index;