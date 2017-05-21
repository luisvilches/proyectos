import React,{Component} from 'react'
import {Button} from 'react-bootstrap'



class Post extends Component {
    constructor(props) {
        super(props);

    }
    
    render(){
        return (
            <div className="alt">
                <h2>Nuevo post</h2>
                <textarea className="form-control" rows="3"></textarea>
                <input type="file" className="form-control"/>
                <br/>
                <Button className="pull-right">Postear</Button>
            </div>
            );
    }
}

export default Post;