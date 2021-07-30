function Checkboxes() {
    return (

        <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" id="checkboxradio">
          <div className="section-block">
            <h3 className="section-title">Checkboxes and Radios</h3>
            <p>Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
          </div>
          <div className="card">
            <h5 className="card-header">Checkboxes and Radios</h5>
            <div className="card-body">
              <h4>Default (stacked)</h4>
              <form>
                <label className="custom-control custom-checkbox">
                  <input type="checkbox" defaultChecked className="custom-control-input" /><span className="custom-control-label">Default Checkbox</span>
                </label>
                <label className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" disabled /><span className="custom-control-label">Default Checkbox </span>
                </label>
                <h4>Inline Checkbox</h4>
                <label className="custom-control custom-checkbox custom-control-inline">
                  <input type="checkbox" defaultChecked className="custom-control-input" /><span className="custom-control-label">Option 1</span>
                </label>
                <label className="custom-control custom-checkbox custom-control-inline">
                  <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Option 2</span>
                </label>
                <label className="custom-control custom-checkbox custom-control-inline">
                  <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Option 3</span>
                </label>
              </form>
            </div>
            <div className="card-body border-top">
              <h4>Radio (Stacked)</h4>
              <form>
                <label className="custom-control custom-radio">
                  <input type="radio" name="radio-stacked" defaultChecked className="custom-control-input" /><span className="custom-control-label">Default Radio</span>
                </label>
                <label className="custom-control custom-radio custom-control-inline">
                  <input type="radio" name="radio-inline" className="custom-control-input" disabled /><span className="custom-control-label">Default Radio</span>
                </label>
                <h5>Inline Radio</h5>
                <label className="custom-control custom-radio custom-control-inline">
                  <input type="radio" name="radio-inline" defaultChecked className="custom-control-input" /><span className="custom-control-label">Option 1</span>
                </label>
                <label className="custom-control custom-radio custom-control-inline">
                  <input type="radio" name="radio-inline" className="custom-control-input" /><span className="custom-control-label">Option 2</span>
                </label>
                <label className="custom-control custom-radio custom-control-inline">
                  <input type="radio" name="radio-inline" className="custom-control-input" /><span className="custom-control-label">Option 3</span>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
);
}

export default Checkboxes;