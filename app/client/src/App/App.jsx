import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer';
import Landing from '../pages/Landing.jsx';
import {Container} from 'react-bootstrap';

const App = () => {
    return (
        <Container fluid>
            <Header/>
            <Landing/>
            <Footer/>
        </Container>
    )
}

export default App