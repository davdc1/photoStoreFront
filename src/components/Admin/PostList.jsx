import { Datagrid, DateField, DeleteButton, EditButton, List, TextField } from "ra-ui-materialui";


export const PostList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="postId" />
            <TextField source="userId" />
            <TextField source="content" />
            <TextField source="title" />
            <DateField source="date" />
            <TextField source="id" />
            <EditButton basePath='/posts' />
            <DeleteButton basePath='/posts' />
        </Datagrid>
    </List>
);