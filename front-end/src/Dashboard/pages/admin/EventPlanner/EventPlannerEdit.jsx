import React from 'react';
import { 
  Edit, 
  SimpleForm, 
  TextInput, 
  BooleanInput, 
  DateInput, 
  email,
  required
} from 'react-admin';

const EventPlannerEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" validate={required()} />
        <TextInput source="email" validate={[required(), email()]} />
        <TextInput source="phone" />
        <DateInput source="createdAt" disabled />
        <BooleanInput source="isActive" />
      </SimpleForm>
    </Edit>
  );
};

export default EventPlannerEdit;