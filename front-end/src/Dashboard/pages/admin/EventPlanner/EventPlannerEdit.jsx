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
           <TextInput source="name" validate={required()} />
           <TextInput source="email" validate={[required(), email()]} />
           <TextInput source="password" validate={[required(), email()]} />
           <TextInput source="phone" type='tel' validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};

export default EventPlannerEdit;