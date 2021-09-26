import React, { useState } from "react";
import classNames from "classnames";

import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardActions,
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import {makeStyles}  from "@material-ui/core/styles/";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

const CustomerCard = ({ first_name, last_name, email, avatar, className }) => {
  const classes = useStyles();
  
    return (
    <Card className={classNames(className, classes.root)}>
      <CardHeader
        avatar={<Avatar src={avatar} aria-label="recipe"></Avatar>}
        title={`${first_name} ${last_name}`}
        subheader={email}
      />

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default CustomerCard;
