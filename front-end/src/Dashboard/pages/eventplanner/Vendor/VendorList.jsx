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

const VendorListOne = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="type" />
        <EmailField source="email" />
        <TextField source="phone" />
      </Datagrid>
    </List>
  );
};

export default VendorListOne 
  ;