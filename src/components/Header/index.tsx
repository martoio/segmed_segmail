import * as React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

export interface HeaderProps {
    onClickHome: () => void;
    goToNextRecord: () => void;
    goToPreviousRecord: () => void;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={props.onClickHome}>Home</Nav.Link>
                    <Nav.Link onClick={props.goToPreviousRecord}>&lt;&lt; Back</Nav.Link>
                    <Nav.Link onClick={props.goToNextRecord}>Next &gt;&gt;</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};