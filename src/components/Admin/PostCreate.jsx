

import { Create, SimpleForm, TextInput, DateInput, useNotify, useRefresh, useRedirect } from 'react-admin'

export const PostCreate = (props) => {
const notify = useNotify();
const refresh = useRefresh();
const redirect = useRedirect();

let onFailure = (errors) => {
    notify(`is that an error?`)
    console.log('errors::::', errors);
}

let onSuccess = (res) => {
    console.log('success!');
    notify('success!')
    //redirect('/posts');
    //refresh();
}
    return(
        <Create onFailure={onFailure} onSuccess={onSuccess} title="Create a post" {...props} >
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

