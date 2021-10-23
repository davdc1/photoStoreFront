import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

export const TicketEdit = (props) => {
    return(
        <Edit title="Edit ticket" {...props} >
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput disabled source='name' />
                <TextInput source='email' />
                <TextInput source='phone' />
                <DateInput source='date' />
                <TextInput source='title' />
                <TextInput source='content' />
                <TextInput source='comment' />
                <TextInput source='status' />
            </SimpleForm>
        </Edit>
    )
}