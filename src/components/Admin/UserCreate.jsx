
import { Create, SimpleForm, TextInput } from 'react-admin'

export const UserCreate = (props) => {
    return(
        <Create title="Create a user" {...props} >
            <SimpleForm>
                <TextInput source='userId' />
                <TextInput source='name.firstName' />
                <TextInput source='name.lastName' />
                <TextInput source='email' />
                <TextInput source='phone' />
                <TextInput source='authorization' />
            </SimpleForm>
        </Create>
    )
}