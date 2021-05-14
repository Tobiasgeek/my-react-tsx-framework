import { Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';
import React from 'react';

class Register extends React.PureComponent {
    render(){
        return(
            <div>
                <Card>
                    <form>
                        <Typography variant="h3">Name</Typography>
                        <Typography variant="h3">Email</Typography>
                        <Typography variant="h3">Password</Typography>
                        Input
                        <Typography variant="h3">Confirm Password</Typography>
                    </form>
                </Card>
            </div>
        );
    }
}

export default Register;