import { useState } from "react";
function EditInfo() {
    const user = JSON.parse(localStorage.getItem('user'))
    const [formData, setFormData] = useState({
        Title: user.Title,
        FirstName: user.FirstName,
        LastName: user.LastName,
        NationalID: user.NationalID,
        MobilePhone: user.MobilePhone,
        Department: user.Department,
        Email: user.Email,
        Password: user.Password
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };

    const SaveEmployee = () => {
        console.log(formData)
    }
    return(
        <>
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

  export default EditInfo