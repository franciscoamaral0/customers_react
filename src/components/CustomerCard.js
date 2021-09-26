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
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {makeStyles}  from "@material-ui/core/styles/";
import Delete from "@material-ui/icons/Delete";
import ModalConfig from "./ModalConfirm";




const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

const CustomerCard = ({ id, first_name, last_name, email, avatar, className, onRemoveCustomer }) => {
  const classes = useStyles() 

  const [openModal, setOpenModal] = useState(false)

  const handleToggleOpenModal = () =>{
    setOpenModal(!openModal)
  }
  const handleConfirmModal = id =>{
    onRemoveCustomer(id)
    handleToggleOpenModal()

  }
  const handleRemoveCustomer = () =>{
    handleToggleOpenModal()
  }
  
    return (
      <>
    <Card className={classNames(className, classes.root)}>
      <CardHeader
        avatar={<Avatar src={avatar} aria-label="recipe"></Avatar>}
        title={`${first_name} ${last_name}`}
        subheader={email}
      />

      <CardActions disableSpacing>
        <IconButton aria-label="Edit customer" >
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Delete customer" onClick={() => handleRemoveCustomer()}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
    <ModalConfig 
    title='Do you really want to delete this contact?'
    message='When deleting it is not possible to go back'
    open={openModal}
    onClose={handleToggleOpenModal} 
    onCofirm={() => handleConfirmModal(id)}
    />
    </>
  );
};
export default CustomerCard;
