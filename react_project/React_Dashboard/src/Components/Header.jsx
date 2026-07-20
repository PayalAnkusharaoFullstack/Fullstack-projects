function Header() {

  function toggle() {
    const Slidebar = document.getElementById("slidebar");
    Slidebar.classList.toggle("active");
  }
  return (
    <>
      <div className="header shadow-lg">
 <div className="d-flex">
         <div className="btn" onClick={toggle}>
          <i className="fa-solid fa-bars text-light d-lg-none fs-3 pt-2"></i>
          <i class="fa-regular fa-user  text-light d-lg-none fs-3 pt-2 ms-2"></i>
        </div>
        <div>
          <h5 className="text-light user d-none d-lg-block pt-1 fs-3"><i class="fa-regular fa-user fs-4"></i></h5>
        </div>
 </div>

        <div className="pt-2">

          <i class="fa-regular fa-envelope text-light fs-4"></i>
          <i class="fa-regular fa-bell text-light mx-3 fs-4"></i>
        </div>
      </div>
    </>
  )
}

export default Header