import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

//import Dboard from "./Herbalplantmangement/dboard";

import Viewschedule from "./Herbalplantmangement/viewscheduledetails";
import Updateschedule from "./Herbalplantmangement/updateschedule";
import Updateplant from "./Herbalplantmangement/updateplant";
//import Dashboard from "./Herbalplantmangement/herbalstaffdash";
import Viewplant from "./Herbalplantmangement/viewplantdetails";
import Schedule from "./Herbalplantmangement/addschedule";
//import Herbalplants from "./Herbalplantmangement/addplant";
import dboard from "./Herbalplantmangement/dboard";
import addplant from "./Herbalplantmangement/addplant";
//import Login from "./account management/pages/Login";


const App = () => {
    return (


        <
        Router >

        <
        Switch >
        <
        Route path = "/"
        exact component = { dboard }
        />

        <
        Route path = "/addPlant"
        exact component = { addplant }
        />

        <
        Route path = "/viewPlant"
        exact component = { Viewplant }
        />

        <
        Route path = "/plant/update/:id"
        exact component = { Updateplant }
        /> <
        Route path = "/viewSchedule"
        exact component = { Viewschedule }
        /> <
        Route path = "/addSchedule"
        exact component = { Schedule }
        />

        <
        Route path = "/schedule/update/:id"
        exact component = { Updateschedule }
        />

        <
        /Switch>  < /
        Router >


    );
};

export default App;

/*</Route>
login "/"

Ticket clerk
dashboard "/:uid"
my account "/:uid/account"
view all patients "/opd_patients"
search all patients "/:nic/opd_patients"
view patient details "/:nic/opd_details"
edit patient details "/:nic/edit_opd_details" *
    /

/*
<Route path="/:uid" exact>
          <TcDashboard />
        </Route>
<Route path="/:uid/account" exact>
          <TcMyAccount />
        </Route>
        <Route path="/:nic/opd_patients" exact>
          <TcSearchAllPatients />
        </Route>
        <Route path="/:nic/opd_details" exact>
          <TcViewPatientDetails />
        </Route>
        <Route path="/:nic/edit_opd_details" exact>
          <TcEditPatientDetails />
</Route>
*/