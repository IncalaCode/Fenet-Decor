import React from 'react';
import { 
  List,
  Datagrid,
  TextField
} from 'react-admin';


const payemntListOne = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="payement" />
        <TextField source="method" />
        <TextField source="amount" />
      </Datagrid>
    </List>
  );
};

export default payemntListOne;