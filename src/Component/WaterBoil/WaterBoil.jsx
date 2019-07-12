import React from 'react';
import BoilerVerdict from './BoilerVerdict';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class WaterBoil extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     temperature: 0
  //   };
  // }

  handleTemp = (evt) => {
    // this.setState({
    //   temperature: evt.target.value,
    // })
    this.props.onTemperatureChange(evt.target.value);
  }

  render() {
    // const { temperature } = this.state;
    const { scale, temperature } = this.props;
    // const celsius = scale === 'f' ? this.toFahrenheit(temperature) : temperature;
    // const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature;
    return (
      <fieldset>
        <legend>Enter Temperature : {scaleNames[scale]} </legend>
        <input value={temperature} onClick={this.handleTemp} onChange={this.handleTemp} />
        <BoilerVerdict value={(temperature)} />
      </fieldset>
    );
  }
}

export default WaterBoil;