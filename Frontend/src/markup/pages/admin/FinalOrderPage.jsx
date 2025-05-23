import React from 'react'
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu';
import EachVehicleInfo from '../../components/Admin/EachVehicleInfo/EachVehicleInfo';

function FinalOrderPage() {
  return (
    <div className="container-fluid admin-pages">
      <div className="row">
        <div className="col-md-3 admin-left-side">
          <AdminMenu/>
        </div>
        <div className="col-md-9 admin-right-side">
          <EachVehicleInfo/>
        </div>
      </div>
    </div>
  );
}

export default FinalOrderPage