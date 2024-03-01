import React, { useState } from 'react'
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const { isNullOrEmpty, CheckLogin } = require('../CustomFunction')

function AddingLeave() {
    const user = JSON.parse(localStorage.getItem('user'))
    const [formData, setFormData] = useState({
        emp_name: '',
        emp_department: '',
        type_leave: '',
        Reason: '',
        startdate: '',
        enddate: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };

    const handleSubmit = async (e) => {
        try {
            const response = await axios.post('http://localhost:3001/emp_leaves', formData);
            console.log('Data added:', response.data);
            Swal.fire({
                title: 'แจ้งการลาสำเร็จ',
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

    const handleConfirmAddData = () => {
        if (isNullOrEmpty(formData.emp_name)
            || isNullOrEmpty(formData.emp_department)
            || isNullOrEmpty(formData.startdate)
            || isNullOrEmpty(formData.enddate)
            || isNullOrEmpty(formData.type_leave)) {
            Swal.fire({
                title: 'คุณกรอกข้อมูลไม่ครบถ้วน',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
        } else {
            Swal.fire({
                title: 'ยืนยันการแจ้งลา',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'ยืนยัน',
                cancelButtonText: 'ยกเลิก'
            }).then((result) => {
                if (result.isConfirmed) {
                    handleSubmit();
                }
            });
        }

    };

    return (
        <>
        <CheckLogin/>
        <div>
            <h1>แจ้งการลา</h1>
            <div className='container'>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        name="emp_name"
                        value={user.FirstName + " " + user.LastName}
                        onChange={handleChange}
                        readOnly
                        required
                    />
                    <label htmlFor="Name">ชื่อ-นามสกุล</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        name="emp_department"
                        value={user.Department}
                        onChange={handleChange}
                        readOnly
                        required
                    />
                    <label htmlFor="">แผนก</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="date"
                        className="form-control"
                        name="startdate"
                        value={formData.startdate}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="firstName">วันที่เริ่มลา</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="date"
                        className="form-control"
                        name="enddate"
                        value={formData.enddate}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="firstName">ลาถึงวันที่</label>
                </div>
                <div className="form-floating mb-3">
                    <select className='form-select' name="type_leave" value={formData.type_leave} placeholder='sedfg' onChange={handleChange} required>
                        <option value="">---เลือกการลา---</option>
                        <option value="ลาป่วย">ลาป่วย</option>
                        <option value="ลากิจ">ลากิจ</option>
                    </select>
                    <label htmlFor="firstName">ประเภทการลา</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        name="Reason"
                        value={formData.reason}
                        onChange={handleChange}
                    />
                    <label htmlFor="firstName">หมายเหตุ</label>
                </div>
                <button type='submit' className='btn btn-success' onClick={handleConfirmAddData}>ยืนยัน</button>
            </div>

        </div>
        </>
        
    )
}



export default AddingLeave; 