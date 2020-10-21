import React, { Component } from 'react'
import { Button, Form, Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import axios from 'axios';

export default class updateschedule extends Component {

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
            taskid: '',
            name: '',
            datetimefrom: '',
            datetimeto: '',
            Empid: '',
            state: '',


        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/schedule/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    taskid: response.data.Taskid,
                    name: response.data.Name,
                    datetimefrom: response.data.Datetimefrom,
                    datetimeto: response.data.Datetimeto,
                    Empid: response.data.Empid,
                    state: response.data.State
                })
            })
            .catch(function(error) {
                console.log(error);
            })

    }
    onChangeTaskid(e) {
        this.setState({
            taskid: e.target.value
        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeDatetimefrom(e) {
        this.setState({
            datetimefrom: e.target.value
        })
    }

    onChangeDatetimeto(e) {
        this.setState({
            datetimeto: e.target.value
        })
    }

    onChangeEmpid(e) {
        this.setState({
            Empid: e.target.value
        })
    }
    onChangeState(e) {
        this.setState({
            state: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const schedule = {
            Taskid: this.state.taskid,
            Name: this.state.name,
            Datetimefrom: this.state.datetimefrom,
            Datetimeto: this.state.datetimeto,
            Empid: this.state.Empid,
            State: this.state.state,


        }
        alert("Schedule details Updated succesfully");

        console.log(schedule);

        axios.post('http://localhost:5000/api/schedule/update/' + this.props.match.params.id, schedule)
            .then(res => console.log(res.data));

        window.location = '/viewschedule';

    }

    render() {
        return ( <
            div >

            <
            Navbar expand = "lg"
            bg = "dark"
            variant = "dark" >

            <
            Container >

            <
            Navbar.Brand href = "#home" > AddSchedule < /Navbar.Brand>  <
            Nav.Link href = "#home" > Home < /Nav.Link>  <
            Nav.Link href = "/" > DashBoard < /Nav.Link>  <
            Nav className = "mr-auto" >

            <
            NavDropdown style = {
                { color: "blue" } }
            title = "ViewDetails"
            id = "collasible-nav-dropdown" >

            <
            NavDropdown.Item href = "/viewplant" > Plant < /NavDropdown.Item>  <
            NavDropdown.Item href = "/viewSchedule" > Schedule < /NavDropdown.Item>  <
            /NavDropdown>  <
            /Nav>  <
            Button style = {
                { backgroundColor: "#006600" } }
            variant = "outline-info" > Logout < /Button>


            <
            /Container>  <
            /Navbar>  <
            div className = "updateschedule" > < br / > < br / >

            <
            h1 className = "center2" > Update Schedule < /h1><br/ > < br / >

            <
            div className = "form-container1" >


            <
            Form onSubmit = { this.onSubmit } >

            <
            Form.Group controlId = "taskId" >

            <
            Form.Label > taskId < /Form.Label>  <
            Form.Control input maxLength = "4"
            size = "4"
            type = "taskId"
            placeholder = "Enter schedule name"
            value = { this.state.taskid }
            onChange = { this.onChangeTaskid }
            />  <
            /Form.Group>


            <
            Form.Group controlId = "name" >

            <
            Form.Label > name < /Form.Label>  <
            Form.Control type = "name"
            placeholder = "Enter schedule name"
            value = { this.state.name }
            onChange = { this.onChangeName }
            />  <
            /Form.Group>


            <
            Form.Group controlId = "dateTimeFrom" >

            <
            Form.Label > dateTimeFrom < /Form.Label>  <
            Form.Control input type = "date"
            placeholder = "Enter the date time start"
            value = { this.state.datetimefrom }
            onChange = { this.onChangeDatetimefrom }
            />  <
            /Form.Group>

            <
            Form.Group controlId = "dateTimeTo" >

            <
            Form.Label > dateTimeTo < /Form.Label>  <
            Form.Control input type = "date"
            placeholder = "Enter the date time finish"
            value = { this.state.datetimeto }
            onChange = { this.onChangeDatetimeto }
            />  <
            /Form.Group>

            <
            Form.Group controlId = "Empid" >

            <
            Form.Label > Employee < /Form.Label>  <
            Form.Control type = "Empid"
            placeholder = "Enter the employee id"
            value = { this.state.Empid }
            onChange = { this.onChangeEmpid }
            />  <
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
                { backgroundColor: "#006600" }
            }
            variant = "primary"
            type = "submit" >
            Update Details <
            /Button>


            <
            /Form>


            <
            /div>


            <
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
            /div>  <
            /footer>  <
            /div>  <
            /div>
        )
    }
}