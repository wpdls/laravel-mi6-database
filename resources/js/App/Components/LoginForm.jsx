import React from 'react';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Login form</h1>
                <form action="" method="post">
                    Email:<br />
                    <input type="text" name="email" /><br />
                    Password:<br />
                    <input type="password" name="password" /><br />
                    <input type="submit" value="Log in" />
                </form>
            </>
        )
    }
}