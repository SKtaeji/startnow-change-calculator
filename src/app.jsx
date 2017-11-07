import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      due: 0,
      received: 0,
      result: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      dollars: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
    this.handleAppChange = this.handleAppChange.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
  }

  handleAppChange (event) {
    this.setState({[event.target.name]: event.target.value})

  }

  calculateChange() {
  
    var change = this.state.received - this.state.due;

    
    var x = change * 100;
  
    const twenties = Math.floor(x / 2000);

      x = x % 2000;
  
    const tens = Math.floor(x / 1000);

      x = x % 1000;
  
    const fives = Math.floor(x / 500);

      x = x % 500;
    
    const dollars = Math.floor(x / 100);

      x = x % 100;
    
    const quarters = Math.floor(x / 25);

      x = x % 25;
    
    const dimes = Math.floor(x / 10);

      x = x % 10;
  
    const nickels = Math.floor(x / 5);

      x = x % 5;
      x = x + .01;
      
    const pennies = Math.floor(x / 1);

      x = x % 1;
  
    this.setState({
      result: change,
      twenties,
      tens,
      fives,
      dollars,
      quarters,
      dimes,
      nickels,
      pennies
    })   
     return ;
  
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
              <input 
                onChange={this.handleAppChange}
                value={this.state.due} 
                id="amount-due" 
                name='due'
                type="text" 
                className="form-control" 
                placeholder="Enter amount due" />
              <div className="clearfix" />
              <strong id="amount-received-input">How much was received?</strong>
              <div className="clearfix" />
              <input
                onChange={this.handleAppChange} 
                value={this.state.received} 
                id="amount-received" 
                name='received'
                type="text" 
                className="form-control" 
                placeholder="Enter amount paid" />
            </div>  
            <div className="panel-footer bg-grey">
              <button 
                id="calculate-change" 
                className="btn btn-primary btn-block"
                onClick={this.calculateChange}>Calculate</button>
            </div>
          </div>
        </div>
        <div id="output-display" className="container col-md-8">
          <div className="panel panel-default">
            <div className="panel-body">
              <div id="calSuccess" className="alert alert-success alert-dismissible collapse" role="alert">
                <button type="button" className="close btn-block" data-dismiss="alert" aria-label="close">
                  <strong className="small">The total amount due is: </strong>
                </button></div>
              <div id="calDanger" className="alert alert-danger alert-dismissible collapse">
                <button type="button" className="close btn-block" data-dismiss="alert" aria-label="close">
                  <strong className="small">You still require: </strong>
                </button></div>
              <div id="change-output">
                <div className="row">
                  <div className="col-sm-3 change-box">
                    <p>Twenties</p>
                    <p id="twenty-output">{this.state.twenties}</p>
                  </div>
                  <div className="col-sm-3 change-box">
                    <p>Tens</p>
                    <p id="ten-output">{this.state.tens}</p>
                  </div>
                  <div className="col-sm-3 change-box">
                    <p>Fives</p>
                    <p id="five-output">{this.state.fives}</p>
                  </div>
                  <div className="col-sm-3 change-box">
                    <p>Ones</p>
                    <p id="dollars-output">{this.state.dollars}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3 change-box">
                    <p>Quarters</p>        
                    <p id="quarters-output">{this.state.quarters}</p>
                  </div>
                  <div className="col-sm-3 change-box">
                    <p>Dimes</p>  
                    <p id="dimes-output">{this.state.dimes}</p>
                  </div>
                  <div className="col-sm-3 change-box">
                    <p>Nickels</p>  
                    <p id="nickels-output">{this.state.nickels}</p>
                  </div>
                  <div className="col-sm-3 change-box">
                    <p>Pennies</p>  
                    <p id="pennies-output">{this.state.pennies}</p>
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
