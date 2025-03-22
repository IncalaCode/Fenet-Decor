import React from 'react';
import { 
  Show, 
  SimpleShowLayout, 
  TextField, 
  EmailField, 
  DateField, 
  BooleanField
} from 'react-admin';

const EventPlannerShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="phone" />
        <DateField source="createdAt" />
        <BooleanField source="isActive" />
      </SimpleShowLayout>
    </Show>
  );
};

export default EventPlannerShow;