import React from 'react'


function Navbar() {
    
    return (
        <div className=''>
            {/*Navigation bar  */}
            <nav className="navbar bg-body-light fixed-top">
      <div className="container-fluid row">
        <a className="navbar-brand col-1 ml-2 " href="#">
            <h2 className='ml-2 text-dark' >snap</h2>
        </a>

        {/* nav links */}
        <div className="justify-content-start align-items-start col-7 "
                        id=""
                    >
                        <ul className=" list-group-horizontal nav justify-content-start " Style={"--bs-scroll-height: 150px;"}>
                        <li className="nav-item dropdown d-none d-lg-block"> 
                <a className="nav-link text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Features
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><i className="bi bi-list-task"></i> Todo List</a></li>
                  <li><a className="dropdown-item" href="#"><i className="bi bi-calendar-event"></i> Calendar</a></li>
                  <li>
                    {/* <hr className="dropdown-divider"/> */}
                  </li>
                  <li><a className="dropdown-item" href="#"><i className="bi bi-bell"></i> Reminders</a></li>
                  <li><a className="dropdown-item" href="#"> <i className="bi bi-bullseye"></i> Planning</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown d-none d-lg-block"> 
                <a className="nav-link text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Company
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">History</a></li>
                  <li><a className="dropdown-item" href="#">Our Team</a></li>
                  <li>
                    {/* <hr className="dropdown-divider"/> */}
                  </li>
                  <li><a className="dropdown-item" href="#">Blog</a></li>
                </ul>
              </li>
                            <li className="nav-link text-dark d-none d-lg-block cursor-pointer">
                                
                               Careers
                            </li>
                            
                            <li className="nav-link text-dark d-none d-lg-block cursor-pointer">
                                About
                            </li>
                            
                           
                           
                        </ul>
                    </div>
                    <div className="justify-content-end text-end col-2 "
                        id=""
                    >
                        <ul className=" list-group-horizontal nav justify-content-start " Style={"--bs-scroll-height: 150px;"}>
                      
             
                            <li className="nav-link text-dark d-none d-lg-block ">
                               Login
                            </li>
                            
                            <li className="nav-link text-dark d-none d-lg-block border sna">
                                Register
                            </li>
                            
                          
                           
                        </ul>
                    </div>
                    {/* Sidenav bar */}
        <button className="navbar-toggler d-sm-block d-md-block d-lg-none border-none col-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item dropdown">
                <a className="nav-link text-dark dropdown-toggle text-start" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Features
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><i className="bi bi-list-task"></i> Todo List</a></li>
                  <li><a className="dropdown-item" href="#"><i className="bi bi-calendar-event"></i> Calendar</a></li>
                  <li>
                    {/* <hr className="dropdown-divider"/> */}
                  </li>
                  <li><a className="dropdown-item" href="#"><i className="bi bi-bell"></i> Reminders</a></li>
                  <li><a className="dropdown-item" href="#"> <i className="bi bi-bullseye"></i> Planning</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link text-dark dropdown-toggle text-start" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Company
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">History</a></li>
                  <li><a className="dropdown-item" href="#">Our Team</a></li>
                  <li>
                    {/* <hr className="dropdown-divider"/> */}
                  </li>
                  <li><a className="dropdown-item" href="#">Blog</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark active text-start" aria-current="page" href="#">Careers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark text-start" href="#">About</a>
              </li>
              <li className="nav-link text-dark border rounded mt-2">
                               Login
                            </li>
                            
                            <li className="nav-link text-dark border rounded mt-1 ">
                                Register
                            </li>
                            
            </ul>
            
          </div>
        </div>
      </div>
    </nav>
            
        </div>
    )
}

export default Navbar
