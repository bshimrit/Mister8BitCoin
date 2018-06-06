import React, { Component } from 'react';

import './home.css';

import getBitcoinRate from '../../services/BitcoinService.js'

class Home extends Component {
    constructor(){
      super();
      this.state = {
        bitCoinRate: {USD: 0, EUR: 0, CNY: 0}
      }
    }

    componentDidMount() {
      getBitcoinRate().then(json => {
        this.setState({bitCoinRate: {USD: json.USD.last.toFixed(2), EUR: json.EUR.last.toFixed(2), CNY: json.CNY.last.toFixed(2)}});
      })
    }

    render() {
        var loggedInUser = this.props.loggedInUser;
        return (
          <div className="container home">
            <div className="user-info">
              <img src="img/icons/box.jpg" />
              <div>
                <h1>Hello {loggedInUser.userName}</h1>
                <div className="balance flex align-center coin">
                  Your Balance: 
                  <div className="flex align-center">
                    {loggedInUser.bitCoins} <img src="img/icons/bitcoin.png"/></div>
                  </div>
              </div>
            </div>
            <section>
              <div className="flex flex-column align-start">
                <h1>Current Rates</h1>
                <div className="coin"> <img src="img/icons/dollar.png"/> USD: {this.state.bitCoinRate.USD} </div>
                <div className="coin"> <img src="img/icons/euro.png"/> EUR: {this.state.bitCoinRate.EUR} </div>
                <div className="coin"> <img src="img/icons/yen.png"/> CNY: {this.state.bitCoinRate.CNY} </div>
              </div>
            </section>
          </div>
        );
      }
    
    }

  export default Home;