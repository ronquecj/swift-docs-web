import './EditRequestContainer.css';

export const EditRequestContainer = () => {
  return (
    <div className="edit-container">
      <div className="edit-head-container">
        <div className="title-form-container">
          <div className="title">
            <h3>Edit Request</h3>
            <p>Pending Request</p>
          </div>

          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-rounded/24/delete-sign.png"
            alt="delete-sign"
            style={{ marginTop: '10px' }}
            className="close-edit"
          />
        </div>
        <p className="type-request">
          Barangay Clearance <span>docx</span>
        </p>
      </div>
      <div className="details-container">
        <div className="actions">
          <div>
            <p className="file-name">
              JohnBellen-BarangayClearance.docx
            </p>
            <p className="quantity">
              Quantity: <span>2</span>
            </p>
          </div>
          <div className="buttons">
            <button className="download">Download</button>
            <button className="print">Print</button>
          </div>
        </div>
        <div className="details">
          <p className="details-title">Details</p>
          <ul>
            <li>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/puffy/32/test-account.png"
                alt="test-account"
              />
              <p>John Bellen</p>
            </li>
            <li>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-outlined/24/new-post.png"
                alt="new-post"
              />
              <p>johnbellen@gmail.com</p>
            </li>
            <li>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-outlined/24/calendar--v1.png"
                alt="calendar--v1"
              />
              <p>February 26, 2024</p>
            </li>
            <li>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/forma-light/24/phone.png"
                alt="phone"
              />
              <p>09308926152</p>
            </li>
          </ul>
          <button>Approve</button>
        </div>
      </div>
    </div>
  );
};
