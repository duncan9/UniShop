import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
// import Typography from '@mui/material/Typography';
import RegistrationForm from '../Forms/RegistrationForm';
import axios from 'axios';
import { API_URL } from 'const/client';

function SimpleDialog(props) {
    const { onClose, open, onSuccess } = props;

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>Enter shop name</DialogTitle>
            <RegistrationForm onCancel={onClose} onSuccess={onSuccess} />
        </Dialog>
    );
}
export default function BasicDialog({onSuccess}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };
    const handleSuccess = (obj) => {
        axios.post(API_URL + 'shops', obj)
        .then(function (response) {
            onSuccess();
        })
        handleClose();
    }

    console.log("here");

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} size='large'>
                create a shop
            </Button>
            <SimpleDialog
                onSuccess={handleSuccess}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}
