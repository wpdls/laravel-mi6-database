import React from 'react';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status == 'success') {
                this.props.onLoginSuccess(data.data.token);
            }
        });
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <>
                <h1>Login form</h1>
                <form action="" method="post" onSubmit={ this.handleSubmit }>
                    Email:<br />
                    <input type="text" name="email" onChange={ this.handleEmailChange } /><br />
                    Password:<br />
                    <input type="password" name="password" onChange={ this.handlePasswordChange } /><br />
                    <input type="submit" value="Log in" />
                </form>
            </>
        )
    }
}