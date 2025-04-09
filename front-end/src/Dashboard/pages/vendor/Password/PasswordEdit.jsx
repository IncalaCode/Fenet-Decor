import React, { useState } from 'react';
import { 
  SimpleForm, 
  TextInput, 
  SaveButton,
  useNotify,
  useRedirect,
  required,
  Toolbar,
  useGetIdentity,
  Title
} from 'react-admin';
import { Card, CardContent } from '@mui/material';

const PasswordEditToolbar = props => {
  return (
    <Toolbar {...props}>
      <SaveButton label="Update Password" />
    </Toolbar>
  );
};

const validatePasswordMatch = (value, allValues) => {
  if (value && value !== allValues.newPassword) {
    return 'Passwords do not match';
  }
  return undefined;
};

const validatePasswordStrength = (value) => {
  if (!value) return undefined;

  const hasMinLength = value.length >= 8;
  const hasNumber = /\d/.test(value);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
  
  if (!hasMinLength) return 'Password must be at least 8 characters';
  if (!hasNumber) return 'Password must contain at least one number';
  if (!hasSpecial) return 'Password must contain at least one special character';
  
  return undefined;
};

const PasswordEdit = () => {
  const notify = useNotify();
  const redirect = useRedirect();
  const { identity, isLoading } = useGetIdentity();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      console.log('Password update values:', values);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      notify('Password updated successfully', { type: 'success' });
      redirect('/'); // Redirect to dashboard or another appropriate page
    } catch (error) {
      notify('Error updating password: ' + (error.message || 'Unknown error'), { type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const initialValues = {
    userId: identity?.id || '',
    lastChanged: new Date().toISOString().split('T')[0],
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  return (
    <div>
      <Title title="Change Password" />
      <Card>
        <CardContent>
          <SimpleForm 
            toolbar={<PasswordEditToolbar />}
            onSubmit={handleSubmit}
            initialValues={initialValues}
            warnWhenUnsavedChanges
          >
            <TextInput source="userId" disabled label="User ID" />
            <TextInput 
              source="currentPassword" 
              type="password" 
              label="Current Password" 
              validate={required()} 
              autoComplete="current-password"
            />
            <TextInput 
              source="newPassword" 
              type="password" 
              label="New Password" 
              validate={[required(), validatePasswordStrength]} 
              autoComplete="new-password"
              helperText="Password must be at least 8 characters and contain numbers and special characters"
            />
            <TextInput 
              source="confirmPassword" 
              type="password" 
              label="Confirm New Password" 
              validate={[required(), validatePasswordMatch]}
              autoComplete="new-password"
            />
          </SimpleForm>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordEdit;
