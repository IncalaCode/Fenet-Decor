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

const EventPlannerList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="phone" />
        <DateField source="createdAt" />
        <BooleanField source="isActive" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default EventPlannerList;
