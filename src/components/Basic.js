function Basic() {
    return (

        <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="section-block" id="basicform">
            <h3 className="section-title">Basic Form Elements</h3>
            <p>Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
          </div>
          <div className="card">
            <h5 className="card-header">Basic Form</h5>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="inputText3" className="col-form-label">Input Text</label>
                  <input id="inputText3" type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEmail">Email address</label>
                  <input id="inputEmail" type="email" placeholder="name@example.com" className="form-control" />
                  <p>We'll never share your email with anyone else.</p>
                </div>
                <div className="form-group">
                  <label htmlFor="inputText4" className="col-form-label">Number Input</label>
                  <input id="inputText4" type="number" className="form-control" placeholder="Numbers" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputPassword">Password</label>
                  <input id="inputPassword" type="password" placeholder="Password" className="form-control" />
                </div>
                <div className="custom-file mb-3">
                  <input type="file" className="custom-file-input" id="customFile" />
                  <label className="custom-file-label" htmlFor="customFile">File Input</label>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                </div>
              </form>
            </div>
            <div className="card-body border-top">
              <h3>Sizing</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="inputSmall" className="col-form-label">Small</label>
                  <input id="inputSmall" type="text" defaultValue=".form-control-sm" className="form-control form-control-sm" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputDefault" className="col-form-label">Default</label>
                  <input id="inputDefault" type="text" defaultValue="Default input" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputLarge" className="col-form-label">Large</label>
                  <input id="inputLarge" type="text" defaultValue=".form-control-lg" className="form-control form-control-lg" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        );
    }
    
    export default Basic;