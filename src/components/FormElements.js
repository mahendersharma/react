import Footer from './layouts/Footer';
import Basic from './Basic';
import Select from './Select';
import Checkboxes from './Checkboxes';

function FormElements() {
    return (
        <div className="dashboard-wrapper">
  <div className="container-fluid dashboard-content">
    <div className="row">
      <div className="col-xl-10">
        {/* ============================================================== */}
        {/* pageheader  */}
        {/* ============================================================== */}
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="page-header" id="top">
              <h2 className="pageheader-title">Form Elements </h2>
              <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
              <div className="page-breadcrumb">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Forms</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Form Elements</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* end pageheader  */}
        {/* ============================================================== */}
        <div className="page-section" id="overview">
          {/* ============================================================== */}
          {/* overview  */}
          {/* ============================================================== */}
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h2>Overview</h2>
              <p className="lead">Nam pulvinar interdum turpis a mattis. Etiam augue leo, mollis a massa sagittis, egestas pretium risus. Aliquam auctor nibh mauris, at fringilla elit lobortis sodales. Praesent volutpat felis et placerat elementum. </p>
              <ul className="list-unstyled arrow">
                <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Mauris bibendum massa ut porttitor congue.</li>
                <li>Morbi condimentum magna eget facilisis accumsan.</li>
                <li>Proin euismod eros nec libero efficitur, a dapibus mauris condimentum. </li>
              </ul>
            </div>
          </div>
          {/* ============================================================== */}
          {/* end overview  */}
          {/* ============================================================== */}
        </div>
        {/* ============================================================== */}
        {/* basic form  */}
        {/* ============================================================== */}
     < Basic />
        {/* ============================================================== */}
        {/* end basic form  */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* select options  */}
        {/* ============================================================== */}
       < Select />
        {/* ============================================================== */}
        {/* end select options  */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* checkboxes and radio */}
        {/* ============================================================== */}
< Checkboxes />
        {/* ============================================================== */}
        {/* end checkboxes and radio */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* validation state */}
        {/* ============================================================== */}
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="section-block" id="validation">
              <h3 className="section-title">Validation States</h3>
              <p>Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
            </div>
            <div className="card">
              <h5 className="card-header">Validation States</h5>
              <div className="card-body">
                <form>
                  <label htmlFor="validationServer01">First name</label>
                  <input type="text" className="form-control is-valid" id="validationServer01" placeholder="First name" defaultValue="First name" required />
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                  <label className="col-form-label" htmlFor="validationCustom02">Error</label>
                  <input type="text" required className="form-control is-invalid" id="validationCustom02" />
                  <div className="invalid-feedback">
                    Please provide a valid text.
                  </div>
                </form>
              </div>
              <div className="card-body border-top">
                <form>
                  <h5>Checkbox</h5>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input is-valid" id="customControlValidation1" required />
                    <label className="custom-control-label" htmlFor="customControlValidation1">Success</label>
                  </div>
                  <div className="custom-control custom-checkbox was-validated">
                    <input type="checkbox" className="custom-control-input is-invalid" id="customControlValidation2" required />
                    <label className="custom-control-label" htmlFor="customControlValidation2">Error</label>
                  </div>
                  <h5>Radio</h5>
                  <div className="custom-control custom-radio">
                    <input type="radio" className="custom-control-input is-valid" id="customControlValidation3" name="radio-stacked" required />
                    <label className="custom-control-label" htmlFor="customControlValidation3">Success</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input type="radio" className="custom-control-input is-invalid" id="customControlValidation4" name="radio-stacked" required />
                    <label className="custom-control-label" htmlFor="customControlValidation4">Error</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* end validation state */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* input groups */}
        {/* ============================================================== */}
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="section-block" id="inputgroup">
              <h3 className="section-title">Input Groups</h3>
              <p>Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.</p>
            </div>
            <div className="card">
              <h5 className="card-header">Input Groups</h5>
              <div className="card-body">
                <h4>Input Text</h4>
                <div className="form-group">
                  <div className="input-group mb-3"><span className="input-group-prepend"><span className="input-group-text">@</span></span>
                    <input type="text" placeholder="Username" className="form-control" />
                  </div>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" />
                    <div className="input-group-append"><span className="input-group-text">.00</span></div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend"><span className="input-group-text">$</span></div>
                    <input type="text" className="form-control" />
                    <div className="input-group-append"><span className="input-group-text">.00</span></div>
                  </div>
                </div>
              </div>
              <div className="card-body border-top">
                <h4>Input Sizes</h4>
                <div className="form-group">
                  <h5>Small </h5>
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend"><span className="input-group-text">@</span></div>
                    <input type="text" placeholder="Username" className="form-control" />
                  </div>
                  <h5>Default</h5>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend"><span className="input-group-text">@</span></div>
                    <input type="text" placeholder="Username" className="form-control" />
                  </div>
                  <h5>Large</h5>
                  <div className="input-group input-group-lg mb-3">
                    <div className="input-group-prepend"><span className="input-group-text">@</span></div>
                    <input type="text" placeholder="Username" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="card-body border-top">
                <h4>Checkboxes and radios</h4>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" /><span className="custom-control-label" />
                        </label>
                      </div>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <label className="custom-control custom-radio">
                          <input type="radio" className="custom-control-input" /><span className="custom-control-label" />
                        </label>
                      </div>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="card-body border-top">
                <div className="form-group">
                  <label className="col-form-label">Button Addons</label>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" />
                    <div className="input-group-append">
                      <button type="button" className="btn btn-primary">Go!</button>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" />
                    <div className="input-group-append be-addon">
                      <button type="button" data-toggle="dropdown" className="btn btn-secondary dropdown-toggle">Dropdown</button>
                      <div className="dropdown-menu"><a href="#" className="dropdown-item">Action</a><a href="#" className="dropdown-item">Another action</a><a href="#" className="dropdown-item">Something else here</a>
                        <div className="dropdown-divider" /><a href="#" className="dropdown-item">Separated link</a>
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend be-addon">
                      <button tabIndex={-1} type="button" className="btn btn-secondary">Dropdown</button>
                      <button tabIndex={-1} data-toggle="dropdown" type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split"><span className="sr-only">Toggle Dropdown</span></button>
                      <div className="dropdown-menu"><a href="#" className="dropdown-item">Action</a><a href="#" className="dropdown-item">Another action</a><a href="#" className="dropdown-item">Something else here</a>
                        <div className="dropdown-divider" /><a href="#" className="dropdown-item">Separated link</a>
                      </div>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* end input groups */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* inputmask */}
        {/* ============================================================== */}
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="section-block" id="inputmask">
              <h3 className="section-title">Input Mask</h3>
              <p>Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.</p>
            </div>
            <div className="card">
              <div className="card-body">
                <h4>Input Text</h4>
                <div className="form-group">
                  <label>Date Mask <small className="text-muted">dd/mm/yyyy</small></label>
                  <input type="text" className="form-control date-inputmask" id="date-mask" placeholder />
                </div>
              </div>
              <div className="card-body border-top">
                <div className="form-group">
                  <label>Phone <small className="text-muted">(999) 999-9999</small></label>
                  <input type="text" className="form-control phone-inputmask" id="phone-mask" placeholder />
                </div>
              </div>
              <div className="card-body border-top">
                <div className="form-group">
                  <label>International Number <small className="text-muted">+19 999 999 999</small></label>
                  <input type="text" className="form-control international-inputmask" id="international-mask" placeholder />
                </div>
              </div>
              <div className="card-body border-top">
                <div className="form-group">
                  <label>Phone / xEx <small className="text-muted">(999) 999-9999 / x999999</small></label>
                  <input type="text" className="form-control xphone-inputmask" id="xphone-mask" placeholder />
                </div>
              </div>
              <div className="card-body border-top">
                <div className="form-group">
                  <label>Purchase Order <small className="text-muted">aaaa 9999-****</small></label>
                  <input type="text" className="form-control purchase-inputmask" id="purchase-mask" placeholder />
                </div>
              </div>
              <div className="card-body border-top">
                <div className="form-group">
                  <label>Credit Card Number <small className="text-muted">9999 9999 9999 9999</small></label>
                  <input type="text" className="form-control cc-inputmask" id="cc-mask" placeholder />
                </div>
              </div>
              <div className="card-body border-top">
                <div className="form-group">
                  <label>SSN <small className="text-muted">999-99-9999</small></label>
                  <input type="text" className="form-control ssn-inputmask" id="ssn-mask" placeholder />
                </div>
              </div>
              <div className="card-body border-top">
                <div className="form-group">
                  <label>ISBN <small className="text-muted">999-99-999-9999-9</small></label>
                  <input type="text" className="form-control isbn-inputmask" id="isbn-mask" placeholder />
                </div>
              </div>
              <div className="card-body border-top">
                <div className="form-group">
                  <label>Percentage <small className="text-muted">99%</small></label>
                  <input type="text" className="form-control percentage-inputmask" id="percentage-mask" placeholder />
                </div>
              </div>
              <div className="card-body border-top">
                <div className="form-group">
                  <label>Currency<small className="text-muted">$9999</small>
                  </label>
                  <input type="text" className="form-control currency-inputmask" id="currency-mask" placeholder />
                </div>
              </div>
              <div className="card-body border-top">
                <div className="form-group">
                  <label>Decimal using RadixPoint<small className="text-muted">123.654658</small>
                  </label>
                  <input type="text" className="form-control decimal-inputmask" id="decimal-mask" placeholder style={{textAlign: 'right'}} />
                </div>
              </div>
              <div className="card-body border-top">
                <div className="form-group">
                  <label>Email<small className="text-muted">xxx@xxx.xxx</small>
                  </label>
                  <input type="text" className="form-control email-inputmask" id="email-mask" placeholder />
                </div>
              </div>
              <div className="card-body border-top">
                <div className="form-group">
                  <label>Optional masks<small className="text-muted">(99) 9999[9]-9999</small>
                  </label>
                  <input type="text" className="form-control optional-inputmask" id="optional-mask" placeholder />
                </div>
              </div>
              <div className="card-body border-top">
                <div className="form-group">
                  <label>RTL attribute<small className="text-muted">dd/mm/yyyy</small>
                  </label>
                  <input type="text" className="form-control date-inputmask" id="date-mask-rtl" placeholder="Enter Date" style={{textAlign: 'right'}} />
                </div>
              </div>
              <div className="card-body border-top">
                <h4>Checkboxes and radios</h4>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" /><span className="custom-control-label" />
                        </label>
                      </div>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <label className="custom-control custom-radio">
                          <input type="radio" className="custom-control-input" /><span className="custom-control-label" />
                        </label>
                      </div>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="card-body border-top">
                <div className="form-group">
                  <label className="col-form-label">Button Addons</label>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" />
                    <div className="input-group-append">
                      <button type="button" className="btn btn-primary">Go!</button>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" />
                    <div className="input-group-append be-addon">
                      <button type="button" data-toggle="dropdown" className="btn btn-secondary dropdown-toggle">Dropdown</button>
                      <div className="dropdown-menu"><a href="#" className="dropdown-item">Action</a><a href="#" className="dropdown-item">Another action</a><a href="#" className="dropdown-item">Something else here</a>
                        <div className="dropdown-divider" /><a href="#" className="dropdown-item">Separated link</a>
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend be-addon">
                      <button tabIndex={-1} type="button" className="btn btn-secondary">Dropdown</button>
                      <button tabIndex={-1} data-toggle="dropdown" type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split"><span className="sr-only">Toggle Dropdown</span></button>
                      <div className="dropdown-menu"><a href="#" className="dropdown-item">Action</a><a href="#" className="dropdown-item">Another action</a><a href="#" className="dropdown-item">Something else here</a>
                        <div className="dropdown-divider" /><a href="#" className="dropdown-item">Separated link</a>
                      </div>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* end  inputmask */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* switch component */}
        {/* ============================================================== */}
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="section-block">
              <h3 className="section-title">Switch Component</h3>
              <p>Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.</p>
            </div>
            <div className="card" id="switchcontent">
              <h5 className="card-header">Switch Component</h5>
              <div className="card-body">
                <form action="#" style={{borderRadius: '0px'}}>
                  <div className="form-group row">
                    <label className="col-12 col-sm-3 col-form-label text-sm-right">Sizes</label>
                    <div className="col-12 col-sm-8 col-lg-6 pt-1">
                      <div className="switch-button switch-button-xs">
                        <input type="checkbox" defaultChecked name="switch12" id="switch12" /><span>
                          <label htmlFor="switch12" /></span>
                      </div>
                      <div className="switch-button switch-button-sm">
                        <input type="checkbox" defaultChecked name="switch13" id="switch13" /><span>
                          <label htmlFor="switch13" /></span>
                      </div>
                      <div className="switch-button">
                        <input type="checkbox" defaultChecked name="switch14" id="switch14" /><span>
                          <label htmlFor="switch14" /></span>
                      </div>
                      <div className="switch-button switch-button-lg">
                        <input type="checkbox" defaultChecked name="switch15" id="switch15" /><span>
                          <label htmlFor="switch15" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-12 col-sm-3 col-form-label text-sm-right">Success</label>
                    <div className="col-12 col-sm-8 col-lg-6 pt-1">
                      <div className="switch-button switch-button-success">
                        <input type="checkbox" defaultChecked name="switch16" id="switch16" /><span>
                          <label htmlFor="switch16" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-12 col-sm-3 col-form-label text-sm-right">Warning</label>
                    <div className="col-12 col-sm-8 col-lg-6 pt-1">
                      <div className="switch-button switch-button-warning">
                        <input type="checkbox" defaultChecked name="switch17" id="switch17" /><span>
                          <label htmlFor="switch17" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-12 col-sm-3 col-form-label text-sm-right">Danger</label>
                    <div className="col-12 col-sm-8 col-lg-6 pt-1">
                      <div className="switch-button switch-button-danger">
                        <input type="checkbox" defaultChecked name="switch18" id="switch18" /><span>
                          <label htmlFor="switch18" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-12 col-sm-3 col-form-label text-sm-right">Yes/No Labels</label>
                    <div className="col-12 col-sm-8 col-lg-6 pt-1">
                      <div className="switch-button switch-button-yesno">
                        <input type="checkbox" defaultChecked name="switch19" id="switch19" /><span>
                          <label htmlFor="switch19" /></span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* end switch component */}
        {/* ============================================================== */}
      </div>
      {/* ============================================================== */}
      {/* sidenavbar */}
      {/* ============================================================== */}
      <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
        <div className="sidebar-nav-fixed">
          <ul className="list-unstyled">
            <li><a href="#overview" className="active">Overview</a></li>
            <li><a href="#basicform">Basic Form</a></li>
            <li><a href="#select">Select</a></li>
            <li><a href="#checkboxradio">Checkbox &amp; Radio</a></li>
            <li><a href="#validation">Validation state</a></li>
            <li><a href="#inputgroup">Input Groups</a></li>
            <li><a href="#inputmask">Inputmask</a></li>
            <li><a href="#switchcontent">Switch Content</a></li>
            <li><a href="#top">Back to Top</a></li>
          </ul>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end sidenavbar */}
      {/* ============================================================== */}
    </div>
  </div>
  {/* ============================================================== */}
  {/* footer */}
  {/* ============================================================== */}
        < Footer />
  {/* ============================================================== */}
  {/* end footer */}
  {/* ============================================================== */}
</div>


    );
}

export default FormElements;