/* eslint-disable react/prop-types */

export const List = ({ request }) => {
  const fullName = `${request.userData.firstName} ${request.userData.lastName}`;
  return (
    <tr className="list-content">
      <td>{fullName}</td>
      <td>{request.type}</td>
      <td>{request.purpose}</td>
      <td>{request.userData.email}</td>
      <td>{request.userData.phoneNumber}</td>
      <td>
        <span className="pending">Pending</span>
      </td>
    </tr>
  );
};
