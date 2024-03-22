/* eslint-disable react/prop-types */

import { useState } from 'react';
import { TableList } from '../../tableList/Tablelist';

export const Requestcontainer = ({ requests }) => {
  const [selected, setSelected] = useState('newest');
  const [selectedRequests, setSelectedRequests] = useState(null);
  const totalRequestCount = requests.length;

  let convertedCreatedAt = requests.map((req) => {
    return {
      ...req,
      conCreatedAt: dateToSeconds(req?.createdAt?.split('T')),
    };
  });

  const oldestRequest = convertedCreatedAt
    .slice()
    .sort((a, b) =>
      a.conCreatedAt < b.conCreatedAt
        ? 1
        : a.conCreatedAt > b.conCreatedAt
        ? -1
        : 0
    );

  const newestRequest = convertedCreatedAt
    .slice()
    .sort((a, b) =>
      a.conCreatedAt < b.conCreatedAt
        ? -1
        : a.conCreatedAt > b.conCreatedAt
        ? 1
        : 0
    );

  console.log(selectedRequests);

  const handleSelect = (e) => {
    setSelected(e?.target?.value);
    switch (selected) {
      case 'newest':
        setSelectedRequests(newestRequest);
        break;
      case 'oldest':
        setSelectedRequests(oldestRequest);
        break;
      default:
        setSelectedRequests(requests);
    }
  };

  function dateToSeconds(date) {
    if (date)
      return [
        date[0]
          .split('-')
          .map((date, i) =>
            i == 0
              ? Number(date) * 31536000
              : i == 1
              ? Number(
                  date
                    .split('')
                    .filter((n, ind) =>
                      ind == 0 ? (n == '0' ? '' : n) : n
                    )
                ) * 2629746
              : Number(date) * 86400
          )
          .reduce((acc, i) => acc + i),

        date[1]
          .split(':')
          .map((t) =>
            t
              .split('')
              .filter((l) => l !== 'Z')
              .join('')
              .split('.')
          )
          .filter((_, i) => i != 2)
          .map((time, i) => (i == 0 ? time * 3600 : time * 60))
          .reduce((acc, i) => acc + i),
      ].reduce((acc, i) => acc + i);
  }

  return (
    <div className="request-container">
      <div className="title-form-container">
        <div className="title">
          <h3>All Request</h3>
          <p>Pending Request</p>
        </div>
        <form action="" className="form-container">
          <div className="search">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/7e7e7e/search--v1.png"
              alt="search--v1"
            />
            <input type="text" placeholder="Search" />
          </div>
          <div className="sort">
            <span>Sort by: </span>
            <select
              value={selected}
              name=""
              id=""
              onChange={(e) => handleSelect(e)}
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </form>
      </div>
      <div className="bot-dash">
        <TableList
          requests={
            selectedRequests == null ? requests : selectedRequests
          }
        />
        <div className="pagination">
          <div className="pagination-status">
            <p>Showing data 1 to 8 of {requests.length} entries</p>
          </div>
          <div className="current-page">
            <button>
              <img
                width="12"
                height="12"
                src="https://img.icons8.com/metro/26/000000/back.png"
                alt="forward"
              />
            </button>
            <p className="active-page">1</p>
            <p className="page-num">2</p>
            <p className="page-num">3</p>
            <p className="page-num">4</p>
            <p className="page-num">...</p>
            <p className="page-num">{totalRequestCount}</p>
            <button>
              <img
                width="12"
                height="12"
                src="https://img.icons8.com/metro/26/000000/forward.png"
                alt="forward"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
