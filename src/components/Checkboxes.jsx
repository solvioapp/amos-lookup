import React from 'react'
import Flex from 'styled-flex-component'
import Checkbox from '@material-ui/core/Checkbox';

import { searchEngines } from '../constants/searchEngines'

const Checkboxes = props => {
  const { checked, handleCheckboxChange } = props

  return (
    <Flex center>
      <table>
        { searchEngines.map(s => (
          <tr>
              <td>{s.displayName}</td>
              <td>
              <Checkbox
                checked={checked[s.id]}
                onChange={handleCheckboxChange(s.id)}
                value={s.id}
              />
            </td>
          </tr>
          ))}
      </table>
    </Flex>
  )
}

export default Checkboxes

  // < Flex center column style = {{ width: '350px' }}>
  //   {
  //     searchEngines.map(s => (
  //       <Flex center>
  //         <p>{s.displayName}</p>
  //         <Checkbox
  //           checked={checked[s.id]}
  //           onChange={e => this.handleCheckboxChange(e)}
  //           value={s.id}
  //         />
  //       </Flex>
  //     ))
  //   }
  // </Flex >