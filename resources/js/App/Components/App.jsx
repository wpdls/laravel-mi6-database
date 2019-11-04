import React from 'react';
import PersonList from './PersonList.jsx';
import LoginForm from './LoginForm.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            token: null,
            logged_in: null
        }
    }

    componentDidMount = () => {

    }

    render() {

        let content = 'Loading...';
        if (this.state.logged_in !== null) {
            if (this.state.logged_in) {
                content = <PersonList />;
            } else {
                content = <LoginForm />;
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