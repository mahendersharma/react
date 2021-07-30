function Salesfor() {
    return(

        <div className="row">
        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
            {/* ============================================================== */}
            {/* social source  */}
            {/* ============================================================== */}
            <div className="card">
                <h5 className="card-header"> Sales By Social Source</h5>
                <div className="card-body p-0">
                    <ul className="social-sales list-group list-group-flush">
                        <li className="list-group-item social-sales-content"><span className="social-sales-icon-circle facebook-bgcolor mr-2"><i className="fab fa-facebook-f" /></span><span className="social-sales-name">Facebook</span><span className="social-sales-count text-dark">120 Sales</span>
                        </li>
                        <li className="list-group-item social-sales-content"><span className="social-sales-icon-circle twitter-bgcolor mr-2"><i className="fab fa-twitter" /></span><span className="social-sales-name">Twitter</span><span className="social-sales-count text-dark">99 Sales</span>
                        </li>
                        <li className="list-group-item social-sales-content"><span className="social-sales-icon-circle instagram-bgcolor mr-2"><i className="fab fa-instagram" /></span><span className="social-sales-name">Instagram</span><span className="social-sales-count text-dark">76 Sales</span>
                        </li>
                        <li className="list-group-item social-sales-content"><span className="social-sales-icon-circle pinterest-bgcolor mr-2"><i className="fab fa-pinterest-p" /></span><span className="social-sales-name">Pinterest</span><span className="social-sales-count text-dark">56 Sales</span>
                        </li>
                        <li className="list-group-item social-sales-content"><span className="social-sales-icon-circle googleplus-bgcolor mr-2"><i className="fab fa-google-plus-g" /></span><span className="social-sales-name">Google Plus</span><span className="social-sales-count text-dark">36 Sales</span>
                        </li>
                    </ul>
                </div>
                <div className="card-footer text-center">
                    <a href="#" className="btn-primary-link">View Details</a>
                </div>
            </div>
            {/* ============================================================== */}
            {/* end social source  */}
            {/* ============================================================== */}
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
            {/* ============================================================== */}
            {/* sales traffice source  */}
            {/* ============================================================== */}
            <div className="card">
                <h5 className="card-header"> Sales By Traffic Source</h5>
                <div className="card-body p-0">
                    <ul className="traffic-sales list-group list-group-flush">
                        <li className="traffic-sales-content list-group-item "><span className="traffic-sales-name">Direct</span><span className="traffic-sales-amount">$4000.00  <span className="icon-circle-small icon-box-xs text-success ml-4 bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span><span className="ml-1 text-success">5.86%</span></span>
                        </li>
                        <li className="traffic-sales-content list-group-item"><span className="traffic-sales-name">Search<span className="traffic-sales-amount">$3123.00  <span className="icon-circle-small icon-box-xs text-success ml-4 bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span><span className="ml-1 text-success">5.86%</span></span>
                        </span>
                        </li>
                        <li className="traffic-sales-content list-group-item"><span className="traffic-sales-name">Social<span className="traffic-sales-amount ">$3099.00  <span className="icon-circle-small icon-box-xs text-success ml-4 bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span><span className="ml-1 text-success">5.86%</span></span>
                        </span>
                        </li>
                        <li className="traffic-sales-content list-group-item"><span className="traffic-sales-name">Referrals<span className="traffic-sales-amount ">$2220.00   <span className="icon-circle-small icon-box-xs text-danger ml-4 bg-danger-light"><i className="fa fa-fw fa-arrow-down" /></span><span className="ml-1 text-danger">4.02%</span></span>
                        </span>
                        </li>
                        <li className="traffic-sales-content list-group-item "><span className="traffic-sales-name">Email<span className="traffic-sales-amount">$1567.00   <span className="icon-circle-small icon-box-xs text-danger ml-4 bg-danger-light"><i className="fa fa-fw fa-arrow-down" /></span><span className="ml-1 text-danger">3.86%</span></span>
                        </span>
                        </li>
                    </ul>
                </div>
                <div className="card-footer text-center">
                    <a href="#" className="btn-primary-link">View Details</a>
                </div>
            </div>
        </div>
        {/* ============================================================== */}
        {/* end sales traffice source  */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* sales traffic country source  */}
        {/* ============================================================== */}
        <div className="col-xl-3 col-lg-12 col-md-6 col-sm-12 col-12">
            <div className="card">
                <h5 className="card-header">Sales By Country Traffic Source</h5>
                <div className="card-body p-0">
                    <ul className="country-sales list-group list-group-flush">
                        <li className="country-sales-content list-group-item"><span className="mr-2"><i className="flag-icon flag-icon-us" title="us" id="us" /> </span>
                            <span className>United States</span><span className="float-right text-dark">78%</span>
                        </li>
                        <li className="list-group-item country-sales-content"><span className="mr-2"><i className="flag-icon flag-icon-ca" title="ca" id="ca" /></span><span className>Canada</span><span className="float-right text-dark">7%</span>
                        </li>
                        <li className="list-group-item country-sales-content"><span className="mr-2"><i className="flag-icon flag-icon-ru" title="ru" id="ru" /></span><span className>Russia</span><span className="float-right text-dark">4%</span>
                        </li>
                        <li className="list-group-item country-sales-content"><span className=" mr-2"><i className="flag-icon flag-icon-in" title="in" id="in" /></span><span className>India</span><span className="float-right text-dark">12%</span>
                        </li>
                        <li className="list-group-item country-sales-content"><span className=" mr-2"><i className="flag-icon flag-icon-fr" title="fr" id="fr" /></span><span className>France</span><span className="float-right text-dark">16%</span>
                        </li>
                    </ul>
                </div>
                <div className="card-footer text-center">
                    <a href="#" className="btn-primary-link">View Details</a>
                </div>
            </div>
        </div>
        {/* ============================================================== */}
        {/* end sales traffice country source  */}
        {/* ============================================================== */}
    </div>
        );
    }
    
    export default Salesfor;