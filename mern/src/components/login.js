import React from 'react';

export class Login extends React.Component {

    Auth(){

        let mail = this.refs.mail.value;
        let pass = this.refs.pass.value;

        const formData = new FormData()
        formData.append('mail',mail)
        formData.append('pass',pass)

        fetch('http://localhost:3000/login', {
        method: 'POST',
        body: formData
        })
        .then(r => r.json())
        .then(data => {
            if(data.success === false){
                alert(data.message)
            } else{
                
                alert(data.message)
                localStorage.setItem('token',data.token)
                localStorage.setItem('user',data.user.name)
                localStorage.setItem('status',data.success)

                this.props.reload();
            }
        })

    }

    render(){
        return(
            <div>
                <h3>Login</h3>
                <input ref="mail" type="text" placeholder="ingresar correo"/>
                <br/>
                <input ref="pass" type="text" placeholder="ingrese password"/>
                <br/>
                <button onClick={this.Auth.bind(this)}>Loguear</button>
            </div>
        )
    }
}

 
export default Login;