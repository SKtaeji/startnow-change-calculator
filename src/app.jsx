import React, { Component } from 'react';

class App extends changeCal {
  constructor(props) {
    super(props)
    
    this.state = {
      due: "amount-due",
      received: "amount-received"
    }
  }
  
  render() {
    return (
      <div>
      <title>Change Calculator</title>

      <div className="container">
        <h2>Change Calculator</h2>
        <hr />
      </div>
      <div className="row container">
        <div id="input-display" className="container col-md-4">
          <div className="panel panel-default">
            <div className="panel-heading bg-grey">Enter Information</div>
            <div className="panel-body">
              <strong id="amount-due-input">How much is due?</strong>
              <div className="clearfix" />
              <input value={this.state.due} type="text" className="form-control" placeholder="Enter amount due" />
              <div className="clearfix" />
              <strong id="amount-received-input">How much was received?</strong>
              <div className="clearfix" />
              <input id="amount-received" type="text" className="form-control" placeholder="Enter amount given" />
            </div>  
            <div className="panel-footer bg-grey">
              <button id="calculate-change" className="btn btn-primary btn-block">Calculate</button>
            </div>
          </div>
        </div>
        <div id="output-display" className="container col-md-8">
          <div className="panel panel-default">
            <div className="panel-body">
              <div id="calSuccess" className="alert alert-success alert-dismissible collapse" role="alert">
                <button type="button" className="close btn-block" data-dismiss="alert" aria-label="close">×
                  <strong className="small">Success: Total change due.</strong>
                </button></div>
              <div id="calDanger" className="alert alert-danger alert-dismissible collapse">
                <button type="button" className="close btn-block" data-dismiss="alert" aria-label="close">×
                  <strong className="small">Danger: Additional money owed.</strong>
                </button></div>
              <div id="change-output">
                <div className="row">
                  <div className="col-sm-3 change-box">
                    <p>Twenties</p>
                    <p id="twenty-output">0</p>
                  </div>
                  <div className="col-sm-3 change-box">
                    <p>Tens</p>
                    <p id="ten-output">0</p>
                  </div>
                  <div className="col-sm-3 change-box">
                    <p>Fives</p>
                    <p id="five-output">0</p>
                  </div>
                  <div className="col-sm-3 change-box">
                    <p>Ones</p>
                    <p id="dollars-output">0</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3 change-box">
                    <p>Quarters</p>        
                    <p id="quarters-output">0</p>
                  </div>
                  <div className="col-sm-3 change-box">
                    <p>Dimes</p>  
                    <p id="dimes-output">0</p>
                  </div>
                  <div className="col-sm-3 change-box">
                    <p>Nickels</p>  
                    <p id="nickels-output">0</p>
                  </div>
                  <div className="col-sm-3 change-box">
                    <p>Pennies</p>  
                    <p id="pennies-output">0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>      
        </div>
      </div>
    </div>
    )
  }
}

export default App;
