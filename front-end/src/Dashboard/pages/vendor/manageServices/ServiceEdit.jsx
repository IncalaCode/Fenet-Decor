import React, { useState } from 'react';
import { 
    Edit, 
    SimpleForm, 
    TextInput,
    BooleanInput, 
    required,
} from 'react-admin';
import { Box, Typography, Divider } from '@mui/material';

const PackageSection = ({ packageType, enabled, onToggle }) => {
    return (
        <Box sx={{ mb: 4, p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    {packageType} Package
                </Typography>
                <BooleanInput
                    label="Enable Package"
                    source={`packages.${packageType.toLowerCase()}.enabled`}
                    defaultValue={enabled}
                    onChange={onToggle}
                />
            </Box>
            
            {enabled && (
                <>
                    <TextInput 
                        source={`packages.${packageType.toLowerCase()}.price`}
                        type='number' 
                        label="Price"  
                        validate={required()} 
                        fullWidth
                    />
                    <TextInput 
                        source={`packages.${packageType.toLowerCase()}.features`}
                        label="Features" 
                        multiline
                        rows={3}
                        helperText="List the features included in this package"
                        fullWidth
                    />
                    <TextInput 
                        source={`packages.${packageType.toLowerCase()}.supportHours`}
                        label="Support Hours"
                        helperText="Specify support availability (e.g., 24/7, Business hours)"
                        fullWidth
                    />
                    <TextInput 
                        source={`packages.${packageType.toLowerCase()}.deliveryTime`}
                        label="Delivery Time"
                        helperText="Expected delivery time for this package"
                        fullWidth
                    />
                </>
            )}
        </Box>
    );
};

const ServiceEdit = () => {
    const [enabledPackages, setEnabledPackages] = useState({
        silver: true,
        gold: true,
        platinum: true
    });

    const handlePackageToggle = (packageType, enabled) => {
        setEnabledPackages(prev => ({
            ...prev,
            [packageType]: enabled
        }));
    };

    return (
        <Edit>
            <SimpleForm>
                <TextInput 
                    source="ServiceName" 
                    label="Service Name" 
                    validate={required()} 
                    fullWidth
                />
                <TextInput 
                    source="description" 
                    label="Service Description" 
                    validate={required()} 
                    multiline
                    rows={3}
                    fullWidth
                />
                <TextInput 
                    source="phone" 
                    type='tel' 
                    validate={required()} 
                    fullWidth
                />

                <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
                    Package Configuration
                </Typography>
                <Divider sx={{ mb: 3 }} />

                <PackageSection 
                    packageType="Silver"
                    enabled={enabledPackages.silver}
                    onToggle={(enabled) => handlePackageToggle('silver', enabled)}
                />
                <PackageSection 
                    packageType="Gold"
                    enabled={enabledPackages.gold}
                    onToggle={(enabled) => handlePackageToggle('gold', enabled)}
                />
                <PackageSection 
                    packageType="Platinum"
                    enabled={enabledPackages.platinum}
                    onToggle={(enabled) => handlePackageToggle('platinum', enabled)}
                />
            </SimpleForm>
        </Edit>
    );
};

export default ServiceEdit;