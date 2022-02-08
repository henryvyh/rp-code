import React from "react";
import { Link } from "react-router-dom";
import "./notFound.sass";
interface Props {
  path?: string;
}
const NotFound = ({ ...props }: Props) => {
  const { path } = props;
  return (
    <div className="landing__notfound">
      <i className="bx bx-search-alt bx-tada landing__notfound__icon"></i>
      <h1 className="landing__notfound__title">{"not_found_title"}</h1>
      <p className="landing__notfound__desc">{"not_found_desc"}</p>
      <Link to={`${path}`} >Home</Link>
    </div>
  );
};

export default NotFound;
