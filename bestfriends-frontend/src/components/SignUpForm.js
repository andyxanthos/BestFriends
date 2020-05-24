import React from 'react';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'

import "./Welcome.scss";

class SignUpForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    render() {
        return (
            <Card>
                <CardContent className="sign-up-form-card">
                    <h4>Get Started</h4>
                    <form className="sign-up-form" method="POST" onSubmit={this.handleSubmit}>
                        <input type="email" name="email"></input>
                        <Button variant="contained" color="primary">Sign Up</Button>
                    </form>
                </CardContent>
            </Card>
        );
    }
};

export default SignUpForm;