import React, { Component } from 'react';
import './assets/stylesheets/screen.css';
import logo from './assets/images/logo.svg';
import mountain from './assets/images/mountain.svg';
import boy from './assets/images/boy.svg';
import mouse from './assets/images/mouse.svg';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { height: props.height, width: props.width };
  }

  handleResize = () =>
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth - 15,
    });

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { height, width } = this.state;
    const { children } = this.props;

    return (
      <div
        style={{
          width: width,
          height: height,
          position: 'relative',
          // overflow: 'hidden',
        }}
      >
        <div style={{ position: 'fixed', top: 0, right: 0 }}>
          H: {height} | W: {width}
        </div>
        {children}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="branding" alt="Zealousies" />
              <a className="btn btn-primary">Get Access</a>
            </header>
            <div className="home-content">
              <h1>
                Even Harry Potter <br />
                needs a Dumbledore to <br />
                mentor him to find himself.
              </h1>
              <p className="greyText">
                We are building a universe of Alfreds, <br />
                Dumbledores, Dronacharyas who can <br />
                help you become a superhero!
              </p>

              <div className="heroImage">
                <img src={mountain} alt="mountain" className="mountain" />
                <img src={boy} alt="boy" className="boy" />
              </div>

              <div className="scroll-info greyText">
                Scroll to
                <img src={mouse} alt="mouse" />
                know more
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default App;
