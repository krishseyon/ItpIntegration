import React, { Component } from 'react';
import { Button, Form, Nav, FormControl, Navbar, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class addplant extends Component {

    constructor(props) {

        super(props);

        this.onChangePlantid = this.onChangePlantid.bind(this);
        this.onChangeCommanname = this.onChangeCommanname.bind(this);
        this.onChangeBotname = this.onChangeBotname.bind(this);
        this.onChangePartused = this.onChangePartused.bind(this);
        this.onChangeUasge = this.onChangeUasge.bind(this);
        this.onChangeAvaiplants = this.onChangeAvaiplants.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            plantid: "",
            commanname: "",
            botname: "",
            partused: "",
            usage: "",
            avaiplants: ""

        }
    }

    onChangePlantid(e) {
        this.setState({
            plantid: e.target.value
        })
    }
    onChangeCommanname(e) {
        this.setState({
            commanname: e.target.value
        })
    }

    onChangeBotname(e) {
        this.setState({
            botname: e.target.value
        })
    }
    onChangePartused(e) {
        this.setState({
            partused: e.target.value
        })
    }
    onChangeUasge(e) {
        this.setState({
            usage: e.target.value
        })
    }
    onChangeAvaiplants(e) {
        this.setState({
            avaiplants: e.target.value
        })
    }

    onSubmit(e) {

        e.preventDefault();

        const plant = {
            plantId: this.state.plantid,
            commanName: this.state.commanname,
            botName: this.state.botname,
            partused: this.state.partused,
            usage: this.state.usage,
            avaiplants: this.state.avaiplants
        }
        alert("plant details added succesfully");
        console.log(plant);

        axios.post('http://localhost:5000/api/plant/add', plant)
            .then(res => { console.log(res.data) });

        this.setState({
            plantid: "",
            commanname: "",
            botname: "",
            partused: "",
            usage: "",
            avaiplants: ""
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
            Navbar.Brand href = "#home" > AddHerbalPlants < /Navbar.Brand> <
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
            div className = "addplant" > < br / >
            <
            div className = "center1" >
            <
            h1 > Add Plant Details < /h1> <
            /div><br/ > < br / >
            <
            div className = "form-container1" >


            <
            Form onSubmit = { this.onSubmit } >

            <
            Form.Group controlId = "plantId" >
            <
            Form.Label > plantId < /Form.Label> <
            Form.Control input maxLength = "4"
            type = "text"
            placeholder = "Enter plantID"
            onChange = { this.onChangePlantid }
            value = { this.state.plantid }
            required / >
            <
            /Form.Group>

            <
            Form.Group controlId = "commonName" >
            <
            Form.Label > comman Name < /Form.Label> <
            Form.Control type = "text"
            placeholder = "Enter plant name"
            onChange = { this.onChangeCommanname }
            value = { this.state.commanname }
            required / >
            <
            /Form.Group>

            <
            Form.Group controlId = "botName" >
            <
            Form.Label > botName < /Form.Label> <
            Form.Control type = "text"
            placeholder = "Enter botanicalName"
            onChange = { this.onChangeBotname }
            value = { this.state.botname }
            required / >
            <
            /Form.Group>

            <
            Form.Group controlId = "partused" >
            <
            Form.Label > partused < /Form.Label> <
            Form.Control type = "text"
            placeholder = "Enter the use part"
            onChange = { this.onChangePartused }
            value = { this.state.partused }
            required / >
            <
            /Form.Group>

            <
            Form.Group controlId = "usage" >
            <
            Form.Label > usage < /Form.Label> <
            Form.Control type = "text"
            placeholder = "Enter the usage"
            onChange = { this.onChangeUasge }
            value = { this.state.usage }
            required / >
            <
            /Form.Group>

            <
            Form.Group controlId = "avaiplants" >
            <
            Form.Label > availplants < /Form.Label> <
            Form.Control input type = "number"
            min = "0"
            placeholder = "Enter the available plants"
            onChange = { this.onChangeAvaiplants }
            value = { this.state.avaiplants }
            required / >
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
            /Form>

            <
            /div><br/ >
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
            /div> <
            /div>


        )
    }
}