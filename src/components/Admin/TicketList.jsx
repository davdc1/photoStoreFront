import { Datagrid, DateField, DeleteButton, EditButton, List, TextField } from "ra-ui-materialui";

export const TicketList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="phone" />
            <DateField source="date" />
            <TextField source="title" />
            <TextField source="content" />
            <TextField source="comment" />
            <TextField source="status" />            
            <EditButton basePath='/tickets' />
            <DeleteButton basePath='/tickets' />
        </Datagrid>
    </List>
);


