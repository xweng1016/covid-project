import React from 'react';
import Map from './Map';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Grid, Row, Col } from 'react-bootstrap'
import { Link, Switch, Redirect, Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import './App.css';
import Announcement from './Announcement'


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect staticTop>
          <Navbar.Header>
          <Nav>
                <img src="./logo192.png" id="team_logo"/>
            </Nav>
            <LinkContainer to="/">
              <Navbar.Brand>Team: Plash Speed</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/">
                <NavItem>Home</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <NavItem><a href="https://www.toronto.ca/home/covid-19/covid-19-how-you-can-help/covid-19-donateto/">Donate to fight COVID</a></NavItem>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="">
                <NavItem>About</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="">
                <NavItem>Contact</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Grid>
          <Row>
            <Col md={8}>
              <div className="App">
                <header className="App-header">
                  <Map />
                  <h4>Darker Area means higher infection rate</h4>
                  <h4>Lock-down recommended at neighbourhoods with red outline</h4>
                </header>
              </div>
            </Col>
            <Col md={4}>
              <Announcement />
            </Col>
          </Row>
        </Grid>

      </div>
    )
  }
}
export default App;