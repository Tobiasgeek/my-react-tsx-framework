import { Typography, Paper, TextField, Button, useTheme, makeStyles, createStyles, Theme } from '@material-ui/core';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name:''
    email:''
    phone:''
    pwd:''
    cfmpwd:''
}

const useStyles = makeStyles((theme:Theme)=>
    createStyles({
        root:{
            padding: '20px',
            margin: '20px'
        },
        textfield:{
            display:'block',
            width:'100%',
        },
        input:{ width:'100%' }
    })
)

export default function Register () {
    const classes = useStyles()

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

    return(
        <Paper className={classes.root}>
            <Typography variant="h4">Registration</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField className={classes.textfield} InputProps={{className:classes.input}} id="name" type="text" required={true} placeholder="Type your name" label="Name" {...register("name")} />
                <TextField className={classes.textfield} InputProps={{className:classes.input}} id="email" type="text" required={true} placeholder="Type your email" label="Email" {...register("email")} />
                <TextField className={classes.textfield} InputProps={{className:classes.input}} id="tel" type="number" required={true} placeholder="Type your phone" label="phone" {...register("phone")} />
                <TextField className={classes.textfield} InputProps={{className:classes.input}} id="pwd" type="password" required={true} placeholder="Type your password" label="Password" {...register("pwd")} />
                <TextField className={classes.textfield} InputProps={{className:classes.input}} id="cfmpwd" type="password" required={true} placeholder="Type your password again" label="Confirm Password" {...register("cfmpwd")} />
                <br />
                <Button color="primary" type="submit">Submit</Button>
            </form>
        </Paper>
    )
}
