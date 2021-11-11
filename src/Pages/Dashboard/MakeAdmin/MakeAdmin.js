import { TextField, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState("")
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleAdminSubmit} >
                <Typography sx={{ fontSize: 20, mt: 5 }} variant="h4">Make Admin</Typography>
                <Box
                    sx={{
                        '& > :not(style)': { m: 1, width: '50%' },
                    }}
                    noValidate
                    autoComplete="off"

                >
                    <TextField
                        id="outlined-basic"
                        label="Email : "
                        variant="outlined"
                        name="email"
                        type="email"
                        onBlur={handleOnBlur}
                        sx={{ width: "75%" }}
                    />



                    <Button variant="contained" type="submit">ADD</Button><br />




                </Box>
            </form>
        </div>
    );
};

export default MakeAdmin;