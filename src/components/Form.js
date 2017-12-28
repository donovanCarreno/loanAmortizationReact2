// React/Redux
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import * as actions from '../actions/amortize'

class Form extends Component {
  state = {
    loanAmountError: '',
    interestRateError: '',
    loanLengthError: ''
  }

  onSubmit = (e) => {
    e.preventDefault()

    const loanAmount = Number(this.props.loanAmount)
    const loanLength = Number(this.props.loanLength)
    const interestRate = Number(this.props.interestRate)
    let valid = true

    if (isNaN(loanAmount) || loanAmount <= 0) {
      this.setState(() => ({
        loanAmountError: 'must be a number greater than 0'
      }))
      valid = false
    }

    if (isNaN(interestRate) || interestRate < 1 || interestRate > 100) {
      this.setState(() => ({
        interestRateError: 'must be a number between 1 and 100'
      }))
      valid = false
    }

    if (isNaN(loanLength) || loanLength <= 0) {
      this.setState(() => ({
        loanLengthError: 'must be a number greater than 0'
      }))
      valid = false
    }

    if (valid) {
      this.setState(() => ({
        loanAmountError: '',
        interestRateError: '',
        loanLengthError: ''
      }))
      console.log('submit values!')
    }
  }

  render() {
    const { loanAmount, interestRate, loanLength, inputChange } = this.props

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="loanAmount"
            placeholder="amount (e.g. 20000)"
            value={loanAmount}
            onChange={inputChange}
          />
          {this.state.loanAmountError && <p>{this.state.loanAmountError}</p>}
          <input
            type="text"
            name="interestRate"
            placeholder="interest rate (e.g. 7.5)"
            value={interestRate}
            onChange={inputChange}
          />
          {this.state.interestRateError && <p>{this.state.interestRateError}</p>}
          <input
            type="number"
            name="loanLength"
            placeholder="length (e.g. 60)"
            value={loanLength}
            onChange={inputChange}
          />
          {this.state.loanLengthError && <p>{this.state.loanLengthError}</p>}
          <input
            id='months'
            type='radio'
            name='term'
            value='months'
            onClick={inputChange}
            defaultChecked
          />
          <label htmlFor='months'>Months</label>
          <input
            id='years'
            type='radio'
            name='term'
            value='years'
            onClick={inputChange}
          />
          <label htmlFor='years'>Years</label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ loanAmount, loanLength, interestRate, term }) => ({
  loanAmount,
  loanLength,
  interestRate
})

export default connect(mapStateToProps, actions)(Form)
