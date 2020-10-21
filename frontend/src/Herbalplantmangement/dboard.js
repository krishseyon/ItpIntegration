import React, { Component } from 'react'
import { Navbar, Container, Card, Button, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";

import admin from "./stock/admin.jpg";
import logo from "./stock/hplant.jpg"
import logo1 from "./stock/maintain.jpg"

export default class dboard extends Component {
    render() {
        return (

            <
            div className = 'con' >
            <
            Navbar expand = "lg"
            bg = "dark"
            variant = "dark" >
            <
            Container >

            <
            Navbar.Brand href = "#home" > DashBoard < /Navbar.Brand> <
            Nav className = "mr-auto" >
            <
            Nav.Link href = "#home" > Home < /Nav.Link> <
            NavDropdown title = "ViewDetails"
            id = "collasible-nav-dropdown" >
            <
            NavDropdown.Item href = "/viewplant" > Plant < /NavDropdown.Item> <
            NavDropdown.Item href = "/viewSchedule" > Schedule < /NavDropdown.Item> <
            /NavDropdown> <
            /Nav> <
            Button style = {
                { backgroundColor: "#25258e" } }
            variant = "outline-info" > Logout < /Button>

            <
            /Container> <
            /Navbar><br/ >
            <
            div class = 'center' >
            <
            h1 > Welcome Herbal Garden Incharge < /h1> <
            /div><br/ >
            <
            div style = {
                { justifyContent: 'center', display: 'flex' } } >

            <
            img src = { admin }
            alt = "Logo"
            height = '100'
            width = '100'
            style = {
                { borderRadius: "10px" } }
            /> <
            /div><br/ >

            <
            div style = {
                { justifyContent: 'center', display: 'flex' } } >
            <
            Card style = {
                { width: '50rem', borderWidth: 5, borderColor: "black", backgroundColor: "#ccffcc" } }
            className = "text-center" >
            <
            Card.Header style = {
                { color: 'white', backgroundColor: 'black' } } > Herbal Plant Management < /Card.Header>

            <
            Card.Body >
            <
            div style = {
                { justifyContent: 'center', display: 'flex' } } >
            <
            img src = { logo }
            alt = "Logo"
            height = '150'
            width = '200'
            style = {
                { borderRadius: "10px" } }
            /> <
            /div><br/ >
            <
            Button href = "/viewplant"
            style = {
                { backgroundColor: "#006600" } }
            variant = "dark" > View Plant Details < /Button> <
            Button href = "/addplant"
            style = {
                { backgroundColor: "#006600" } }
            variant = "dark" > Add Plant Details < /Button> <
            /Card.Body> <
            /Card> <
            /div><br/ >

            <
            div style = {
                { justifyContent: 'center', display: 'flex' } } >
            <
            Card style = {
                { width: '50rem', borderWidth: 5, borderColor: "black", backgroundColor: "#ccffcc" } }
            className = "text-center" >
            <
            Card.Header style = {
                { color: 'white', backgroundColor: 'black' } } > Herbal Garden Schedule Mangement < /Card.Header> <
            Card.Body >
            <
            div style = {
                { justifyContent: 'center', display: 'flex' } } >
            <
            img src = { logo1 }
            alt = "Logo"
            height = '150'
            width = '200'
            style = {
                { borderRadius: "10px" } }
            /> <
            /div><br/ >
            <
            Button href = "/viewSchedule"
            style = {
                { backgroundColor: "#006600" } }
            variant = "dark" > View Schedule Details < /Button> <
            Button href = "/addSchedule"
            style = {
                { backgroundColor: "#006600" } }
            variant = "dark" > Add Schedule Details < /Button> <
            /Card.Body> <
            /Card> <
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
            /div>

            <
            /div>
        )
    }
}