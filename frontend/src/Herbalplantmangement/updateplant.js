/*import React, { Component } from 'react'
import { Button, Form,Navbar,Container } from 'react-bootstrap';
import axios from 'axios';

export default class updateplant extends Component {

   constructor(props){
        super(props);
        this.onChangePlantid = this.onChangePlantid.bind(this);
        this.onChangeCommanname = this.onChangeCommanname.bind(this);
        this.onChangeBotname = this.onChangeBotname.bind(this);
        this.onChangePartused = this.onChangePartused.bind(this);
        this.onChangeUasge = this.onChangeUasge.bind(this);
        this.onChangeAvaiplants = this.onChangeAvaiplants.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            plantid:"",
            commanname:"",
            botname:"",
            partused:"",
            usage:"",
            avaiplants:"",
            plants: []

        }
}

       componentDidMount() {
         axios.get('http://localhost:5000/plants/'+this.props.match.params.id)
         .then(response => {
           this.setState({  
            plantid: response.data.plantid,
            commanname: response.data.commanname,
            botname: response.data.botname,
            partused: response.data.partused,
            usage: response.data.usage,
            avaiplants: response.data.avaiplants,
         
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

      axios.get('http://localhost:5000/plants/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            plants: response.data.map(plant => plant.plantid),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangePlantid(e){
    this.setState({
        plantid: e.target.value
      })
}
onChangeCommanname(e){
    this.setState({
        commanname: e.target.value
    })
}

onChangeBotname(e){
    this.setState({
       botname: e.target.value
    })
}
onChangePartused(e){
    this.setState({
        partused: e.target.value
     })
}
onChangeUasge(e){
    this.setState({
        usage: e.target.value
    })
}
onChangeAvaiplants(e){
    this.setState({
        aviplants: e.target.value
    })
}

onSubmit(e) {
    e.preventDefault();

    const plant = {
      plantID: this.state.plantid,
      commanName: this.state.commanname,
      botName: this.state.botname,
      partUsed: this.state.partused,
      usage: this.state.usage,
      avaiPlants: this.state.avaiPlants


    }

    console.log(plant);
    axios.post('http://localhost:5000/plants/update/' + this.props.match.params.id,)
    .then(res => console.log(res.data));

    window.location = '/';
}
    render() {
        return (

          
          <div>
           <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand href="#">Logout</Navbar.Brand>
          </Container>
          </Navbar>

          <div className="updateplant" >
          <h1 className="form" style={{justifyContent:'center',display:'flex'}}>Update Plant Details</h1><br/><br/>
                 <div className="form-container1">
              
               
                     <Form>
                      <Form.Group controlId="plantId">
                      <Form.Label>plantId</Form.Label>
                      <Form.Control type="plantid" placeholder="Enter plant name" />
                      </Form.Group>

                      <Form.Group controlId="commonName">
                      <Form.Label>comman Name</Form.Label>
                      <Form.Control type="commonname" placeholder="Enter plant name" />
                      </Form.Group>

                      <Form.Group controlId="botName">
                      <Form.Label>botName</Form.Label>
                      <Form.Control type="botname" placeholder="Enter botanicalName" />
                      </Form.Group>

                      <Form.Group controlId="partUsed">
                      <Form.Label>partused</Form.Label>
                      <Form.Control type="partused" placeholder="Enter the use part" />
                       </Form.Group>

                      <Form.Group controlId="usage">
                      <Form.Label>usage</Form.Label>
                      <Form.Control type="usage" placeholder="Enter the usage" />
                      </Form.Group>
                          
                      <Form.Group controlId="usage">
                      <Form.Label>avaiplants</Form.Label>
                      <Form.Control type="available" placeholder="Enter the usage" />
                      </Form.Group>
                          
                      <Button variant="primary" type="submit">
                           Update Details
                        </Button>
                          
                      </Form>
                                
                  </div>
                  </div>
                  </div>
                  
        )
    }
}
*/
import React, { Component } from 'react';
import { Button, Form, Nav, FormControl, Navbar, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class updateplant extends Component {

    constructor(props) {

            super(props);
            //add palnt
            this.onChangePlantid = this.onChangePlantid.bind(this);
            this.onChangeCommanname = this.onChangeCommanname.bind(this);
            this.onChangeBotname = this.onChangeBotname.bind(this);
            this.onChangePartused = this.onChangePartused.bind(this);
            this.onChangeUasge = this.onChangeUasge.bind(this);
            this.onChangeAvaiplants = this.onChangeAvaiplants.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            //any name
            this.state = {
                plantid: "",
                commanname: "",
                botname: "",
                partused: "",
                usage: "",
                avaiplants: ""

            }

        }
        //plant.js name righthand
    componentDidMount() {
        axios.get('http://localhost:5000/api/plant/' + this.props.match.params.id)
            .then(response => {
                this.setState({

                    plantid: response.data.plantId,
                    commanname: response.data.commanName,
                    botname: response.data.botName,
                    partused: response.data.partused,
                    usage: response.data.usage,
                    avaiplants: response.data.avaiplants

                })
            })
            .catch(function(error) {
                console.log(error);
            })
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
        alert("Plant details Updated succesfully");
        console.log(plant);

        axios.post('http://localhost:5000/api/plant/update/' + this.props.match.params.id, plant)
            .then(res => console.log(res.data));

        window.location = '/viewplant';
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
            Navbar.Brand href = "#home" > AddSchedule < /Navbar.Brand>  <
            Nav.Link href = "#home" > Home < /Nav.Link>  <
            Nav.Link href = "/" > DashBoard < /Nav.Link>  <
            Nav className = "mr-auto" >

            <
            NavDropdown style = {
                { color: "blue" }
            }
            title = "ViewDetails"
            id = "collasible-nav-dropdown" >

            <
            NavDropdown.Item href = "/viewplant" > Plant < /NavDropdown.Item>  <
            NavDropdown.Item href = "/viewSchedule" > Schedule < /NavDropdown.Item>  <
            /NavDropdown>  <
            /Nav>  <
            Button style = {
                { backgroundColor: "#006600" }
            }
            variant = "outline-info" > Logout < /Button>


            <
            /Container>  <
            /Navbar>  <
            div className = "addplant" > < br / >

            <
            h1 className = "center2" >
            Update Plant Details < /h1><br/ > < br / >

            <
            div className = "form-container1" >



            <
            Form onSubmit = { this.onSubmit } >


            <
            Form.Group controlId = "plantId" >

            <
            Form.Label > plantId < /Form.Label>  <
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
            Form.Label > comman Name < /Form.Label>  <
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
            Form.Label > botName < /Form.Label>  <
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
            Form.Label > partused < /Form.Label>  <
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
            Form.Label > usage < /Form.Label>  <
            Form.Control type = "text"
            placeholder = "Enter the usage"
            onChange = { this.onChangeUasge }
            value = { this.state.usage }
            required / >
            <
            /Form.Group>


            <
            Form.Group controlId = "usage" >

            <
            Form.Label > availplants < /Form.Label>  <
            Form.Control input type = "number"
            min = "0"
            placeholder = "Enter the usage"
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
            Update Details <
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
                    height: "100px",
                }
            } >

            <
            div > &
            copy; 2020 copyright: SABH - PK.com <
            /div>  <
            /footer> <
            /div> <
            /div>  <
            /div>


        )
    }
}