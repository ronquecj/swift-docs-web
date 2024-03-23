/* eslint-disable react/prop-types */

import { useState } from 'react';
import './EditRequestContainer.css';
import { patchDocument, PatchType, TextRun } from 'docx';

export const EditRequestContainer = ({
  currentRequest,
  onEditRequest,
}) => {
  const [isApproved, setIsApproved] = useState(false);
  const requestType =
    currentRequest.type == 'Barangay Indigency'
      ? 'INDIGENCY'
      : 'BRANGAY_CLEARANCE';

  const handleOnApproved = () => {
    setIsApproved((isApproved) => !isApproved);
  };

  const downloadFile = async () => {
    const date = new Date().toDateString();
    const day = date.split(' ')[2];
    const monthYear = [date.split(' ')[1], date.split(' ')[3]].join(
      ' '
    );

    try {
      const response = await fetch(`${requestType}.docx`);
      if (!response.ok) {
        throw new Error('Failed to load file');
      }

      const fileBuffer = await response.arrayBuffer();

      const doc = await patchDocument(fileBuffer, {
        patches: {
          NAME: {
            type: PatchType.PARAGRAPH,
            children: [
              new TextRun(
                `${currentRequest.userData.firstName} ${currentRequest.userData.lastName}`
              ),
            ],
          },
          PURPOSE: {
            type: PatchType.PARAGRAPH,
            children: [new TextRun(currentRequest.purpose)],
          },
          DAY: {
            type: PatchType.PARAGRAPH,
            children: [new TextRun(day)],
          },
          CURRENT_DATE: {
            type: PatchType.PARAGRAPH,
            children: [new TextRun(monthYear)],
          },
        },
      });

      const blob = new Blob([doc], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');

      a.href = url;
      a.download = `${currentRequest.userData.firstName}${
        currentRequest.userData.lastName
      }-${currentRequest.type.split(' ').join('')}.docx`;
      a.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleOnClick = () => {
    downloadFile();
  };

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
            onClick={onEditRequest}
          />
        </div>
        <p className="type-request">
          {currentRequest.type} <span>docx</span>
        </p>
      </div>
      <div className="details-container">
        <div className="actions">
          <div>
            <p className="file-name">
              {`${currentRequest.userData.firstName}${
                currentRequest.userData.lastName
              }-${currentRequest.type.split(' ').join('')}.docx`}
            </p>
            <p className="quantity">
              Quantity: <span>{currentRequest.quantity}</span>
            </p>
          </div>
          <div className="buttons">
            {isApproved ? (
              <>
                {' '}
                <button className="download" onClick={handleOnClick}>
                  Download
                </button>{' '}
                <button className="print">Print</button>
              </>
            ) : (
              <>
                <button disabled>Download</button>
                <button disabled>Print</button>
              </>
            )}
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
              <p>{`${currentRequest.userData.firstName} ${currentRequest.userData.lastName}`}</p>
            </li>
            <li>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-outlined/24/new-post.png"
                alt="new-post"
              />
              <p>{currentRequest.userData.email}</p>
            </li>
            <li>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-outlined/24/calendar--v1.png"
                alt="calendar--v1"
              />
              <p>{currentRequest.date}</p>
            </li>
            <li>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/forma-light/24/phone.png"
                alt="phone"
              />
              <p>{currentRequest.userData.phoneNumber}</p>
            </li>
          </ul>
          <button onClick={handleOnApproved}>Approve</button>
        </div>
      </div>
    </div>
  );
};
