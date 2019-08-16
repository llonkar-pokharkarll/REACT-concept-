import React, { Component } from 'react'

class HocExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: false,
    }
  }

  toggleAuth = () => {
    this.setState((prevState, props) => ({
      login: !prevState.login,
    }))
  }

  render() {

    const { login } = this.state;
    return (
      <>
        <button onClick={this.toggleAuth}>{login ? 'logout' : 'login'}</button>
        <WrappedOne login={login} msg='welcome to our page' />
        <WrappedTwo login={login} />
      </>
    )
  }
}

class regComponent extends Component {
  render() {
    console.log('in regComp', this.props)
    return (<div> welcome to our page</div>)
  }
}

const AnotherComponent = () => (
  <h1>hello</h1>
)

function AuthWrapper(LogComp) {
  return class Wrapper extends Component {
    render() {
      console.log("hoc", this.props);
      if (this.props.login)
        return (<LogComp {...this.props} />)
      return <div>You are Not login</div>
    }
  }
}

const WrappedOne = AuthWrapper(regComponent);
const WrappedTwo = AuthWrapper(AnotherComponent);

export default HocExample;