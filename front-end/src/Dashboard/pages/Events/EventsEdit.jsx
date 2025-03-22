import React from 'react';
import { 
  Edit, 
  SimpleForm, 
  TextInput, 
  DateTimeInput, 
  SelectInput,
  required
} from 'react-admin';

const EventsEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" validate={required()} />
        <TextInput source="location" validate={required()} />
        <DateTimeInput source="date" validate={required()} />
        <SelectInput source="status" choices={[
          { id: 'scheduled', name: 'Scheduled' },
          { id: 'in-progress', name: 'In Progress' },
          { id: 'completed', name: 'Completed' },
          { id: 'cancelled', name: 'Cancelled' },
        ]} validate={required()} />
        <TextInput source="notes" multiline fullWidth />
      </SimpleForm>
    </Edit>
  );
};

export default EventsEdit;