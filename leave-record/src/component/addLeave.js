import React from 'react';
import { Link } from 'react-router-dom'

function AddButton() {
    return (
        <div>
            <Link to="/addingLeave">
                <button className='btn btn-success'> แจ้งการลา</button>
            </Link>
        </div>
    )
}

export default AddButton;