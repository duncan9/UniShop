import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import BasicDialog from 'components/Dialogs/BasicDialog';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';

import { useState, useEffect } from 'react';
import { API_URL } from 'const/client';
import BasicField from 'components/Fields/BasicField';
import Grid from '@mui/material/Grid';
import { getShops, getShopsMock } from 'api/shops';

const columns = [
    {
        name: 'ID',
        field: 'id'
    },
    {
        name: 'Shop Name',
        field: 'name'
    }
];

export default function BasicTable() {
    const [shops, setShops] = useState([]);

    useEffect(() => fetchShops(), []);

    const fetchShops = () => {
        //axios.get(API_URL + 'shops')
        getShops()
            .then(function (response) {
                console.log(response);
                setShops(response.data);
            })
            .catch(() => {setShops(getShopsMock())})
    }

    return (
        <Box
            sx={{mt:'16px'}}
            >
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={8}>
                        <BasicField
                            label={'Search'}
                            size = 'small'
                            inputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <BasicDialog onSuccess={fetchShops} />
                </Grid>
                <Grid
                    item
                    xs={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    {columns.map(el => <TableCell>{el.name}</TableCell>)}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {shops.map((el) => (
                                    <TableRow
                                        key={el.id}
                                    >
                                        {columns.map(column => <TableCell>{el[column.field]}</TableCell>)}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Box>
    );
}