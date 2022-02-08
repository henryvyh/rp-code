import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./noAuthPage.sass";

const NoAuthPage = () => {
  const [count, setCount] = useState(3);
  const history = useHistory();
  useEffect(() => {
    const _interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 && history.push("/signin");
    return () => clearInterval(_interval);
  }, [count, history]);
  return (
    <div className="auth__notauth">
      <i className="bx bx-user bx-flashing auth__notauth__icon"></i>
      <h1>No auth</h1>
      <p>Please wait redirect in {count} seconds</p>
      <Link to="/signin">
        <i className="bx bxs-user-circle"></i>
        <p>signin</p>
      </Link>
    </div>
  );
};

export default NoAuthPage;
