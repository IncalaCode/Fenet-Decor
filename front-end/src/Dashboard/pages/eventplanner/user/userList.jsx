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

const userListOne = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="phone" />
      </Datagrid>
    </List>
  );
};

export default  userListOne
;