import React from 'react';
import { 
  Create, 
  SimpleForm, 
  TextInput, 
  BooleanInput,
  SelectInput,
  email,
  required
} from 'react-admin';

const userCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
        <TextInput source="email" validate={[required(), email()]} />
        <TextInput source="phone" />
      </SimpleForm>
    </Create>
  );
};

export default userCreate;