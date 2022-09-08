import React from 'react';
import { toast } from 'react-toastify';

const DeletModal = ({ deleteProduct, refetch, setDeleteProduct }) => {
    const { name, _id } = deleteProduct
    const handleDelete = id => {
        fetch(`https://toolzone.onrender.com/tools/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Tool is Deleted')
                    setDeleteProduct(null)
                    refetch()
                }
            })
    }
    return (
        <div>




            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-primary">Are you sure ,you want to delet {name} of {_id}product? </h3>
                   
                    <div className="modal-action">
                        <button onClick={() => handleDelete(_id)} className='btn btn-xs btn-primary'>Delete</button>
                        <label for="delete-modal" className="btn btn-xs btn-primary">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletModal;