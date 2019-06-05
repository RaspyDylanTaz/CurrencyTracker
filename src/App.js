import React, { Component} from 'react';
import './App.css';
import axios from "axios";


var NumberFormat = require('react-number-format');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cryptos: []
    }
  }

  componentDidMount() {
    this.loadMyAxios();
  }
  componentDidUpdate() {
    console.log("hi mum")
    setTimeout(
      function () {
        this.loadMyAxios();
      }
        .bind(this),
      3000
    );

  }
  loadMyAxios = () => {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BCH,XRP,EOS,LTC,BCH,ETC,ZEC,BSV,TRX&tsyms=NZD')
      .then(res => {
        const cryptos = res.data
        console.log(cryptos);
        this.setState({ cryptos: cryptos })
      })
  }

  render() {
    return (
        <div className="App">
          <div className = "Header">
            <h1 className = "HeaderTitle">Currency Tracker</h1>
          </div>
          {Object.keys(this.state.cryptos).map((key) => (
            <div id='crypto-container'>
              <span className="left">{key}</span>
              <span className="right">NZD <NumberFormat value={this.state.cryptos[key].NZD} displayType="text" decimlePrecision={2} thousandSeparator={true} prefix={"$"}></NumberFormat></span>
            </div>
          ))}
        </div>


    );
  }
}








