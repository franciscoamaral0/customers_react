import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Customers from "./pages/customers/Customers";
import TemplateDefault from "./templates/Default";
import TemplatePage from "./templates/Page";
import CustomersRegister from "./pages/customers/CustomersRegister";




const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/customers/add">
            <TemplatePage title="Customer List" Component={CustomersRegister} />
          </Route>
          <Route  path="/customers">
            <TemplatePage title="Clientes" Component={Customers} />
          </Route>
          <Route path="/">
            <TemplatePage title="Home" Component={Home} />
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  );
};

export default App;
