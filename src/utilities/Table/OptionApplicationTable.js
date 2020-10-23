import React from 'react'
import { renderApproveStatus } from './renderItemTable'
import Button from "@material-ui/core/Button";
import { color } from "../data/color";
import { ApplicationTable } from '../../systemdata/Application'
import { RefactorDate } from '../../utilities/data/refactorDate'

export const OptionApplicationTable = {
  selectableRows: false,
  filterType: "textField",
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  download: false,
  print: false,
};

export const ApplicationColumn = (redirectToDetail) => [
  {
    name: ApplicationTable.requestId.name,
    label: ApplicationTable.requestId.label,
    options: {
      filter: true,
      sort: true,
      sortDirection: 'asc',
    },

  },
  {
    name: ApplicationTable.transactionDate.name,
    label: ApplicationTable.transactionDate.label,
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value, tableMeta, updateValue) =>
        RefactorDate(value),
    },
  },
  {
    name: ApplicationTable.requestApprove.name,
    label: ApplicationTable.requestApprove.label,
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value, tableMeta, updateValue) =>
        renderApproveStatus(value),
    },
  },
  {
    name: "totalAmount",
    label: "Total Amount",
  },
  {
    name: ApplicationTable.requestId.name,
    label: " ",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value, tableMeta) => (
        <div>
          <Button
            color={color.secondary}
            variant="contained"
            size="small"
            onClick={() => redirectToDetail(value)}

          >
            Detail
        </Button>
        </div>
      ),
    }
  }]
