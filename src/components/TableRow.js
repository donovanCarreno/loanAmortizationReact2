import React from 'react'
import { commaSeparatedString } from '../helpers/helpers'

const TableRow = ({ details }) => (
  <tr>
    <td>{ commaSeparatedString(details.paymentNumber) }</td>
    <td>{ commaSeparatedString(details.monthlyPayment) }</td>
    <td>{ commaSeparatedString(details.interest) }</td>
    <td>{ commaSeparatedString(details.principal) }</td>
    <td>{ commaSeparatedString(details.balance) }</td>
  </tr>
)

export default TableRow
