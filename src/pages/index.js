import React from "react"

import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from '../components/Container';
import MainContainer from '../components/MainContainer';
import Header from '../components/Header';
import Leadspace from '../components/Leadspace';
import Programs from '../components/Programs';
import Teams from '../components/Teams';
import TeamCards from '../components/TeamCards';
import Partnerships from '../components/Partnerships';
import BetterFuture from '../components/BetterFuture';
import Founders from '../components/Founders';
import Hiring from '../components/Hiring';
import News from '../components/News';
import Footer from '../components/Footer';

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
