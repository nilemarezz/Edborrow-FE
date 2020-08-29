import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { renderImage } from "../../utilities/getImage";
import { RefactorDate } from '../../utilities/data/refactorDate'

const useStyles = makeStyles(() => ({
  root: {
    height: "100%"
  },
  content: {
    padding: 0
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: "flex-end"
  }
}));

const LatestProducts = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  console.log(props.data)
  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        title="Latest Borrow"
      />
      <Divider />
      <CardContent className={classes.content}>
        <List>
          {props.data.length > 0 && props.data.map((item, i) => (
            <>
              <ListItem divider={i < item.length - 1} key={item.id}>
                <ListItemAvatar>
                  <img
                    alt="Product"
                    className={classes.image}
                    src={renderImage(item.itemImage)}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={`Item: ${item.itemName}`}
                  secondary={RefactorDate(item.transactionDate)}
                />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </CardContent>

    </Card>
  );
};

LatestProducts.propTypes = {
  className: PropTypes.string
};

export default LatestProducts;
