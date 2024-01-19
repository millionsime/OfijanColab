import React from 'react';
import EducationLevel from '../EducationLevel/EducationLevel';
import SellerTopbar from '../SellerNavs/SellerTopbar';
import SellerSidebar from '../SellerNavs/SellerSidebar';

const SellerMain = () => {
    return (
        <div>
            <SellerTopbar />
            <SellerSidebar />
            <EducationLevel />
        </div>
    )
}

export default SellerMain