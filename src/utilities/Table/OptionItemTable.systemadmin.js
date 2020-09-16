
import React from 'react'
import { ItemTable } from '../../systemdata/Item'
import { renderImage } from "../getImage";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";
import { RefactorDate } from '../data/refactorDate'
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { renderStatus } from './renderItemTable'
export const OptionItemTable = {
  filterType: "textField",
  selectableRowsOnClick: true,
  selectableRows: false,
  expandableRows: true,
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 20, 50],
  isRowExpandable: (dataIndex, expandedRows) => {
    if (
      expandedRows.data.length > 4 &&
      expandedRows.data.filter((d) => d.dataIndex === dataIndex).length === 0
    )
      return false;
    return true;
  },
  renderExpandableRow: (rowData, rowMeta) => {
    const colSpan = rowData.length + 1;
    return (
      <TableRow>
        <TableCell colSpan={colSpan}>
          <div>
            <Grid container>
              <Grid item sm={6} xs={6}>
                <Grid container>
                  <Grid item sm={3} xs={3}>
                    <div style={{ float: "right" }}>
                      <p>Brand</p>
                      <p>Model</p>
                      <p>Category</p>
                      <p>Description</p>
                    </div>
                  </Grid>
                  <Grid item sm={6} xs={3}>
                    <div style={{ paddingLeft: 20 }}>
                      <p>: &nbsp;&nbsp;{rowData[4] || "-"}</p>
                      <p>: &nbsp;&nbsp;{rowData[5] || "-"}</p>
                      <p>: &nbsp;&nbsp;{rowData[8] || "-"}</p>
                      <p>: &nbsp;&nbsp;{rowData[7] || "-"}</p>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={6} xs={6}>
                <Grid container>
                  <Grid item sm={3} xs={3}>
                    <div style={{ float: "right" }}>
                      <p>Create Date</p>
                      <p>Telephone No.</p>
                      <p>Email</p>
                      <p>Place</p>
                    </div>
                  </Grid>
                  <Grid item sm={9} xs={6}>
                    <div style={{ paddingLeft: 20 }}>
                      <p>: &nbsp;&nbsp;{rowData[6] || "-"}</p>
                      <p>: &nbsp;&nbsp;{rowData[9] || "-"}</p>
                      <p>: &nbsp;&nbsp;{rowData[10] || "-"}</p>
                      <p>: &nbsp;&nbsp;{rowData[11] || "-"} , {rowData[12] || "-"} , {rowData[13] || "-"}</p>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </TableCell>
      </TableRow>
    );
  },
  onRowsExpand: (curExpanded, allExpanded) =>
    null
}

export const ItemColumns = (deleteItems) => [
  { name: ItemTable.itemId.name, label: ItemTable.itemId.label },
  { name: ItemTable.itemName.name, label: ItemTable.itemName.label },
  {
    name: ItemTable.itemImage.name,
    label: ItemTable.itemImage.label,
    options: {
      filter: false,
      searchable: false,
      sort: false,
      download: false,
      customBodyRender: (value) => (
        <img
          src={renderImage(value)}
          alt="default"
          style={{ width: 50, height: 50 }}
        />
      ),
    },
  },
  { name: ItemTable.departmentName.name, label: ItemTable.departmentName.label },
  {
    name: ItemTable.itemBrand.name, options: {
      display: false,
    },
  },
  {
    name: ItemTable.itemModel.name, options: {
      display: false,
    },
  },
  {
    name: ItemTable.createDate.name, options: {
      display: false,
      customBodyRender: (value, tableMeta) => (RefactorDate(value))
    },
  },
  {
    name: ItemTable.itemDescription.name, options: {
      display: false,
    },
  },
  {
    name: ItemTable.categoryName.name, options: {
      display: false,
    },
  },

  {
    name: ItemTable.departmentTelNo.name, options: {
      display: false,
    },
  },
  {
    name: ItemTable.departmentEmail.name, options: {
      display: false,
    },
  },
  {
    name: ItemTable.placeBuilding.name, options: {
      display: false,
    },
  },
  {
    name: ItemTable.placeFloor.name, options: {
      display: false,
    },
  },
  {
    name: ItemTable.placeRoom.name, options: {
      display: false,
    },
  },
  {
    name: "itemStatusId", label: "Status", options: {
      customBodyRender: (value, tableMeta) => renderStatus(value)
    }
  },

  {
    name: ItemTable.itemId.name, label: " ", options: {
      customBodyRender: (value, tableMeta) => {
        return (
          <Button variant="contained" color="secondary" size="small" onClick={() => deleteItems(value)}>
            <DeleteForeverIcon />
          </Button>
        )
      },
      filter: false,
      searchable: false,
      sort: false,
      download: false,
    },

  },
];
