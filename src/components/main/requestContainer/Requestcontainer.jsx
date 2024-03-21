export const Requestcontainer = () => {
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
            <select name="" id="">
              <option value="">Newest</option>
              <option value="">Nice</option>
            </select>
          </div>
        </form>
      </div>
      <div className="bot-dash">
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
          <tbody>
            <tr className="list-content">
              <td>Jamalish Crack</td>
              <td>Brangay Clearance</td>
              <td>Educational Assistancec</td>
              <td>nice@yahoo.com</td>
              <td>092392039</td>
              <td>
                <span className="pending">Pending</span>
              </td>
            </tr>
            <tr className="list-content">
              <td>Jamalish Crack</td>
              <td>Brangay Clearance</td>
              <td>Educational Assistancec</td>
              <td>nice@yahoo.com</td>
              <td>092392039</td>
              <td>
                <span className="pending">Pending</span>
              </td>
            </tr>
            <tr className="list-content">
              <td>Jamalish Crack</td>
              <td>Brangay Clearance</td>
              <td>Educational Assistancec</td>
              <td>nice@yahoo.com</td>
              <td>092392039</td>
              <td>
                <span className="pending">Pending</span>
              </td>
            </tr>
            <tr className="list-content">
              <td>Jamalish Crack</td>
              <td>Brangay Clearance</td>
              <td>Educational Assistancec</td>
              <td>nice@yahoo.com</td>
              <td>092392039</td>
              <td>
                <span className="approved">Approved</span>
              </td>
            </tr>
            <tr className="list-content">
              <td>Jamalish Crack</td>
              <td>Brangay Clearance</td>
              <td>Educational Assistancec</td>
              <td>nice@yahoo.com</td>
              <td>092392039</td>
              <td>
                <span className="approved">Approved</span>
              </td>
            </tr>
            <tr className="list-content">
              <td>Jamalish Crack</td>
              <td>Brangay Clearance</td>
              <td>Educational Assistancec</td>
              <td>nice@yahoo.com</td>
              <td>092392039</td>
              <td>
                <span className="approved">Approved</span>
              </td>
            </tr>
            <tr className="list-content">
              <td>Jamalish Crack</td>
              <td>Brangay Clearance</td>
              <td>Educational Assistancec</td>
              <td>nice@yahoo.com</td>
              <td>092392039</td>
              <td>
                <span className="approved">Approved</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="pagination">
          <div className="pagination-status">
            <p>Showing data X to X of X entries</p>
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
            <p className="page-num">40</p>
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
