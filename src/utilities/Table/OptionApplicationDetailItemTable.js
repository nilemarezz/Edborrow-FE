import React from 'react'
import { ApplicationTable } from '../../systemdata/Application'
import { renderImage } from '../../utilities/getImage'
import { renderItemStatus, renderItemDetailApplicationStatus } from '../../utilities/Table/renderItemTable'
import { RefactorDate } from '../../utilities/data/refactorDate'
export const OptionApplicationDetailTable = {
  filterType: "checkbox",
  selectableRows: false,
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
};

export const ApplicationDetailColumn = () => [
  {
    name: ApplicationTable.itemId.name,
    label: ApplicationTable.itemId.label,
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: ApplicationTable.itemName.name,
    label: ApplicationTable.itemName.label,
    options: {
      filter: true,
      sort: true,
    },
  },
  // {
  //   name: ApplicationTable.itemImage.name,
  //   label: ApplicationTable.itemImage.label,
  //   options: {
  //     filter: true,
  //     sort: true,
  //     customBodyRender: (value, tableMeta, updateValue) => (
  //       <img
  //         src={renderImage(value)}
  //         style={{ width: 50, height: 50 }}
  //         alt="equipment"
  //       />
  //     ),
  //   },
  // },
  {
    name: ApplicationTable.itemApprove.name,
    label: ApplicationTable.itemApprove.label,
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value, tableMeta, updateValue) =>
        renderItemDetailApplicationStatus(value),
    },
  },
  {
    name: ApplicationTable.itemBorrowingStatusId.name,
    label: ApplicationTable.itemBorrowingStatusId.label,
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value, tableMeta, updateValue) =>
        renderItemStatus(value),
    },
  },
  {
    name: ApplicationTable.borrowDate.name,
    label: "Borrow",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value, tableMeta, updateValue) =>
        RefactorDate(value),
    },
  },
  {
    name: ApplicationTable.returnDate.name,
    label: "Return",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value, tableMeta, updateValue) =>
        RefactorDate(value),
    },
  },
  {
    name: "amount",
    label: "Amount"
  },

  {
    name: ApplicationTable.rejectPurpose.name,
    label: ApplicationTable.rejectPurpose.label,
    options: {
      customBodyRender: (value, tableMeta, updateValue) =>
        value === null || value === 'null' ? <p>-</p> : value,
    },
  },
]
