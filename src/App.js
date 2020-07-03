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
              <br />
              <div className="sidebar">
                <h4>Lastest News</h4>
                <ul>
                    <li><a href="https://bc.ctvnews.ca/3-deaths-from-covid-19-in-b-c-since-tuesday-all-community-outbreaks-declared-over-1.5008204">3 deaths from COVID-19 in B.C. since Tuesday, all community outbreaks declared over</a></li>
                    <li><a href="https://winnipeg.ctvnews.ca/no-new-covid-19-cases-2-more-recoveries-reported-in-manitoba-on-thursday-1.5008479">No new COVID-19 cases, 2 more recoveries reported in Manitoba on Thursday</a></li>
                </ul>
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