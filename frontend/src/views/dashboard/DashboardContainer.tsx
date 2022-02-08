import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header/Header";
import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import Nav from "./nav/Nav";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import { getProducts, setQuery } from "../../redux/product/ProductActions";

const DashboardContainer: React.FC = (props) => {
  const history = useHistory();
  const location = useLocation();
  let { path } = useRouteMatch();

  const ui = useSelector((reducer: any) => reducer.uiReducer);
  const { children } = props;
  const dispatch = useDispatch();

  const searchData = async (e: any) => {
    return await setQuery(dispatch, e);
  };
  const searchAPIDebounced = AwesomeDebouncePromise(searchData, 1000);

  const onInputChange = async (e: any) => {
    let val = e.target.value;
    await searchAPIDebounced(val);
  };
  const onDetail = (e: any) => {
    history.push(`${path}/product/` + e?._id);
  };
  return (
    <>
      <Nav />
      <Header onDetail={onDetail} onInputChange={onInputChange} />
      <section className="dashboard__section">
        <div className="dashboard__section__view">{children}</div>
      </section>
    </>
  );
};

export default DashboardContainer;
