import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loder, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
      if (authentication && authStatus !== authentication) {
        navigate("/login");
      } else if (!authentication && authStatus !== authentication) {
        navigate("/");
      }
      setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loder ? (
    <h1 className="text-2xl font-bold leading-tight text-center">Loading...</h1>
  ) : (
    <>{children}</>
  );
};

export default Protected;
