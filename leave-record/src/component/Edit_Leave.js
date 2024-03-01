import { useEffect, useState } from "react";
import axios from "axios";

function EditLeave() {
    const user = JSON.parse(localStorage.getItem('user'))

    const [formData, setFormData] = useState({
        emp_name: '',
        emp_department: '',
        type_leave: '',
        Reason: '',
        startdate: '',
        enddate: '',
    });
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/emp_leaves/edit`, { fk_user: user.id })
        .then((res) => res.data)
        .then(d => 
        
            //const data_format = res.data
            //console.log(data_format)
            setData(d)
        
        )
    }, [])
    console.log(data)

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });

};


// const callLeave = async () => {
//     console.log(typeof (user._id))
//     const res = await axios.get(`http://localhost:3001/emp_leaves/edit`, { fk_user: user.id })
//     const data_format = await res.data
//     console.log(data_format)
//     data_format.map((item) => {
//         setData((prev) => [...prev, item])
//     })
//}

const handleConfirmAddData = () => {

}
return (
    <>
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
                        value={data.startdate}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="firstName">วันที่เริ่มลา</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="date"
                        className="form-control"
                        name="enddate"
                        value={data.enddate}
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
                        value={data.reason}
                        onChange={handleChange}
                    />
                    <label htmlFor="firstName">หมายเหตุ</label>
                </div>
                <button type='submit' className='btn btn-success' >ยืนยัน</button>
            </div>

        </div>
    </>
)
}

export default EditLeave