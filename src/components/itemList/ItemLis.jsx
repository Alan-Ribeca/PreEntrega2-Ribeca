/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Item } from "../item/Item"

export const ItemList = ({ products }) => {
    return (
        <>
            {products.map( prod => <Item key={prod.id} product={prod} />)}
        </>
    )
}