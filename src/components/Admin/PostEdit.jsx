

import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

export const PostEdit = (props) => {
    return(
        <Edit title="Edit post" {...props} >
            <SimpleForm>
                <TextInput disabled source='postId' />
                <TextInput source='userId' />
                <DateInput source='date' />
                <TextInput source='title' />
                <TextInput source='content' />
            </SimpleForm>
        </Edit>
    )
}