

import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

export const TicketCreate = (props) => {
    return(
        <Create title="Create a ticket" {...props} >
            <SimpleForm>
                <TextInput source='id' />
                <TextInput source='name' />
                <TextInput source='email' />
                <TextInput source='phone' />
                <DateInput source='date' />
                <TextInput source='title' />
                <TextInput source='content' />
                <TextInput source='comment' />
                <TextInput source='status' />
            </SimpleForm>
        </Create>
    )
}