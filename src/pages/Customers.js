import axios from "axios";
import { useState, useEffect } from "react";
import CustomerCard from "../components/CustomerCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const Customers = (props) => {
  const [customers, setCustomers] = useState([]);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
      margin: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  const pickData = async () => {
    const { data } = (
      await axios.get("https://reqres.in/api/users")
    ).data;
    setCustomers(data);
  };

  const deleteData = async (id) => {
    const {data} = (
      await axios.delete(`https://reqres.in/api/users/${id}`).data
    )
    setCustomers(data)
  }

  useEffect(() => {
    pickData();
  }, []);

  const handleRemoveCustomer = async id =>{
    const deletedUser = await axios.delete(`https://reqres.in/api/users/${id}`)
    console.log(deletedUser)
    const deleted = customers.filter(element => element.id !== id)
    setCustomers(deleted)
  }

  

  return (
    <>
      <Grid container>
        {customers.map((customer) => (
          <Grid item xs={12} md={6}>
            <CustomerCard {...customer} id ={customer.id} className={classes.card} onRemoveCustomer={handleRemoveCustomer} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Customers;
