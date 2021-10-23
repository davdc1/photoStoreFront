//import { TextField } from "@material-ui/core";
import { Datagrid, DeleteButton, EditButton, EmailField, List, ReferenceField, TextField } from "ra-ui-materialui";


export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name.firstName" />
            {/* <ReferenceField source="userId" reference="users"><TextField source="id" /></ReferenceField> */}
            <TextField source="name.lastName" />
            <TextField source="userId" />
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="authorization" />
            {/* <TextField source="addresses" />
            <TextField source="authorization" />
            <TextField source="cart" />
            <TextField source="orders" /> */}
            <TextField source="id" />
            <EditButton basePath='/users' />
            <DeleteButton basePath='/users' />
        </Datagrid>
    </List>
);