import React from 'react';
import AddDaigramPopUp from './addDaigramPopUp';
import './stockAllocation.css';

class StockAllocation extends React.Component {

  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="row pt-2">
          <div className="col-sm form-inline">
            <label>Date</label>
            <input type="date" className="form-control mb-2" name="date" id="date" />
          </div>
          <div className="col-sm form-inline">
            <label>Unit</label>
            <input type="text" className="form-control mb-2" name="unit" id="unit" />
          </div>
          <div className="col-sm">
            <button type="submit" className="btn-sm btn-danger mb-2 float-right">Search</button>
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-sm form-inline">
            <label className="">Start of Day Location</label>
            <input type="text" className="form-control mb-2" name="startLoc" id="startLoc" />
          </div>
          <div className="col-sm form-inline">
            <label className="">Start of Day Diagram</label>
            <input type="text" className="form-control mb-2" name="startDaigram" id="startDaigram" />
          </div>
          <div className="col-sm form-inline">
            <label className="">Availibility</label>
            <input type="text" className="form-control mb-2" name="availibility" id="availibility" />
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-sm form-inline ">
            <label className="">Miles Allocated Today</label>
            <input type="text" className="form-control mb-2" name="milesAllocatedToday" id="milesAllocatedToday" />
          </div>
          <div className="col-sm form-inline">
            <label className="">Depot at EOD</label>
            <input type="text" className="form-control mb-2" name="depotAtEOD" id="depotAtEOD" />
          </div>
          <div className="col-sm form-inline">
            <label className="">EOD Location</label>
            <input type="text" className="form-control mb-2" name="EODLoc" id="EODLoc" />
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-sm form-inline pull right">
            <label className="">Status</label>
            <input type="text" className="form-control mb-2" name="status" id="status" />
          </div>
          <div className="col-sm">
            <button type="submit" className="btn-sm btn-danger mb-2 float-right" onClick={this.togglePopup.bind(this)}>Add Daigram</button>
            {this.state.showPopup ?
              <AddDaigramPopUp
                text='Close Me'
                closePopup={this.togglePopup.bind(this)}
              />
              : null
            }
          </div>
          <div className="col-sm">
            <button type="submit" className="btn-sm btn-danger mb-2 float-right">Start</button>
          </div>
          <div className="col-sm">
            <button type="submit" className="btn-sm btn-danger mb-2 float-right">Cancel</button>
          </div>
        </div>

        {/* table starts here */}
        <div>
          <table>
            <thead>
              <tr>
                <th>UNIT</th>
                <th>DIAGRAM ID</th>
                <th>DAYS</th>
                <th>FROM</th>
                <th>UNTIL</th>
                <th>TYPE</th>
                <th>FLEET</th>
                <th>LOCATION</th>
                <th>TIPLOC</th>
                <th>ARR</th>
                <th>DEP</th>
                <th>HEADCODE</th>
                <th>ROUTE</th>
                <th>MILEAGE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>8030021</td>
                <td>LD 1</td>
                <td>SX</td>
                <td>07/06/2021</td>
                <td>10/06/2021</td>
                <td>LTP</td>
                <td>803</td>
                <td>Feme Park Repo</td>
                <td>FRMPKRS</td>
                <td>11:00</td>
                <td>12:00</td>
                <td>5S91GL</td>
                <td>Reverse</td>
                <td>3.66</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>
    )

  }
}

export default StockAllocation;