import React from 'react'

function Slidebar() {

  return (
    <>
    <div id="slidebar">
      <h2 className="text-light ps-3  pt-lg-4 shop"><i class="fa-solid fa-cart-plus me-2 fs-3 text"></i>Shop</h2>
      <a href="#"><i className="fas fa-chart-line me-2"></i>Dashboard</a>
      <a href="#"><i className="fas fa-box-open me-2"></i>Products</a>
      <a href="#"><i className="fas fa-th-large me-2"></i>Categories</a>
      <a href="#"><i className="fas fa-clipboard-list me-2"></i> Inventory</a>
      <a href="#"><i className="fas fa-users me-2"></i>Customers</a>
      <a href="#"><i className="fas fa-chart-line me-2"></i>Reports</a>
      <a href="#"><i className="fas fa-cog me-2"></i>Settings</a>
    </div>
    </>
  )
}

export default Slidebar