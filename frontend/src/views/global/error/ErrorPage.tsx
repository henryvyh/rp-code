import React from "react";
interface IErrorPage {
  code: string | number;
}
const ErrorPage = ({ code }: IErrorPage): JSX.Element => {
  return (
    <div>
      <h1>{code}</h1>
      <h2>Error page </h2>
    </div>
  );
};

export default ErrorPage;
