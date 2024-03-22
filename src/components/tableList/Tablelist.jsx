/* eslint-disable react/prop-types */

import { List } from '../list/List';

export const TableList = ({ requests }) => {
  return (
    <table className="table-list">
      <thead>
        <tr>
          <th className="haha">Name</th>
          <th className="haha">Type</th>
          <th className="haha">Purpose</th>
          <th className="haha">Email</th>
          <th className="haha">Phone Number</th>
          <th className="haha">Status</th>
        </tr>
      </thead>
      <tbody className="table-list-body">
        {requests.slice(0, 8).map((request) => (
          <List key={request._id} request={request} />
        ))}
      </tbody>
    </table>
  );
};
