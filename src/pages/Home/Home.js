import React, { Component } from 'react';

import getBitcoinRate from '../../services/BitcoinService.js'

class Home extends Component {
    constructor(){
      super();
      this.state = {
        bitCoinRate: 0,
      }
    }

    componentDidMount() {
      getBitcoinRate().then(json => {
        this.setState({bitCoinRate: json.bpi.USD.rate});
      })
    }

    render() {
        return (
          <div className="Home">
            Bit coin rate {this.state.bitCoinRate}
          </div>
        );
      }
    
    }

  export default Home;