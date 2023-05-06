import React, { useEffect } from 'react';
import Axios from 'axios'
function Mymoves() {
  let [value,setValue]=React.useState([])
  
  let getUserHandler=()=>{
    Axios.get('http://test.api.boxigo.in/sample-data/')
    .then((response)=>{
        console.log(response)
        setValue(response.data.Customer_Estimate_Flow)
    })
    .catch(()=>{})

  }
  useEffect(()=>{
    getUserHandler()
  },[])
  var options = { year: 'numeric', month: 'short', day: 'numeric' };
  return (
    <div>
      <h4><b>My Moves</b></h4>
      
      {/* <pre>{JSON.stringify(value)}</pre> */}
              {
                  value.map((d,dindex)=>{
                      return <>
                          <div className='row'>
                            <div className='col-5'>
                                <h6><b>From</b></h6>
                                <div className='row'>
                                  <div className='col-9'>
                                    <p>{d.moving_from}</p>
                                  </div>
                                  <div className='col-2'>
                                    <p ><i className='fa fa-arrow-circle-right' style={{color:"#d94717",fontSize:"24px"}}></i></p>
                                  </div>
                                </div>
                            </div>
                            <div className='col-5'>
                                <h6><b>To</b></h6>
                                <div className='row'>
                                  <div className='col-9'>
                                      <p>{d.moving_to}</p>
                                  </div>
                                </div>
                              </div>
                              <div className='col'>
                              <h6><b>Request#</b></h6>
                                    <h6 style={{color:"#d94717" }}><b>{d.estimate_id}</b></h6>
                              </div>
                          </div>
                          <div className='items'>
                            <p><i className='fa fa-house' style={{color:"#d94717",fontSize:"24px"}}></i>{d.property_size}</p>
                            <p><i className='fas fa-boxes' style={{color:"#d94717",fontSize:"24px"}}></i>{d.total_items}</p>
                            <p><i className='fa fa-route' style={{color:"#d94717",fontSize:"24px"}}></i>{d.distance}</p>
                            <p><i className='fa fa-calendar' style={{color:"#d94717",fontSize:"20px"}}></i>{
                                new Date(d.moving_on).toLocaleDateString([],options)
                                } at {
                                  new Date(d.moving_on).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                                } <i className='fas fa-pencil-alt' style={{fontSize:"13px"}}></i></p>
                            <div className='isflex'>
                            <input type="checkbox" checked={d.move_date_flexible ===1? "checked":"" } ></input>
                            <p>is fexiable</p>
                            </div>
                            <button className="btn btn-outline-danger " type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOne"+dindex} aria-expanded="false" aria-controls="collapseExample">
                            View more details
                            </button>
                            <button type="button" className="btn btn-danger">Quoutes Awaiting</button><br/>
                          </div><hr/>
                            <div className="collapse" id={"collapseOne"+dindex}>
                                    <div className="card card-body">
                                    <div className='row'>
                              <div className='col-6'>
                                <h7><b>Additional Information</b></h7><br/><br/>
                                <h7>Test Data</h7><br/><br/>
                                <h5>House Details</h5><br/>
                              </div>
                              <div className='col-6'>
                                <div className='vis'>
                                    <div>
                                        <button type="button" className='btn btn-dark'>Edit Additional Info</button><br/><br/>
                                        <button type="button" className='btn btn-dark'>Edit House Details</button>
                                    </div>
                                </div>
                              </div>
                            </div>
                                <h7 style={{color:"#d94717"}}><b>Existing House Details</b></h7><br/>
                                <div className="row">
                                      <div className="col-4">
                                            <h7><b>Floor No.</b></h7><br/>
                                            <label>{d.old_floor_no}</label>
                                      </div>
                                      <div className="col-4">
                                            <h7><b>Elevator Available</b></h7><br/>
                                            <label>{d.old_elevator_availability}</label>
                                      </div>
                                      <div className="col-4">
                                            <h7><b>Distance from Elevator / Staircase to truck</b></h7><br/>
                                            <label>{d.old_parking_distance}</label>
                                      </div>
                                </div><br/>
                                <h7 style={{color:"#d94717"}}><b>New House Details</b></h7><br/>
                                <div className="row">
                                      <div className="col-4">
                                            <h7><b>Floor No.</b></h7><br/>
                                            <label>{d.new_floor_no}</label>
                                      </div>
                                      <div className="col-4">
                                            <h7><b>Elevator Available</b></h7><br/>
                                            <label>{d.new_elevator_availability}</label>
                                      </div>
                                      <div className="col-4">
                                            <h7><b>Distance from Elevator / Staircase to truck</b></h7><br/>
                                            <label>{d.new_parking_distance}</label>
                                      </div>
                                </div>
                                    </div>
                                    <h4><b>Inventory Details</b></h4>
                                {
                                  d.items.inventory.map((a,aindex)=>{
                                          return <React.Fragment>
                                              <div className="accordion" id="accordionExample ">
                                                <div className="accordion-item">
                                                  <h2 className="accordion-header">
                                                    <button className="accordion-button text-danger" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOne"+dindex+""+aindex} aria-expanded="true" aria-controls="collapseOne">
                                                        {a.displayName}
                                                        <span className="badge bg-danger rounded-pill">{a.order}</span>
                                                    </button>
                                        
                                                  </h2>
                                                      <div id={"collapseOne"+dindex+""+aindex}  class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                          <div className="accordion-body">
                                                              <div className='row'>
                                                                {
                                                                  a.category.map((cat)=>{
                                                                        return <div className='col-3'>
                                                                                <h7><b>{cat.displayName}</b></h7>
                                                                                {
                                                                                  cat.items.map((i)=>{
                                                                                      return <React.Fragment>
                                                                                        <div className='header'>
                                                                                          <h7>{i.displayName}</h7>
                                                                                          <h7><b>{i.order}</b></h7>
                                                                                        </div>
                                                                                        {
                                                                                          i.type.map((t)=>{
                                                                                              return <div>
                                                                                                    <p><b>{t.option}</b></p>
                                                                                                </div>
                                                                                          })
                                                                                        }
                                                                                      </React.Fragment>
                                                                                  })
                                                                                }
                                                                          </div>    
                                                                  })
                                                                }
                                                              </div>
                                                        </div>
                                                      </div>
                                                </div>
                                              </div>
                                          </React.Fragment>
                                  })
                                }
                                <hr/>
                            </div>    
                        </>
                      })  
                } 
    </div>
  )
}

export default Mymoves;
