

import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

export const PostCreate = (props) => {
    return(
        <Create title="Create a post" {...props} >
            <SimpleForm>
                <TextInput source='userId' />
                <TextInput source='postId' />
                <DateInput source='date' />
                <TextInput source='title' />
                <TextInput source='content' />
            </SimpleForm>
        </Create>
    )
}