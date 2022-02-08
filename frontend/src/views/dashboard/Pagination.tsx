import React from "react";
import { Stack, Pagination } from "@mui/material";
interface IProps {
  paginate: any;
  page: any;
  handleChange: any;
}
const PaginationView = (props: IProps) => {
  const { paginate, page, handleChange } = props;
  const { limit, total } = paginate;
  const _pages = Math.floor(total / limit);
  return (
    <Stack alignItems="center" padding={2}>
      <Pagination
        count={_pages}
        page={page}
        boundaryCount={3}
        onChange={handleChange}
        showFirstButton
        showLastButton
        className="pagination--center"
      />
    </Stack>
  );
};

export default PaginationView;
