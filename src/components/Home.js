import Footer from './layouts/Footer';
import RecentOrders from './RecentOrders';
import ProductCategory from './ProductCategory';
import Sales from './Sales';
import Salesfor from './Salesfor';

import Revenue from './Revenue';

function Home() {
    return (

        <div class="dashboard-wrapper">
            <div className="dashboard-ecommerce">
                <div className="container-fluid dashboard-content ">
                    {/* ============================================================== */}
                    {/* pageheader  */}
                    {/* ============================================================== */}
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="page-header">
                                <h2 className="pageheader-title">E-commerce Dashboard Template </h2>
                                <p className="pageheader-text">Nulla euismod urna eros, sit amet scelerisque torton lectus vel mauris facilisis faucibus at enim quis massa lobortis rutrum.</p>
                                <div className="page-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">E-Commerce Dashboard Template</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ============================================================== */}
                    {/* end pageheader  */}
                    {/* ============================================================== */}
                    <div className="ecommerce-widget">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="text-muted">Total Revenue</h5>
                                        <div className="metric-value d-inline-block">
                                            <h1 className="mb-1">$12099</h1>
                                        </div>
                                        <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                                            <span><i className="fa fa-fw fa-arrow-up" /></span><span>5.86%</span>
                                        </div>
                                    </div>
                                    <div id="sparkline-revenue" />
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="text-muted">Affiliate Revenue</h5>
                                        <div className="metric-value d-inline-block">
                                            <h1 className="mb-1">$12099</h1>
                                        </div>
                                        <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                                            <span><i className="fa fa-fw fa-arrow-up" /></span><span>5.86%</span>
                                        </div>
                                    </div>
                                    <div id="sparkline-revenue2" />
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="text-muted">Refunds</h5>
                                        <div className="metric-value d-inline-block">
                                            <h1 className="mb-1">0.00</h1>
                                        </div>
                                        <div className="metric-label d-inline-block float-right text-primary font-weight-bold">
                                            <span>N/A</span>
                                        </div>
                                    </div>
                                    <div id="sparkline-revenue3" />
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="text-muted">Avg. Revenue Per User</h5>
                                        <div className="metric-value d-inline-block">
                                            <h1 className="mb-1">$28000</h1>
                                        </div>
                                        <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
                                            <span>-2.00%</span>
                                        </div>
                                    </div>
                                    <div id="sparkline-revenue4" />
                                </div>
                            </div>
                        </div>
                        < RecentOrders />
                       < ProductCategory />
                       < Sales />
                        
                        <div className="row">
                           
                            < Revenue />
              
                            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header"> Total Revenue</h5>
                                    <div className="card-body">
                                        <div id="morris_totalrevenue" />
                                    </div>
                                    <div className="card-footer">
                                        <p className="display-7 font-weight-bold"><span className="text-primary d-inline-block">$26,000</span><span className="text-success float-right">+9.45%</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        < Salesfor />
                    </div>
                </div>
            </div>
          
            < Footer />
        </div >

    );
}

export default Home;
