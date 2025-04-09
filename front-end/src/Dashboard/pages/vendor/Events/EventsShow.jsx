import React from 'react';
import { 
  Show, 
  SimpleShowLayout, 
  TextField, 
  DateField
} from 'react-admin';

const EventsShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="location" />
        <DateField source="date" showTime />
        <TextField source="status" />
        <TextField source="notes" />
      </SimpleShowLayout>
    </Show>
  );
};

export default EventsShow;