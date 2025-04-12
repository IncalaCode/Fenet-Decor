import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField,
    ArrayField,
    SingleFieldList,
    ChipField,
    EditButton,
    ShowButton,
    FunctionField
} from 'react-admin';
import { Chip, Stack } from '@mui/material';

const PackageStatusField = ({ record }) => {
    if (!record.packages) return null;

    return (
        <Stack direction="row" spacing={1}>
            {Object.entries(record.packages).map(([type, package_]) => (
                package_.enabled && (
                    <Chip
                        key={type}
                        label={`${type.charAt(0).toUpperCase() + type.slice(1)} - $${package_.price}`}
                        color={
                            type === 'platinum' ? 'primary' :
                            type === 'gold' ? 'warning' :
                            'default'
                        }
                        size="small"
                    />
                )
            ))}
        </Stack>
    );
};

const ServiceList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="ServiceName" label="Service Name" />
                <TextField source="description" label="Description" />
                <TextField source="phone" />
                <FunctionField
                    label="Available Packages"
                    render={record => <PackageStatusField record={record} />}
                />
                <EditButton />
                <ShowButton />
            </Datagrid>
        </List>
    );
};

export default ServiceList;