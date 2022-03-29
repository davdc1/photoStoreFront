
import { Create, SimpleForm, SimpleFormIterator, TextInput, ArrayInput } from 'react-admin'

export const ProductCreate = (props) => {
    return(
        <Create title="Create a product" {...props} >
            <SimpleForm>
                <TextInput source='productId' />
                <TextInput source='prodName' />
                <TextInput source='rank' />
                <TextInput source='theme' />
                <TextInput source='imageName' />
                <ArrayInput  source="sizes">
                    <SimpleFormIterator>
                        <TextInput source="size" />
                        <TextInput source="price" />
                        <TextInput source="idSize" />
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Create>
    )
}
