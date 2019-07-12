import React from 'react';
import WaterBoil from './WaterBoil'

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
      scale: '',
    };
  }


  handleCelsiusChange = (temperature) => {
    console.log("handleCelsiusChange", temperature);
    this.setState({ scale: 'c', temperature });
    console.log(this.state);
  }

  handleFahrenheitChange = (temperature) => {
    console.log("handleFahrenheitChange", temperature);
    this.setState({ scale: 'f', temperature });
    console.log(this.state);
  }


  toCelsius = (fahrenheit) => {
    console.log("toCelsius", fahrenheit);
    return (((fahrenheit - 32) * 5 / 9) | 0);
  }

  toFahrenheit = (celsius) => {
    console.log("toFahrenheit", celsius);
    return (((celsius * 9 / 5) + 32) | 0);
  }

  render() {
    const { temperature, scale } = this.state;
    const celsius = scale === 'f' ? this.toCelsius(temperature) : temperature;
    const fahrenheit = scale === 'c' ? this.toFahrenheit(temperature) : temperature;

    return (
      <div>
        <WaterBoil scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <br />
        <WaterBoil scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
      </div>
    );
  }
}

export default Calculator;