import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Form, Nav, FormControl, Container, NavDropdown } from 'react-bootstrap'

import { Link } from 'react-router-dom';
import axios from 'axios';

import jsPDF from "jspdf";
import html2canvas from "html2canvas";




const Plant = props => ( <
    tr >
    <
    td > { props.plant.plantId } < /td> <
    td > { props.plant.commanName } < /td> <
    td > { props.plant.botName } < /td> <
    td > { props.plant.partused } < /td> <
    td > { props.plant.usage } < /td> <
    td > { props.plant.avaiplants } < /td> <
    td >
    <
    Link to = { "/plant/update/" + props.plant._id } > update < /Link> | <a href="#" onClick={() => { props.deletePlant(props.plant._id) }}>delete</a >
    <
    /td> <
    /tr>
)

const PlantPdf = props => ( <
    tr >
    <
    td > { props.plant.commanName } < /td> <
    td > { props.plant.partused } < /td> <
    td > { props.plant.usage } < /td> <
    td > { props.plant.avaiplants } < /td> <
    /tr>
)



export default class viewplantdetails extends Component {

    constructor(props) {
        super(props);

        this.deletePlant = this.deletePlant.bind(this)

        this.state = {
            plants: [],
            printPdf: false,
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/plant/')
            .then(response => {
                this.setState({ plants: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deletePlant(id) {
        axios.delete('http://localhost:5000/api/plant/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            plants: this.state.plants.filter(el => el._id !== id)
        })
    }

    plantList() {
        return this.state.plants.map(currentplant => {
            return <Plant plant = { currentplant }
            deletePlant = { this.deletePlant }
            key = { currentplant._id }
            />;
        })
    }
    plantListPdf() {
        return this.state.plants.map(currentplant => {
            return <PlantPdf plant = { currentplant }
            deletePlant = { this.deletePlant }
            key = { currentplant._id }
            />;
        })
    }

    printDocument = () => {

        document.getElementById("tableData").style.display = "none";
        document.getElementById("divToPrint").style.display = "block";

        if (document.getElementById("divToPrint").style.display == "block") {
            const input = document.getElementById("divToPrint");
            html2canvas(input).then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const pdf = new jsPDF();
                pdf.addImage(imgData, "JPEG", 0, 0);
                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            });

        }



    };


    render() {
        return ( <
            div >

            <
            div >
            <
            Navbar expand = "lg"
            bg = "dark"
            variant = "dark" >
            <
            Container >

            <
            Navbar.Brand href = "#home" > HerbalPlants < /Navbar.Brand> <
            Nav className = "mr-auto" >
            <
            Nav.Link href = "#home" > Home < /Nav.Link> <
            Nav.Link href = "/" > DashBoard < /Nav.Link> <
            NavDropdown title = "ViewDetails"
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
            /Navbar><br/ >

            <
            /div> <
            br / >

            <
            h3 className = "center3" > Plant Details < /h3><hr/ >
            <
            div id = "tableData" >
            <
            Table striped bordered hover >
            <
            thead className = "thead-light" >
            <
            tr >
            <
            th > plantId < /th> <
            th > CommanName < /th> <
            th > BotanicalName < /th> <
            th > Partused < /th> <
            th > Usage < /th> <
            th > Avaiplants < /th> <
            th > Actions < /th> <
            /tr> <
            /thead> <
            tbody > { this.plantList() } <
            /tbody> <
            /Table> <
            /div>

            <
            div id = "divToPrint"
            style = {
                { display: "none" } } >
            <
            table style = {
                { width: "40%" } } >
            <
            thead style = {
                { background: "#00cc99" } } >
            <
            tr >
            <
            th style = {
                { height: "50px" } } > CommanName < /th> <
            th > Partused < /th> <
            th > Usage < /th> <
            th > Avaiplants < /th>

            <
            /tr> <
            /thead> <
            tbody style = {
                { background: "#669999" } } > { this.plantListPdf() } <
            /tbody> <
            /table> <
            /div>

            <
            div >
            <
            div >
            <
            button style = {
                { backgroundColor: "#66ff66", borderRadius: "5px" } }
            onClick = { this.printDocument } > Print Report < /button> <
            /div> <
            div className = "mt4" >
            <
            /div> <
            /div>

            <
            div >
            <
            footer style = {
                {
                    height: "50px",
                    position: "fixed",
                    left: "0",
                    bottom: "0",
                    width: "100%"
                }
            } >
            <
            div >
            &
            copy; 2020 copyright: SABH - PK.com <
            /div> <
            /footer> <
            /div>

            <
            /div>


        )
    }
}