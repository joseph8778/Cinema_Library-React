import React from 'react';
import { useParams } from 'react-router-dom';

const Selected = () => {
    const moveiId = useParams()
    return (
        <div>
            Movie {} Selected!
        </div>
    );
}

export default Selected;
