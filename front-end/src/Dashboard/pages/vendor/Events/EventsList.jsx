import React from 'react';
import { 
  List, 
  Datagrid, 
  TextField, 
  DateField, 
  EditButton,
  ShowButton
} from 'react-admin';

const EventsList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="location" />
        <DateField source="date" showTime />
        <TextField source="status" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default EventsList;