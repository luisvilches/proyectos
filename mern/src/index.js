import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login,{Test} from './components/login'
import Users from './components/user'

class Container extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      login: false
    }
  }


  componentWillMount(){

    if(localStorage.getItem("status") === false || localStorage.getItem("status") === null){
            this.setState({
                login:false
            })
        } else {
            this.setState({
                login:true
            })
        }
  }
  render(){
    return(
      <div>
        {this.state.login ? <Users /> : <Login reload={this.componentWillMount.bind(this)} />}
      </div>
    )
  }
}

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);
