import React from 'react';
import { 
  Create, 
  SimpleForm, 
  TextInput, 
  DateTimeInput, 
  SelectInput,
  required
} from 'react-admin';

const EventsCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" validate={required()} />
        <TextInput source="location" validate={required()} />
        <DateTimeInput source="date" validate={required()} />
        <SelectInput source="status" choices={[
          { id: 'scheduled', name: 'Scheduled' },
          { id: 'in-progress', name: 'In Progress' },
          { id: 'completed', name: 'Completed' },
          { id: 'cancelled', name: 'Cancelled' },
        ]} defaultValue="scheduled" validate={required()} />
        <TextInput source="notes" multiline fullWidth />
      </SimpleForm>
    </Create>
  );
};

export default EventsCreate;