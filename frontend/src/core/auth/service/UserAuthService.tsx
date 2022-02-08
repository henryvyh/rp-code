import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NoAuthPage from "../../../views/global/no_auth/NoAuthPage";

const UserAuthService: React.FC = (props) => {
  const auth = useSelector((reducer: any) => reducer.authReducer);
 
  return (
    <>
      { auth.isAuth ? (
        props.children
      ) : (
        <NoAuthPage />
      )}
    </>
  );
};

export default UserAuthService;
