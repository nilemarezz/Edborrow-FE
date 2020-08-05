import { renderImage } from "../getImage";
import React from "react";
import { renderDepartment, renderStatus } from "./renderItemTable";
import Button from "@material-ui/core/Button";
import { color } from "../data/color";
import * as R from 'ramda'
import { CartItem } from '../data/refactorMUIdata'
import { ItemTable } from '../../systemdata/Item'
export const OptionCartTable = {
  selectableRows: false,
  filterType: "textField",
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  download: false,
  print: false,
};
export const CartColumns = (
  redirectToDetailPage,
  deleteItemInCart
) => [
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
          return <span>{renderDepartment(value, tableMeta.rowData[5])}</span>;
        },
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
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/* {renderItemButton(tableMeta, cart, AddItemToCarts, redirectToCartPage)} */}
            <Button
              color={color.secondary}
              variant="contained"
              size="small"
              onClick={() => redirectToDetailPage(value)}
            >
              Detail
          </Button>
            <Button
              color={color.secondary}
              variant="contained"
              size="small"
              onClick={() => deleteItemInCart(value)}
              style={{ marginLeft: 10 }}
            >
              Delete
          </Button>
          </div>
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
