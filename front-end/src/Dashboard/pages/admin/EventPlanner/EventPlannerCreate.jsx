import React from 'react';
import { 
  Create, 
  SimpleForm, 
  TextInput, 
  BooleanInput, 
  email,
  required
} from 'react-admin';

const EventPlannerCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
        <TextInput source="email" validate={[required(), email()]} />
        <TextInput source="password" validate={[required(), email()]} />
        <TextInput source="phone" type='tel' validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};

export default EventPlannerCreate;