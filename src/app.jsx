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
      pennies: 0,
      status: 'info',
      statD: '',
      alertStat: '',
      collapse: 'collapse'
    };
    this.handleAppChange = this.handleAppChange.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
    this.statusCall = this.statusCall.bind(this);
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

    this.statusCall();
  
  }

  statusCall(){

    var change = this.state.received - this.state.due;
    console.log('Hello guys');
    
    if(change > 0) {
      this.setState({
      status: "success",
      statD: "The total change due is ",
      collapse: '',
      alertStat: '#calSuccess'
      })}

      else if (change < 0) {
        this.setState({
        status: "danger",
        statD: "Hold up! You still need ",
        collapse: '',
        alertStat: '#calDanger'
      })}

      else if (change === 0) {
        this.setState({
        status: "info",
        statD: "You get nothing! Good day sir!",
        collapse: '',
        alertStat: '#calInfo'
      })}

    }
  
  
  
  render() {
    return (
      <div>
      <title>Change Calculator</title>

      <div className="container">
        <h1>Change Calculator</h1>
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
                name='amountDue'
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
                name='amountReceived'
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
        <div id="output-display" className="container col-md-8 cf">
          <div className="panel panel-default">
            <div className="panel-body">
              <div id={this.state.alertStat} className={`alert alert-${this.state.status} alert-dismissible ${this.state.collapse}`} role="alert">
                <strong className="small">{this.state.statD} ${this.state.result}</strong>
              </div>
              
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
