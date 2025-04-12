import React from 'react';
import { 
  List, 
  Datagrid, 
  TextField, 
  EmailField, 
  DateField, 
  BooleanField,
  EditButton,
  ShowButton
} from 'react-admin';

const VendorList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="type" />
        <EmailField source="email" />
        <TextField source="phone" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default VendorList;