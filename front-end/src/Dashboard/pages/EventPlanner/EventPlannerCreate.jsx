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
        <TextInput source="phone" />
        <BooleanInput source="isActive" defaultValue={true} />
      </SimpleForm>
    </Create>
  );
};

export default EventPlannerCreate;