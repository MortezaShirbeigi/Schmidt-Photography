import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationItems = ({
  postsPerPage,
  totalPosts,
  paginate,
  activeNumber,
}) => {
  let active = activeNumber;
  let items = [];
  for (
    let number = 1;
    number <= Math.ceil(totalPosts / postsPerPage);
    number++
  ) {
    items.push(
      <Pagination.Item
        onClick={() => paginate(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );

  return <div>{paginationBasic}</div>;
};

export default PaginationItems;
