import React, { useEffect, useState } from "react";
import "./nav.sass";
import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setNavCollapse, setNavHide } from "../../../redux/ui/UiActions";
import { StorageApp } from "../../../utils/StorageApp";
import ItemNav from "./ItemNav";
import { getCategories } from "../../../redux/product/ProductActions";
import LoadingPage from "../../global/loading/card/LoadingPage";
import ImageView from "../ImageView";

const Nav = () => {
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState<any>(null);
  const { categories } = useSelector(
    (reducers: any) => reducers.productReducer
  );
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  let { path } = useRouteMatch();
  const ui = useSelector((reducer: any) => reducer.uiReducer);

  useEffect(() => {
    callbackgetCategory();
  }, []);
  const callbackgetCategory = async () => {
    if (!loading) setLoading(true);
    if (!categories?.length) await getCategories(dispatch);
    setLoading(false);
  };
  const callbackHistory = (path: string) => {
    autoHideNav();
    history.push(path);
  };
  const autoHideNav = () => {
    if (window.innerWidth <= 768) callbackHideNav();
  };
  const isActivePath = (path: string) => {
    let nPath = location.pathname.split("/").filter((a) => a);
    return path === nPath[nPath.length - 1];
  };
  const callbackHideNav = () => {
    dispatch(setNavHide(true));
    dispatch(setNavCollapse(!ui.navCollapse));
    StorageApp.setItem({ navCollapse: !ui.navCollapse });
  };
  const onPressItem = (e: any) => {
    history.push(`${path}/category/` + e?._id);
    callbackHideNav();
  };
  const onSelect = (e: any) => {
    setCurrent(e);
  };
  return (
    <>
      <nav
        className={`dashboard__nav ${
          ui.navCollapse ? "" : "dashboard__nav--show"
        }`}
      >
        <div className="dashboard__nav--wrapper">
          {loading ? (
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                width: "100%",
              }}
            >
              <LoadingPage />
            </div>
          ) : current ? (
            <>
              <ul className="dashboard__nav--category scroll-material">
                {categories?.map((cate: any) => (
                  <ItemNav
                    key={cate?._id}
                    data={cate}
                    onClick={onPressItem}
                    onSelect={onSelect}
                  />
                ))}
              </ul>
              <div className="dashboard__nav--detail scroll-material">
                <h1>{current?.name}</h1>
                <ImageView src={current?.photo} />
                <div>Detail for categrory {current?._id}</div>
              </div>
            </>
          ) : null}
        </div>
        {!ui.hide && (
          <div
            onClick={callbackHideNav}
            className="overlay__fade dashboard__nav__close"
          />
        )}
      </nav>
    </>
  );
};

export default Nav;
