import { renderImage } from "../getImage";
import React from "react";
import { renderDepartment, renderStatus } from "./renderItemTable";
import Button from "@material-ui/core/Button";
import { color } from "../data/color";
import * as R from 'ramda'
import { CartItem } from '../data/refactorMUIdata'
import { ItemTable } from '../../systemdata/Item'
import { ItemStatus } from '../../systemdata/ItemStatus'
import { Link } from 'react-router-dom'
import { route } from '../../systemdata/route'
export const OptionItemTable = {
  selectableRows: false,
  filterType: "textField",
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  download: true,
  print: true,
};


export const renderItemButton = (tableMeta, cart, AddItemToCarts, redirectToCartPage) => {
  let disable = false;

  if (tableMeta.rowData[4] === ItemStatus.Avaliable.id) {
    disable = false;
  } else {
    disable = true;
  }
  var found = R.contains(CartItem(tableMeta.rowData), cart);
  return (
    <Button
      color="primary"
      variant="contained"
      size="small"
      onClick={() =>
        found
          ? redirectToCartPage()
          : AddItemToCarts(tableMeta.rowData)
      }
      disabled={disable}
    >
      {found ? "Cart" : "Add"}
    </Button>
  );
};

export const ItemColumns = () => [
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
  {
    name: ItemTable.departmentName.name,
    label: ItemTable.departmentName.label,
    options: {
      customBodyRender: (value, tableMeta) => {
        return <span>{renderDepartment(value, tableMeta.rowData[6])}</span>;
      },
    },
  },

  {
    name: ItemTable.itemAvailability.name,
    label: ItemTable.itemAvailability.label,
    options: {
      customBodyRender: (value) => renderStatus(value),
    },
  },
  {
    name: ItemTable.itemId.name,
    label: "Action",
    options: {
      filter: false,
      searchable: false,
      sort: false,
      download: false,
      customBodyRender: (value, tableMeta) => (
        <Link to={`${route.adminDetail.itemDetailAdmin}/${value}`} style={{ textDecoration: 'none' }}>
          <Button
            color={color.secondary}
            variant="contained"
            size="small"

          >
            Detail
        </Button>
        </Link>
      ),
    },
  },
  {
    name: ItemTable.ownerName.name,
    label: ItemTable.ownerName.label,
    options: {
      display: false,
      filter: false,
      searchable: false,
      sort: false,
      download: false,
    },
  },
];
