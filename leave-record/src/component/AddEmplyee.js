import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { CheckAuthHr } from "../CustomFunction";

function AddEmployee() {
    const [formData, setFormData] = useState({
        Title: '',
        FirstName: '',
        LastName: '',
        NationalID: '',
        MobilePhone: '',
        Department: '',
        Email: '',
        Password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const navigate = useNavigate();
    const SaveEmployee = async (e) => {
        console.log(formData)
        try {
            const response = await axios.post('http://localhost:3001/emp_users', formData);
            console.log('Data added:', response.data);
            Swal.fire({
                title: 'บันทึกข้อมูลพนักงานใหม่สำเร็จ',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/');
            });
            // Add any further handling here
        } catch (error) {
            console.error('Error adding data:', error);
            // Handle error
        }
    };

return (
    <>
        <CheckAuthHr />
        <div className="container text-center">
            <h1>บันทึกข้อมูลพนักงานใหม่</h1>
            <div className="form-floating mb-3">
                <select className='form-select' name="Title" value={formData.Title} onChange={handleChange} required>
                    <option value=''>---เลือกคำนำหน้า---</option>
                    <option value='นาย'>นาย</option>
                    <option value='นางสาว'>นางสาว</option>
                    <option value='นาง'>นาง</option>
                </select>
                <label >คำนำหน้า</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text"
                    className="form-control"
                    name="FirstName"
                    value={formData.FirstName}
                    onChange={handleChange}
                    required
                />
                <label>ชื่อจริง</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text"
                    className="form-control"
                    name="LastName"
                    value={formData.LastName}
                    onChange={handleChange}
                    required
                />
                <label >นามสกุล</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text"
                    className="form-control"
                    name="NationalID"
                    value={formData.NationalID}
                    onChange={handleChange}
                    required
                />
                <label>หมายเลขประจำตัวประชาชน</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text"
                    className="form-control"
                    name="MobilePhone"
                    value={formData.MobilePhone}
                    onChange={handleChange}
                    required
                />
                <label>เบอร์โทรศัพท์</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text"
                    className="form-control"
                    name="Department"
                    value={formData.Department}
                    onChange={handleChange}
                    required
                />
                <label >แผนก</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text"
                    className="form-control"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                />
                <label >Email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text"
                    className="form-control"
                    name="Password"
                    value={formData.Password}
                    onChange={handleChange}
                />
                <label >กำหนด Password (พนักงานสามารถเปลี่ยนรหัสผ่านได้ภายหลัง)</label>
            </div>
            <button type='submit' className='btn btn-success' onClick={SaveEmployee}>ยืนยัน</button>
        </div>
    </>
)
}

export default AddEmployee