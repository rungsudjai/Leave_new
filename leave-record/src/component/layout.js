import React, {useContext} from "react";
import AddingLeave from './AddLeave_page.js';
import Home from './Home.js'
import Login from './Login.js'
import AddEmployee from "./AddEmplyee.js";
import EditInfo from "./Edit_Info.js"
import EditLeave from "./Edit_Leave.js";
import { AuthContext } from "../App.js";
import { Link, redirect, useNavigate } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Layout() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        localStorage.removeItem('token');
        navigate('/login')

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Your Logo</a>
                    <div className="collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav">
                            {!!localStorage.getItem('token') ? (
                                <li className="nav-item">
                                        <Link to="editleave">
                                            <button className="btn btn-dark">แก้ไขการลา</button>
                                        </Link>
                                        
                                        <Link to="editinfo">
                                            <button className="btn btn-primary">แก้ไขข้อมูลส่วนตัว</button>
                                        </Link>
                                        
                                        <a className="nav-link" href="#" onClick={handleLogout}>ออกจากระบบ</a>

                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link to="/login">
                                        <button className='nav-link'>ล็อกอิน</button>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            <h1 className='text-success'> </h1>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="addingLeave" element={<AddingLeave />} />
                <Route path="addemployee" element={<AddEmployee/>} />
                <Route path="editinfo" element={<EditInfo/>} />
                <Route path="editleave" element={<EditLeave />} />
            </Routes>
        </>
    )
}

export default Layout;