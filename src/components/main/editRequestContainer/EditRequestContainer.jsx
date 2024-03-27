/* eslint-disable react/prop-types */

import './EditRequestContainer.css';

import axios from '../../../api/axios.js';
const APPROVE_URL = 'request/approve/';
import { useNavigate } from 'react-router-dom';

import {
  patchDocument,
  PatchType,
  TextRun,
  UnderlineType,
} from 'docx';
import { useState } from 'react';
export const EditRequestContainer = ({
  currentRequest,
  onEditRequest,
  onEventApproved,
}) => {
  const [btnClicked, setBtnClicked] = useState(false);
  const requestType =
    currentRequest.type == 'Barangay Indigency'
      ? 'INDIGENCY'
      : currentRequest.type == 'Barangay Clearance'
      ? 'BRGY_CLEARANCE'
      : currentRequest.type == 'Barangay Residency'
      ? 'RESIDENCY'
      : 'BS_CLEARANCE';
  const navigate = useNavigate();

  const handleOnApproved = async () => {
    const id = currentRequest._id;
    try {
      const response = await axios.post(`${APPROVE_URL}${id}`);

      if (response.status === 200) {
        onEventApproved();
        setBtnClicked((btnClicked) => !btnClicked);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const downloadFile = async () => {
    const date = new Date().toDateString();
    const day = date.split(' ')[2];
    const monthYear = [date.split(' ')[1], date.split(' ')[3]].join(
      ' '
    );
    const age = currentRequest.userData.age;

    try {
      const response = await fetch(`${requestType}.docx`);
      if (!response.ok) {
        throw new Error('Failed to load file');
      }

      const fileBuffer = await response.arrayBuffer();

      let docOb;

      switch (requestType) {
        case 'INDIGENCY':
          docOb = {
            patches: {
              NAME: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: `${currentRequest.userData.firstName} ${currentRequest.userData.lastName}`,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              PURP: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: currentRequest.purpose,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              DAY: {
                type: PatchType.ParagraphChild,
                children: [
                  new TextRun({
                    text: day,
                    size: 27,
                  }),
                ],
              },
              CURRENT_DATE: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: monthYear,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
            },
          };

          break;
        case 'BRGY_CLEARANCE':
          docOb = {
            patches: {
              surname: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: `${currentRequest.userData.lastName}`,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              firstname: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: `${currentRequest.userData.firstName}, ${age}`,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              date: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: currentRequest.userData.dateOfBirth,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              DAY: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: day,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              DATE: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: monthYear,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              DATE_X: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: `${day} ${monthYear}`,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
            },
          };
          break;
        case 'RESIDENCY':
          console.log('resice');
          docOb = {
            patches: {
              NAME_AGE: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: `${currentRequest.userData.firstName}`,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              date: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: currentRequest.userData.dateOfBirth,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              DAY: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: day,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              DATE: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: monthYear,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
            },
          };
          break;
        case 'BS_CLEARANCE':
          console.log('resice');
          docOb = {
            patches: {
              PURP: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: `${currentRequest.purpose}`,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              NAME: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: `${currentRequest.userData.firstName} ${currentRequest.userData.lastName}`,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              DATE: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: `${day} ${monthYear}`,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
            },
          };
          break;
      }

      const doc = await patchDocument(fileBuffer, docOb);
      if (doc) console.log('nice');

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

  const handleOnPrint = async () => {
    const date = new Date().toDateString();
    const day = date.split(' ')[2];
    const monthYear = [date.split(' ')[1], date.split(' ')[3]].join(
      ' '
    );
    const age = currentRequest.userData.age;

    try {
      const response = await fetch(`${requestType}.docx`);
      if (!response.ok) {
        throw new Error('Failed to load file');
      }

      const fileBuffer = await response.arrayBuffer();

      let docOb;

      switch (requestType) {
        case 'INDIGENCY':
          docOb = {
            patches: {
              NAME: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: `${currentRequest.userData.firstName} ${currentRequest.userData.lastName}`,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              PURP: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: currentRequest.purpose,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              DAY: {
                type: PatchType.ParagraphChild,
                children: [
                  new TextRun({
                    text: day,
                    size: 27,
                  }),
                ],
              },
              CURRENT_DATE: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: monthYear,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
            },
          };

          break;
        case 'BRGY_CLEARANCE':
          docOb = {
            patches: {
              surname: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: `${currentRequest.userData.lastName}`,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              firstname: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: `${currentRequest.userData.firstName}, ${age}`,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              date: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: currentRequest.userData.dateOfBirth,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              DAY: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: day,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              DATE: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: monthYear,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              DATE_X: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: `${day} ${monthYear}`,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
            },
          };
          break;
        case 'RESIDENCY':
          console.log('resice');
          docOb = {
            patches: {
              NAME_AGE: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: `${currentRequest.userData.firstName}`,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              date: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: currentRequest.userData.dateOfBirth,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              DAY: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: day,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              DATE: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: monthYear,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
            },
          };
          break;
        case 'BS_CLEARANCE':
          console.log('resice');
          docOb = {
            patches: {
              PURP: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: `${currentRequest.purpose}`,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              NAME: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: `${currentRequest.userData.firstName} ${currentRequest.userData.lastName}`,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
              DATE: {
                type: PatchType.PARAGRAPH,
                children: [
                  new TextRun({
                    text: `${day} ${monthYear}`,
                    size: 27,
                    bold: true,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000',
                    },
                  }),
                ],
              },
            },
          };
          break;
      }

      const doc = await patchDocument(fileBuffer, docOb);
      if (doc) console.log('nice');

      const blob = new Blob([doc], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });

      const blobURL = URL.createObjectURL(blob);
      navigate(`/print?blobURL=${encodeURIComponent(blobURL)}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="edit-container">
      <div className="edit-head-container">
        <div className="title-form-container">
          <div className="title">
            <h3>Edit Request</h3>
            {currentRequest.status == 'Pending' && (
              <p>Pending Request</p>
            )}
            {currentRequest.status == 'Approved' && (
              <p style={{ color: '#008767' }}>Approved Request</p>
            )}
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
            {currentRequest.status == 'Approved' || btnClicked ? (
              <>
                <button className="download" onClick={handleOnClick}>
                  Download
                </button>
                <button className="print" onClick={handleOnPrint}>
                  Print
                </button>
              </>
            ) : (
              <>
                <button disabled>Download</button>
                {/* <button disabled>Print</button> */}
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
          {currentRequest.status == 'Approved' || btnClicked ? (
            <button className="dis" disabled>
              Approved
            </button>
          ) : (
            <button className="app-btn" onClick={handleOnApproved}>
              Approve
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
