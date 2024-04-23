import React from 'react'
import AuthLayout from '../../Layouts/AuthLayout'
import { Head } from '@inertiajs/react'

function Dashboard() {
  return (
    <AuthLayout>
      <Head title='Dashboard'/>
      <div className="row">
        <div className="col-md-6 col-xl-3">
          <div className="card bg-primary border-primary">
            <div className="card-body">
              <div className="mb-4">
                <span className="badge badge-soft-light float-right">Daily</span>
                <h5 className="card-title mb-0 text-white">Cost per Unit</h5>
              </div>
              <div className="row d-flex align-items-center mb-4">
                <div className="col-8">
                  <h2 className="d-flex align-items-center mb-0 text-white">
                    $17.21
                  </h2>
                </div>
                <div className="col-4 text-right">
                  <span className="text-white-50">12.5% <i className="mdi mdi-arrow-up"></i></span>
                </div>
              </div>

              <div className="progress badge-soft-light shadow-sm" style={{ height: "5px" }}>
                <div className="progress-bar bg-light" role="progressbar" style={{ width: "38%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3">
          <div className="card bg-success border-success">
            <div className="card-body">
              <div className="mb-4">
                <span className="badge badge-soft-light float-right">Per Week</span>
                <h5 className="card-title mb-0 text-white">Market Revenue</h5>
              </div>
              <div className="row d-flex align-items-center mb-4">
                <div className="col-8">
                  <h2 className="d-flex align-items-center text-white mb-0">
                    $1875.54
                  </h2>
                </div>
                <div className="col-4 text-right">
                  <span className="text-white-50">18.71% <i className="mdi mdi-arrow-down"></i></span>
                </div>
              </div>

              <div className="progress badge-soft-light shadow-sm" style={{ height: "7px" }}>
                <div className="progress-bar bg-light" role="progressbar" style={{ width: "38%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3">
          <div className="card bg-warning border-warning">
            <div className="card-body">
              <div className="mb-4">
                <span className="badge badge-soft-light float-right">Per Month</span>
                <h5 className="card-title mb-0 text-white">Expenses</h5>
              </div>
              <div className="row d-flex align-items-center mb-4">
                <div className="col-8">
                  <h2 className="d-flex align-items-center text-white mb-0">
                    $784.62
                  </h2>
                </div>
                <div className="col-4 text-right">
                  <span className="text-white-50">57% <i className="mdi mdi-arrow-up"></i></span>
                </div>
              </div>

              <div className="progress badge-soft-light shadow-sm" style={{ height: "7px" }}>
                <div className="progress-bar bg-light" role="progressbar" style={{ width: "38%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3">
          <div className="card bg-info border-info">
            <div className="card-body">
              <div className="mb-4">
                <span className="badge badge-soft-light float-right">All Time</span>
                <h5 className="card-title mb-0 text-white">Daily Visits</h5>
              </div>
              <div className="row d-flex align-items-center mb-4">
                <div className="col-8">
                  <h2 className="d-flex align-items-center text-white mb-0">
                    1,15,187
                  </h2>
                </div>
                <div className="col-4 text-right">
                  <span className="text-white-50">17.8% <i className="mdi mdi-arrow-down"></i></span>
                </div>
              </div>

              <div className="progress badge-soft-light shadow-sm" style={{ height: "5px" }}>
                <div className="progress-bar bg-light" role="progressbar" style={{ width: "38%" }}></div>
              </div>
            </div>
          </div>
        </div>

      </div>


    </AuthLayout>
  )
}

export default Dashboard