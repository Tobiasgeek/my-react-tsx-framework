import { Typography, Paper, TextField, Button } from '@material-ui/core';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name:''
    email:''
    pwd:''
    cfmpwd:''
}

export default function Register () {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

    return(
        <Paper>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h5">Name</Typography>
                <TextField id="name" type="text" required={true} placeholder="Type your name" label="Name" {...register("name")} />
                <Typography variant="h5">Email</Typography>
                <TextField id="email" type="text" required={true} placeholder="Type your email" label="Email" {...register("email")} />
                <Typography variant="h5">Password</Typography>
                <TextField id="pwd" type="passsword" required={true} placeholder="Type your password" label="Password" {...register("pwd")} />
                <Typography variant="h5">Confirm Password</Typography>
                <TextField id="cfmpwd" type="passsword" required={true} placeholder="Type your password again" label="Confirm Password" {...register("cfmpwd")} />
                <Button type="submit">Submit</Button>
            </form>
        </Paper>
    )
}
