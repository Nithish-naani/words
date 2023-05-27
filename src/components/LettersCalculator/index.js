// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChang = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="second-container">
          <h1 className="heading">
            Calculate the <br />
            letters you <br />
            enter
          </h1>
          <label htmlFor="input" className="label">
            Enter the phrase
          </label>
          <input
            type="text"
            className="input-el"
            id="input"
            placeholder="Enter the phrase"
            onChange={this.onChang}
          />
          <div className="count-container">
            <p className="text">No.of letters: {count.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
