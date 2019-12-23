import React from "react"

import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import News from '../components/News';
import Teams from '../components/Teams';
import Header from '../components/Header';
import Hiring from '../components/Hiring';
import Footer from '../components/Footer';
import Programs from '../components/Programs';
import Founders from '../components/Founders';
import Container from '../components/Container';
import Leadspace from '../components/Leadspace';
import TeamCards from '../components/TeamCards';
import Partnerships from '../components/Partnerships';
import BetterFuture from '../components/BetterFuture';
import MainContainer from '../components/MainContainer';

export default () => (
    <>
    <MainContainer>
        <Container>
            <Header />
            <Leadspace />
            <Programs />
            <Teams />
            <TeamCards />
            <Partnerships />
            <BetterFuture />
            <Founders />
            <Hiring />
            <News />
            <Footer />
        </Container>
    </MainContainer>
    </>
)
