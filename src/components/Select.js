function Select() {
    return (

 <div className="row">
 <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
   <div className="section-block" id="select">
     <h3 className="section-title">Select</h3>
     <p>Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
   </div>
   <div className="card">
     <h5 className="card-header">Select Example</h5>
     <div className="card-body">
       <form>
         <div className="form-group">
           <label htmlFor="input-select">Example Select</label>
           <select className="form-control" id="input-select">
             <option>Choose Example</option>
           </select>
         </div>
       </form>
     </div>
     <div className="card-body border-top">
       <h3>Sizing</h3>
       <form>
         <div className="form-group">
           <select className="form-control form-control-sm">
             <option>Large select</option>
           </select>
         </div>
         <div className="form-group">
           <select className="form-control">
             <option>Default select</option>
           </select>
         </div>
         <div className="form-group">
           <select className="form-control form-control-lg">
             <option>Large select</option>
           </select>
         </div>
       </form>
     </div>
   </div>
 </div>
</div>
);
}

export default Select;