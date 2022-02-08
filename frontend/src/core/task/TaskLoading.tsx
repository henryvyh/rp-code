import { LinearProgress } from "@mui/material";
import React from "react";
import "./taskLoading.sass";
const TaskLoading: React.FC = () => {
  return (
    <div className="loadingCreate-wrap">
      <div className="loadingCreate-body">
        <div className="loadingCreate-body-icon">
          <span className="bx bx-loader-alt bx-spin"></span>
        </div>
        <div>
          <LinearProgress color="inherit" />
        </div>
      </div>
    </div>
  );
};

export default TaskLoading;
