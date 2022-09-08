import React from 'react';

const ManageProductRow = ({ product, index, refetch, setDeleteProduct }) => {
    const { _id, picture, name, availableQuantity, minimumOrderQuantity, price } = product
    return (
<tr>
            <th>{index + 1}</th>
            <th><img style={{ height: '50px' }} src={picture} alt="" /></th>
            <th>{name}</th>
            <th>{price}</th>
            <th>{availableQuantity}</th>
            <th>{minimumOrderQuantity}</th>
            <th>
                <label onClick={() => setDeleteProduct(product)} for="delete-modal" className="btn btn-xs btn-primary font-bold">Delete</label>

            </th>
        </tr>
    );
};

export default ManageProductRow;