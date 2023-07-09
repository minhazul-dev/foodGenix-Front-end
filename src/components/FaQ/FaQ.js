import React from 'react';
import './FaQ.css'
const FaQ = () => {
    return (
        <div className="container-fluid">
        {/* Row */}
        <div className="row">
          <div className="col-xl-12 pa-0">
            <div className="faq-search-wrap bg-teal-light-3">
              <div className="container">
                <h1 className="display-5 text-white mb-20">Ask a question or browse by category below.</h1>
                <div className="form-group w-100 mb-0">
                  <div className="input-group">
                    <input className="form-control form-control-lg filled-input bg-white" placeholder="Search by keywords" type="text" />
                    <div className="input-group-append">
                      <span className="input-group-text"><span className="feather-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-sm-60 mt-30">
              <div className="hk-row">
                <div className="col-xl-4">
                  <div className="card">
                    <h6 className="card-header">
                      Category
                    </h6>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex align-items-center active">
                        <i className="ion ion-md-sunny mr-15" />Terms &amp; conditions<span className="badge badge-light badge-pill ml-15">06</span>
                      </li>
                      <li className="list-group-item d-flex align-items-center">
                        <i className="ion ion-md-unlock mr-15" />Privacy policy<span className="badge badge-light badge-pill ml-15">14</span>
                      </li>
                      <li className="list-group-item d-flex align-items-center">
                        <i className="ion ion-md-bookmark mr-15" />Terms of use<span className="badge badge-light badge-pill ml-15">10</span>
                      </li>
                      <li className="list-group-item d-flex align-items-center">
                        <i className="ion ion-md-filing mr-15" />Documentation<span className="badge badge-light badge-pill ml-15">27</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="card card-lg">
                    <h3 className="card-header border-bottom-0">
                      Terms and Conditions
                    </h3>
                    <div className="accordion accordion-type-2 accordion-flush" id="accordion_2">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between activestate">
                          <a role="button" data-toggle="collapse" href="#collapse_1i" aria-expanded="true">The Intellectual Property</a>
                        </div>
                        <div id="collapse_1i" className="collapse show" data-parent="#accordion_2" role="tabpanel">
                          <div className="card-body pa-15">The Intellectual Property disclosure will inform users that the contents, logo and other visual media you created is your property and is protected by copyright laws.</div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header d-flex justify-content-between">
                          <a className="collapsed" role="button" data-toggle="collapse" href="#collapse_2i" aria-expanded="false">Termination clause</a>
                        </div>
                        <div id="collapse_2i" className="collapse" data-parent="#accordion_2">
                          <div className="card-body pa-15">A Termination clause will inform that users’ accounts on your website and mobile app or users’ access to your website and mobile (if users can’t have an account with you) can be terminated in case of abuses or at your sole discretion.</div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header d-flex justify-content-between">
                          <a className="collapsed" role="button" data-toggle="collapse" href="#collapse_3i" aria-expanded="false">Governing Law</a>
                        </div>
                        <div id="collapse_3i" className="collapse" data-parent="#accordion_2">
                          <div className="card-body pa-15">A Governing Law will inform users which laws govern the agreement. This should the country in which your company is headquartered or the country from which you operate your website and mobile app.</div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header d-flex justify-content-between">
                          <a className="collapsed" role="button" data-toggle="collapse" href="#collapse_4i" aria-expanded="false">Limit what users can do</a>
                        </div>
                        <div id="collapse_4i" className="collapse" data-parent="#accordion_2">
                          <div className="card-body pa-15">A Limit What Users Can Do clause can inform users that by agreeing to use your service, they’re also agreeing to not do certain things. This can be part of a very long and thorough list in your Terms and Conditions agreements so as to encompass the most amount of negative uses.</div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header d-flex justify-content-between">
                          <a className="collapsed" role="button" data-toggle="collapse" href="#collapse_5i" aria-expanded="false">Limitation of liability of your products</a>
                        </div>
                        <div id="collapse_5i" className="collapse" data-parent="#accordion_2">
                          <div className="card-body pa-15">No matter what kind of goods you sell, best practices direct you to present any warranties you are disclaiming and liabilities you are limiting in a way that your customers will notice.</div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header d-flex justify-content-between">
                          <a className="collapsed" role="button" data-toggle="collapse" href="#collapse_6i" aria-expanded="false">How to enforce Terms and Conditions</a>
                        </div>
                        <div id="collapse_6i" className="collapse" data-parent="#accordion_2">
                          <div className="card-body pa-15">While creating and having a Terms and Conditions is important, it’s far more important to understand how you can make the Terms and Conditions enforceable. You should always use clickwrap to get users to agree to your Terms and Conditions. Clickwrap is when you make your users take some action – typically clicking something – to show they’re agreeing. Here’s how Engine Yard uses the clickwrap agreement with the I agree check box:</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Row */}
      </div>
    );
};

export default FaQ;