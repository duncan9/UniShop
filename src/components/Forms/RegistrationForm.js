import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
//import PasswordField from '../Fields/PasswordField';
import BasicField from '../Fields/BasicField';
import BasicButton from '../Buttons/BasicButton';
import Stack from '@mui/material/Stack';

import { useState } from 'react';

export default function RegistrationForm({ onCancel, onSuccess }) {
    const [form, setForm] = useState({});

    const onHandleSuccess = () => {
        onSuccess(form);
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    width: 256
                },
            }}
        >
            <Paper>
                <Stack spacing={2} direction="column" m={2}>
                    <BasicField label='Shop Name' onChange={(name) => setForm({ ...form, name })} />
                </Stack>
                <Stack spacing={2} direction="row" mx={2} mt={4} mb={2} justifyContent='space-between' >
                    <BasicButton variant='outlined' label='Dismiss' onClick={onCancel} />
                    <BasicButton variant='contained' label='Apply' onClick={onHandleSuccess} />
                </Stack>
            </Paper>
        </Box>
    );
}
