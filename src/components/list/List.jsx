/* eslint-disable react/prop-types */

export const List = ({ request, onEditRequest }) => {
  const fullName = `${request.userData.firstName} ${request.userData.lastName}`;

  return (
    <tr
      className="list-content"
      onClick={() => onEditRequest(request)}
    >
      <td>{fullName}</td>
      <td>{request.type}</td>
      <td>{request.purpose}</td>
      <td>{request.userData.email}</td>
      <td>{request.userData.phoneNumber}</td>
      <td>
        <span
          className={
            request.status == 'Pending' ? 'pending' : 'approved'
          }
        >
          {request.status}
        </span>
      </td>
    </tr>
  );
};
