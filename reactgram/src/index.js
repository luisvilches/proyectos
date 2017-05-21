import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Post from './components/Post';
import Muro from './components/Muro';
import {Grid,Row,Col} from 'react-bootstrap'
import './index.css';

class Memegram extends React.Component{
  render(){
    return(
      <Grid className="contenedor">
        <Row>
            <Nav />
            <Post />
            <br/>
            <br/>
            <br/>
            <Muro />
        </Row>
      </Grid>
    )
  }
} 

ReactDOM.render(
  <Memegram />,
  document.getElementById('root')
);
