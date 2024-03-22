/* eslint-disable react/prop-types */

import { Requestcontainer } from '../requestContainer/Requestcontainer';
import { Taskcounter } from '../taskCounter/Taskcounter';
import { EditRequestContainer } from '../editRequestContainer/EditRequestContainer.jsx';
import './Dashboard.css';

import axios from '../../../api/axios.js';
import { useEffect, useState } from 'react';
const REQUEST_URL = '/request';

export const Dashboard = ({ isOnMobile }) => {
  const [requests, setRequests] = useState([]);
  const [editRequest, setEditRequest] = useState(false);
  const [currentRequest, setCurrentRequest] = useState(null);

  const handleOnEditRequest = (request) => {
    setEditRequest((editRequest) => !editRequest);
    setCurrentRequest(request);
  };

  useEffect(() => {
    const fetchAllRequest = async () => {
      try {
        const response = await axios.get(REQUEST_URL);
        const data = response.data;

        setRequests(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAllRequest();
  }, []);

  return (
    <div className="dashboard">
      <Taskcounter requests={requests} isOnMobile={isOnMobile} />
      {editRequest ? (
        <EditRequestContainer
          onEditRequest={handleOnEditRequest}
          currentRequest={currentRequest}
        />
      ) : (
        <Requestcontainer
          requests={requests}
          onEditRequest={handleOnEditRequest}
        />
      )}
    </div>
  );
};
