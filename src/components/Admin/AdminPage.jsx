import { Resource } from "ra-core";
import { Admin } from "react-admin";
import simpleRestProvider from 'ra-data-simple-rest'
import { UserList } from "./UserList";
import { ProductList } from "./ProductList";
import { PostList } from "./PostList";
import { CommentList } from "./CommentList";
import { UserCreate } from "./UserCreate";
import { ProductCreate } from "./ProductCreate";
import { PostCreate } from "./PostCreate";
import { CommentCreate } from "./CommentCreate";
import { UserEdit } from "./UserEdit";
import { ProductEdit } from "./ProductEdit";
import { PostEdit } from "./PostEdit";
import { CommentEdit } from "./CommentEdit";
import { TicketList } from "./TicketList";
import { Charts } from "./Charts";
import { TicketCreate } from "./TicketCreate";
import { TicketEdit } from "./TicketEdit";
require('dotenv').config()

export const AdminPage = () => {
    return(
        <>
         <div className="h-24"></div>
         <Admin dataProvider={simpleRestProvider(process.env.REACT_APP_API_URL)}>
            <Resource  name="users" list={UserList} create={UserCreate} edit={UserEdit} />
            <Resource name="products" list={ProductList} create={ProductCreate} edit={ProductEdit} />
            <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} />
            <Resource name="comments" list={CommentList} create={CommentCreate} edit={CommentEdit} />
            <Resource name="tickets" list={TicketList} create={TicketCreate} edit={TicketEdit} />
            <Resource name="charts" list={Charts} />
         </Admin>
        </>
    )
}