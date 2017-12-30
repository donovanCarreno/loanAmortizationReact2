// React/Redux
import React from 'react'
import { connect } from 'react-redux'

// Components
import TableRow from './TableRow'

// Functions
import { calcPaid, commaSeparatedString } from '../helpers/helpers'

const Table = ({ amortizationSchedule, totalPaid, totalInterestPaid }) => {
  if (amortizationSchedule.length > 0) {
    return (
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Payment</th>
              <th>Amount</th>
              <th>Interest</th>
              <th>Principal</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {
              amortizationSchedule.map(details => (
                <TableRow key={details.paymentNumber} details={details} />
              ))
            }
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>{ commaSeparatedString(totalPaid.toString()) }</td>
              <td>{ commaSeparatedString(totalInterestPaid.toString()) }</td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }

  return null
}

const mapStateToProps = ({ amortizationSchedule }) => ({
  amortizationSchedule,
  totalPaid: calcPaid(amortizationSchedule, 'monthlyPayment'),
  totalInterestPaid: calcPaid(amortizationSchedule, 'interest')
})

export default connect(mapStateToProps)(Table)
