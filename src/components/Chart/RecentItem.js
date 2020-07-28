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

  const [items] = useState([
    { id: 1, date: "Mar 22 2020", image: null },
    { id: 1, date: "Mar 22 2020", image: null },
    { id: 1, date: "Mar 22 2020", image: null },
  ]);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        subtitle={`${items.length} in total`}
        title="Latest Borrow"
      />
      <Divider />
      <CardContent className={classes.content}>
        <List>
          {items.map((item, i) => (
            <>
              <ListItem divider={i < item.length - 1} key={item.id}>
                <ListItemAvatar>
                  <img
                    alt="Product"
                    className={classes.image}
                    src={renderImage(item.image)}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={`Item: ${item.itemsId}`}
                  secondary={item.date}
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
