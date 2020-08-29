
import React from 'react'
import { Logs } from '../../systemdata/Logs'
import { RefactorDate } from '../../utilities/data/refactorDate'
import Chip from '@material-ui/core/Chip';
import { color } from '../data/color'
import styled from 'styled-components'

const StyleChip = styled(Chip)`
  background-color : ${props => props.color};
  color : white;
`
export const OptionLogsTable = {
  selectableRows: false,
  filterType: "textField",
  selectableRowsOnClick: true,
};

export const LogsColumn = (redirectToDetail) => [
  {
    name: Logs.logId.name,
    label: Logs.logId.label
  },
  {
    name: Logs.userId.name,
    label: Logs.userId.label
  },
  {
    name: Logs.userAction.name,
    label: Logs.userAction.label,
    options: {
      filterType: 'dropdowm'
    }
  },
  {
    name: Logs.transactionDate.name,
    label: Logs.transactionDate.label,
    options: {
      sort: true,
      sortDirection: 'asc',
      customBodyRender: (value, tableMeta) => (RefactorDate(value))
    }

  },
  {
    name: Logs.toComplete.name,
    label: Logs.toComplete.label,
    options: {
      customBodyRender: (value, tableMeta) => {
        return <StyleChip label={value === 0 ? "Error" : "Success"} size="small" color={value === 0 ? color.red : color.green} />
      }
    }
  },
  {
    name: Logs.description.name,
    label: Logs.description.label,
    options: {
      customBodyRender: (value, tableMeta) => value ? value === "Success" ? "-" : value : "-"
    }
  },

]
