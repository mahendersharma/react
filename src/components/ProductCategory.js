function ProductCategory() {

    return (
        <div className="row">
            {/* ============================================================== */}
            {/* product category  */}
            {/* ============================================================== */}
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="card">
                    <h5 className="card-header"> Product Category</h5>
                    <div className="card-body">
                        <div className="ct-chart-category ct-golden-section" style={{ height: '315px' }} />
                        <div className="text-center m-t-40">
                            <span className="legend-item mr-3">
                                <span className="fa-xs text-primary mr-1 legend-tile"><i className="fa fa-fw fa-square-full " /></span><span className="legend-text">Man</span>
                            </span>
                            <span className="legend-item mr-3">
                                <span className="fa-xs text-secondary mr-1 legend-tile"><i className="fa fa-fw fa-square-full" /></span>
                                <span className="legend-text">Woman</span>
                            </span>
                            <span className="legend-item mr-3">
                                <span className="fa-xs text-info mr-1 legend-tile"><i className="fa fa-fw fa-square-full" /></span>
                                <span className="legend-text">Accessories</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============================================================== */}
            {/* end product category  */}
            {/* product sales  */}
            {/* ============================================================== */}
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card">
                    <div className="card-header">
                        {/* <div class="float-right">
                        <select class="custom-select">
                            <option selected>Today</option>
                            <option value="1">Weekly</option>
                            <option value="2">Monthly</option>
                            <option value="3">Yearly</option>
                        </select>
                    </div> */}
                        <h5 className="mb-0"> Product Sales</h5>
                    </div>
                    <div className="card-body">
                        <div className="ct-chart-product ct-golden-section" />
                    </div>
                </div>
            </div>
            {/* ============================================================== */}
            {/* end product sales  */}
            {/* ============================================================== */}
            <div className="col-xl-3 col-lg-12 col-md-6 col-sm-12 col-12">
                {/* ============================================================== */}
                {/* top perfomimg  */}
                {/* ============================================================== */}
                <div className="card">
                    <h5 className="card-header">Top Performing Campaigns</h5>
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table no-wrap p-table">
                                <thead className="bg-light">
                                    <tr className="border-0">
                                        <th className="border-0">Campaign</th>
                                        <th className="border-0">Visits</th>
                                        <th className="border-0">Revenue</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Campaign#1</td>
                                        <td>98,789 </td>
                                        <td>$4563</td>
                                    </tr>
                                    <tr>
                                        <td>Campaign#2</td>
                                        <td>2,789 </td>
                                        <td>$325</td>
                                    </tr>
                                    <tr>
                                        <td>Campaign#3</td>
                                        <td>1,459 </td>
                                        <td>$225</td>
                                    </tr>
                                    <tr>
                                        <td>Campaign#4</td>
                                        <td>5,035 </td>
                                        <td>$856</td>
                                    </tr>
                                    <tr>
                                        <td>Campaign#5</td>
                                        <td>10,000 </td>
                                        <td>$1000</td>
                                    </tr>
                                    <tr>
                                        <td>Campaign#5</td>
                                        <td>10,000 </td>
                                        <td>$1000</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>
                                            <a href="#" className="btn btn-outline-light float-right">Details</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* ============================================================== */}
                {/* end top perfomimg  */}
                {/* ============================================================== */}
            </div>
        </div>
    );
}

export default ProductCategory;