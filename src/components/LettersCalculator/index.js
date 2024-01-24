// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1>Calculate the Letters you enter</h1>
          <div>
            <label htmlFor="input">Enter the phrase</label>
            <input
              id="input"
              onChange={this.onChangeSearchInput}
              placeholder="Enter the Phrase"
            />
          </div>
          <p className="totalCount">
            No.of letters: {searchInput.split(/\S/g).length - 1}
          </p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
