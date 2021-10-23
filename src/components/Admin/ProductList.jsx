import { SingleFieldList, Datagrid, ArrayField, List, NumberField, ChipField, TextField, EditButton, DeleteButton, ImageField } from "ra-ui-materialui";


export const ProductList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <ReferenceField source="_id" reference="s"><TextField source="id" /></ReferenceField> */}
            <TextField source="productId" />
            <TextField source="prodName" />
            <NumberField source="rank" />
            <TextField source="theme" />
            <ImageField source="imageName" title="image here" />
            <TextField source="imageName" />
            <ArrayField source="sizes"><SingleFieldList><ChipField source="size" /></SingleFieldList></ArrayField>
                <ArrayField source="sizes">
                    <SingleFieldList>
                        <ChipField source="price" />
                    </SingleFieldList>
                </ArrayField>
            <TextField source="id" />
            <EditButton basePath='/products' />
            <DeleteButton basePath='/products' />
        </Datagrid>
    </List>
);