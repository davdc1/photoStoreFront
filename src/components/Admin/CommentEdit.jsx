import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

export const CommentEdit = (props) => {
    return(
        <Edit title="Edit comment" {...props} >
            <SimpleForm>
                <TextInput disabled source='commentId' />
                <TextInput disabled source='postId' />
                <TextInput source='userId' />
                <DateInput source='date' />
                <TextInput source='title' />
                <TextInput source='content' />
            </SimpleForm>
        </Edit>
    )
}