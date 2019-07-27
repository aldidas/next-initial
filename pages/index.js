import { Fragment } from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import Head from '../components/Head'
import Header from '../components/Header'
import '../styles/main.scss'

const Home = () => {
  return (
    <Fragment>
      <Head title="The Epic Title" />
      <Header />
      <Container>
        <Row>
          <Col>One</Col>
          <Col>Two</Col>
          <Col>Three</Col>
        </Row>
        the quick brown fox jump over the lazy dog
      </Container>
    </Fragment>
  )
} 

export default Home
