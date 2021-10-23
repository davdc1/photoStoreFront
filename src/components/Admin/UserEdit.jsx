
import { Edit, SimpleForm, TextInput } from 'react-admin'

export const UserEdit = (props) => {
    return(
        <Edit title="Edit  user" {...props} >
            <SimpleForm>
                <TextInput disabled source='Id' />
                <TextInput disabled source='userId' />
                <TextInput source='name.firstName' />
                <TextInput source='name.lastName' />
                <TextInput source='email' />
                <TextInput source='phone' />
                <TextInput source='authorization' />
            </SimpleForm>
        </Edit>
    )
}