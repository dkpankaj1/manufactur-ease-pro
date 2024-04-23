import React,{useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { usePage } from '@inertiajs/react';

import '../../assets/css/bootstrap.min.css';
import '../../assets/css/icons.min.css';
import '../../assets/css/theme.min.css';

import 'react-toastify/dist/ReactToastify.css';

function Guest({ children }) {

  const { flash } = usePage().props;
  useEffect(() => {
    flash.success && toast.success(flash.success);
    flash.danger && toast.error(flash.danger);
  }, [flash]);


  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center min-vh-100">
                <div className="w-100 d-block bg-white shadow-lg rounded my-5">
                  <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-login rounded-left"></div>
                    <div className="col-lg-7">
                      <div className="p-5">
                        <div className="text-center mb-5">
                          <a href="" className="text-dark font-size-22 font-family-secondary">
                            <b>X-ACTON</b>
                          </a>
                        </div>
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Guest