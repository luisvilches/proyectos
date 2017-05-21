import React,{Component} from 'react'
import {Button} from 'react-bootstrap'


class Muro extends Component {
    constructor(props) {
        super(props);

    }
    
    render(){
        return (
            <div className="card">
                <img src="img/meme.jpg" alt="" className="img-responsive meme"/>
                <div className="cardTitle">
                    <p>mi nuevo post</p>
                    <br/>
                    <textarea className="form-control" rows="1" placeholder="Nuevo comentario"></textarea>
                    <br/>
                    <Button className="pull-right">Postear</Button>
                    <br/>
                    <br/>
                    <div>

                    </div>
                </div>
            </div>
            );
    }
}

export default Muro;