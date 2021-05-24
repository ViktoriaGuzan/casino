import React from 'react';
import { temp1, temp2, temp3 } from './temp';


export default class Dice extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: undefined, input: '' };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      name: this.state.input
    }));
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  formatName() {
    if (!this.state.name) {
      return undefined;
    }
    return {
      __html: `${temp3}<marquee>Welcome <b>${this.state.name === temp1 ? temp2 : this.state.name}</b></marquee>`
    };
  }

  render() {
    return (
        <div dangerouslySetInnerHTML={this.formatName()}>
          { !this.state.name
            ? (<>
                <p>
                  Introduce yourself!
                </p>
                <input type="text" onChange={ this.handleChange } />
                <br />
                <button onClick={this.handleClick}>
                  Save name
                </button>
              </>)
            : undefined
          }
        </div>
    );
  }
}
