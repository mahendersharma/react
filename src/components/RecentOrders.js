function RecentOrders() {
    return (
        <div className="row">
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* recent orders  */}
            {/* ============================================================== */}
            <div className="col-xl-9 col-lg-12 col-md-6 col-sm-12 col-12">
                <div className="card">
                    <h5 className="card-header">Recent Orders</h5>
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table">
                                <thead className="bg-light">
                                    <tr className="border-0">
                                        <th className="border-0">#</th>
                                        <th className="border-0">Image</th>
                                        <th className="border-0">Product Name</th>
                                        <th className="border-0">Product Id</th>
                                        <th className="border-0">Quantity</th>
                                        <th className="border-0">Price</th>
                                        <th className="border-0">Order Time</th>
                                        <th className="border-0">Customer</th>
                                        <th className="border-0">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <div className="m-r-10"><img src="assets/images/product-pic.jpg" alt="user" className="rounded" width={45} /></div>
                                        </td>
                                        <td>Product #1 </td>
                                        <td>id000001 </td>
                                        <td>20</td>
                                        <td>$80.00</td>
                                        <td>27-08-2018 01:22:12</td>
                                        <td>Patricia J. King </td>
                                        <td><span className="badge-dot badge-brand mr-1" />InTransit </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <div className="m-r-10"><img src="assets/images/product-pic-2.jpg" alt="user" className="rounded" width={45} /></div>
                                        </td>
                                        <td>Product #2 </td>
                                        <td>id000002 </td>
                                        <td>12</td>
                                        <td>$180.00</td>
                                        <td>25-08-2018 21:12:56</td>
                                        <td>Rachel J. Wicker </td>
                                        <td><span className="badge-dot badge-success mr-1" />Delivered </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            <div className="m-r-10"><img src="assets/images/product-pic-3.jpg" alt="user" className="rounded" width={45} /></div>
                                        </td>
                                        <td>Product #3 </td>
                                        <td>id000003 </td>
                                        <td>23</td>
                                        <td>$820.00</td>
                                        <td>24-08-2018 14:12:77</td>
                                        <td>Michael K. Ledford </td>
                                        <td><span className="badge-dot badge-success mr-1" />Delivered </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>
                                            <div className="m-r-10"><img src="assets/images/product-pic-4.jpg" alt="user" className="rounded" width={45} /></div>
                                        </td>
                                        <td>Product #4 </td>
                                        <td>id000004 </td>
                                        <td>34</td>
                                        <td>$340.00</td>
                                        <td>23-08-2018 09:12:35</td>
                                        <td>Michael K. Ledford </td>
                                        <td><span className="badge-dot badge-success mr-1" />Delivered </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={9}><a href="#" className="btn btn-outline-light float-right">View Details</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============================================================== */}
            {/* end recent orders  */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* customer acquistion  */}
            {/* ============================================================== */}
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="card">
                    <h5 className="card-header">Customer Acquisition</h5>
                    <div className="card-body">
                        <div className="ct-chart ct-golden-section" style={{ height: '354px' }} />
                        <div className="text-center">
                            <span className="legend-item mr-2">
                                <span className="fa-xs text-primary mr-1 legend-tile"><i className="fa fa-fw fa-square-full" /></span>
                                <span className="legend-text">Returning</span>
                            </span>
                            <span className="legend-item mr-2">
                                <span className="fa-xs text-secondary mr-1 legend-tile"><i className="fa fa-fw fa-square-full" /></span>
                                <span className="legend-text">First Time</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============================================================== */}
            {/* end customer acquistion  */}
            {/* ============================================================== */}
        </div>
    );
}

export default RecentOrders;