import { useRecordContext } from 'react-admin';

export const MyImageField = ({ source }) => {
    const record = useRecordContext();
    return (
        <img
         src={`${process.env.REACT_APP_API_URL}/images/smallProdImgs/${record && record[source]}`}
         alt="product"
         style={{maxHeight: "100px"}}
         />)
};