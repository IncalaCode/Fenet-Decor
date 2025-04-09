import React from 'react';
import { 
  Show, 
  SimpleShowLayout, 
  TextField, 
  EmailField, 
  DateField, 
  BooleanField
} from 'react-admin';

const VendorShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="type" />
        <EmailField source="email" />
        <TextField source="phone" />
        <DateField source="createdAt" />
        <BooleanField source="isActive" />
      </SimpleShowLayout>
    </Show>
  );
};

export default VendorShow;