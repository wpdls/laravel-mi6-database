import React from 'react';
import PersonList from './PersonList.jsx';
import LoginForm from './LoginForm.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            token: this.getToken(),
            logged_in: null
        }
    }

    getToken = () => {
        return window.localStorage.getItem('_token');
    }

    setToken = (token) => {
        window.localStorage.setItem('_token', token);
    }

    componentDidMount = () => {
        if (!this.state.token) {
            this.setState({
                logged_in: false
            })
            return;
        }

        fetch('/api/user', {
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token,
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                this.setState({
                    logged_in: true
                })
            } else {
                this.setState({
                    logged_in: false
                })
            }
        });
    }

    onLoginSuccess = (token) => {

        this.setToken(token);

        this.setState({
            logged_in: true,
            token: token
        })
    }

    render() {

        let content = 'Loading...';
        if (this.state.logged_in !== null) {
            if (this.state.logged_in) {
                content = <PersonList token={ this.state.token } />;
            } else {
                content = <LoginForm token={ this.state.token } onLoginSuccess={ this.onLoginSuccess } />;
            }
        }

        return (
            <main>
                <h1>MI6 application</h1>
                { content }
            </main>
        )
    }
}