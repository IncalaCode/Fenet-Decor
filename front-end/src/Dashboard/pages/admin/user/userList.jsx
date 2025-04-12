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

const userList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="phone" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default userList;