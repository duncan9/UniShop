import * as React from 'react';
import BasicTable from 'components/Tables/BasicTable';
import { Stack } from '@mui/system';
import 'App.css';

export default function App() {
  return (
            <Stack justifyContent={'center'} alignItems='center' height={1}>
              <BasicTable />
            </Stack>
  );
}
