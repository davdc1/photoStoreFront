import { Datagrid, DateField, DeleteButton, EditButton, List, TextField, ReferenceField } from "ra-ui-materialui";

export const CommentList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="commentId" />
            <ReferenceField source="postId" reference="posts">
                <TextField source="title" />
            </ReferenceField>
            <TextField source="postId" />
            <TextField source="userId" />
            <TextField source="title" />
            <TextField source="content" />
            <DateField source="date" />
            <TextField source="id" />
            <EditButton basePath='/comments' />
            <DeleteButton basePath='/comments' />
        </Datagrid>
    </List>
);


