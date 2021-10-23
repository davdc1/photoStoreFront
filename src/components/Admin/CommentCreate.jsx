import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

export const CommentCreate = (props) => {
    return(
        <Create title="Create a comment" {...props} >
            <SimpleForm>
                <TextInput source='userId' />
                <TextInput source='postId' />
                <DateInput source='date' />
                <TextInput source='title' />
                <TextInput source='content' />
                <TextInput source='commentId' />
            </SimpleForm>
        </Create>
    )
}