import React, { Component } from 'react';
import { Button, Form, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';


export default class addschedule extends Component {

    constructor(props) {
        super(props)
        this.onChangeTaskid = this.onChangeTaskid.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDatetimefrom = this.onChangeDatetimefrom.bind(this);
        this.onChangeDatetimeto = this.onChangeDatetimeto.bind(this);
        this.onChangeEmpid = this.onChangeEmpid.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Taskid: '',
            Name: '',
            Datetimefrom: '',
            Datetimeto: '',
            Empid: '',
            State: 'Not Done'
        }
    }

    onChangeTaskid(e) {
        this.setState({
            Taskid: e.target.value
        })
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        })
    }

    onChangeDatetimefrom(e) {
        this.setState({
            Datetimefrom: e.target.value
        })
    }

    onChangeDatetimeto(e) {
        this.setState({
            Datetimeto: e.target.value
        })
    }

    onChangeEmpid(e) {
        this.setState({
            Empid: e.target.value
        })
    }

    onChangeState(e) {
        this.setState({
            State: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const schedule = {
            Taskid: this.state.Taskid,
            Name: this.state.Name,
            Datetimefrom: this.state.Datetimefrom,
            Datetimeto: this.state.Datetimeto,
            Empid: this.state.Empid,
            State: this.state.State,
        }
        alert("Schedule details added succesfully");
        console.log(schedule);

        axios.post('http://localhost:5000/api/schedule/add', schedule)
            .then(res => console.log(res.data));

        this.setState({

            Taskid: '',
            Name: '',
            Datetimefrom: '',
            Datetimeto: '',
            Empid: '',
            State: ''

        })
    }



    render() {
        return (

            <
            div >
            <
            Navbar expand = "lg"
            bg = "dark"
            variant = "dark" >
            <
            Container >
            <
            Navbar.Brand href = "#home" > AddSchedule < /Navbar.Brand> <
            Nav.Link href = "#home" > Home < /Nav.Link> <
            Nav.Link href = "/" > DashBoard < /Nav.Link> <
            Nav className = "mr-auto" >
            <
            NavDropdown style = {
                { color: "blue" } }
            title = "ViewDetails"
            id = "collasible-nav-dropdown" >
            <
            NavDropdown.Item href = "/viewplant" > Plant < /NavDropdown.Item> <
            NavDropdown.Item href = "/viewSchedule" > Schedule < /NavDropdown.Item> <
            /NavDropdown> <
            /Nav> <
            Button style = {
                { backgroundColor: "#006600" } }
            variant = "outline-info" > Logout < /Button>

            <
            /Container> <
            /Navbar> <
            div className = "addschedule" > < br / > < br / >
            <
            h1 className = "center2" > Add Schedule details < /h1><br/ > < br / >
            <
            div className = "form-container1" >

            <
            Form onSubmit = { this.onSubmit } >
            <
            Form.Group controlId = "taskId" >
            <
            Form.Label > taskId < /Form.Label> <
            Form.Control input maxLength = "4"
            type = "taskId"
            placeholder = "Enter schedule name"
            onChange = { this.onChangeTaskid }
            value = { this.state.Taskid }
            required / >
            <
            /Form.Group> <
            Form.Group controlId = "Name" >
            <
            Form.Label > name < /Form.Label> <
            Form.Control type = "name"
            placeholder = "Enter schedule name"
            onChange = { this.onChangeName }
            value = { this.state.Name }
            required / >
            <
            /Form.Group>

            <
            Form.Group controlId = "dateTimeFrom" >
            <
            Form.Label > dateTimeFrom < /Form.Label> <
            Form.Control input type = "date"
            placeholder = "Enter the date time start"
            onChange = { this.onChangeDatetimefrom }
            value = { this.state.Datetimefrom }
            required / >
            <
            /Form.Group>

            <
            Form.Group controlId = "datTimeTo" >
            <
            Form.Label > dateTimeTo < /Form.Label> <
            Form.Control input type = "date"
            placeholder = "Enter the date time finish"
            onChange = { this.onChangeDatetimeto }
            value = { this.state.Datetimeto }
            required / >
            <
            /Form.Group>

            <
            Form.Group controlId = "Empid" >
            <
            Form.Label > employee < /Form.Label> <
            Form.Control type = "employee"
            placeholder = "Enter the employee id"
            onChange = { this.onChangeEmpid }
            value = { this.state.Empid }
            required / >
            <
            /Form.Group>


            <
            Form.Group controlId = "state" >
            <
            Form.Label > state < /Form.Label> <
            Form.Control as = "select"
            onChange = { this.onChangeState }
            defaultValue = { this.state.State }
            required >
            <
            option > Done < /option> <
            option > Not Done < /option> <
            /Form.Control>

            <
            /Form.Group>





            <
            Button style = {
                { backgroundColor: "#006600" } }
            variant = "primary"
            type = "submit" >
            Add Details <
            /Button>

            <
            /Form> <
            /div> <
            /div>

            <
            div >
            <
            footer style = {
                {
                    height: "50px",
                }
            } >
            <
            div >
            &
            copy; 2020 copyright: SABH - PK.com <
            /div> <
            /footer> <
            /div> <
            /div>
        )
    }
}