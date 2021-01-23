import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Lodding from "./Pages/Lodding"
let Home = React.lazy(() => import ("./Pages/Home"));
let Login = React.lazy(() => import ("./Pages/User/Login"));      /*登录 */
let Register = React.lazy(() => import ("./Pages/User/Register"));/* 注册 */

const Suspense = React.Suspense;


function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Lodding />}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route  path="/login" component={Login}></Route>
            <Route  path="/register" component={Register}></Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

