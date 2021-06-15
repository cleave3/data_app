import { Fragment, useState } from "react";
import { BarChart } from "./components/BarChart";
import Datatable from "./components/Datatable";
import { HorizontalChart } from "./components/HorizontalChart";
import { LineChart } from "./components/LineChart";
import { PieChart } from "./components/PieChart";
import { RadarChart } from "./components/RadarChart";
import UseAppState from "./hooks/UseAppState";
import { filters } from "./utils/utilities";

const App = () => {

  const [filter, setFilter] = useState("state");
  const { isLoading, error, data, rawdata } = UseAppState();

  return (
    <div className="container-fluid my-5">
      {isLoading && <div style={{ height: "50vh", display: "grid", placeItems: "center" }}>
        <div className="loader"></div>
        <small>Fetching Data ...</small>
      </div>}
      {!isLoading && error &&
        <div className="text-center text-white bg-danger p-5">{error}</div>}
      {data && <Fragment>
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">RESULTS ANALYSIS</h1>
          </div>
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <div className="form-group">
                <label htmlFor="filter">Filter By</label>
                <select className="custom-select" defaultValue={filter} onChange={(e) => setFilter(e.currentTarget.value)}>
                  {filters.map((filter, i) => <option key={i} value={filter.value}>{filter.label}</option>)}
                </select>
                <small id="helpId" className="form-text text-muted">Analyse by specific filter</small>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Sales Analysis by {filter}</div>
              <div className="card-body">
                <PieChart labels={data[filter].labels} data={data[filter].sales} label="sales" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Profit Analysis by {filter}</div>
              <div className="card-body">
                <PieChart labels={data[filter].labels} data={data[filter].profit} label="profits" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Sales/Profit Analysis by {filter}</div>
              <div className="card-body">
                <HorizontalChart data={data[filter]} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Sales/Profit Analysis by {filter}</div>
              <div className="card-body">
                <RadarChart data={data[filter]} />
              </div>
            </div>
          </div>
          <div className={`col-md-${data[filter].labels.length > 10 ? "12" : "6"}`}>
            <div className="card">
              <div className="card-header">Sales/Profit Analysis by {filter}</div>
              <div className="card-body">
                <LineChart data={data[filter]} />
              </div>
            </div>
          </div>
          <div className={`col-md-${data[filter].labels.length > 10 ? "12" : "6"}`}>
            <div className="card">
              <div className="card-header">Sales/Profit Analysis by {filter}</div>
              <div className="card-body">
                <BarChart data={data[filter]} />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <Datatable data={rawdata || []} />
              </div>
            </div>
          </div>
        </div>

      </Fragment>}
    </div>
  )
}

export default App;
