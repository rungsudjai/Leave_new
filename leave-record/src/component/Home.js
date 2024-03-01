import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import AddButton from './addLeave';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { CheckLogin } from '../CustomFunction'


function Home() {
    const Chk = () => {return CheckLogin();}
    const user = JSON.parse(localStorage.getItem('user'))
    function SetTable() {
        const [data, setData] = useState([]);

        const callApi = async () => {
            const res = await axios.get("http://localhost:3001/emp_leaves")
            const data_format = await res.data

            data_format.map((item) => {
                setData((prev) => [...prev, item])
            })
        }

        useEffect(() => {
            callApi()
        }, [])
        return (
            <>
                {data.map((item, index) => {
                    
                    let create_date = new Date(item.create_at)
                    let start_date = new Date(item.startdate)
                    let end_date = new Date(item.enddate)
                    return (
                        <tr key={index}><td>{item.emp_name}</td><td>{item.emp_department}</td><td>{create_date.getDate().toString().padStart(2, '0')}-{(create_date.getMonth() + 1).toString().padStart(2, '0')}-{create_date.getFullYear()}</td>
                        <td>{start_date.getDate().toString().padStart(2, '0')}-{(start_date.getMonth() + 1).toString().padStart(2, '0')}-{start_date.getFullYear()}</td>
                        <td>{end_date.getDate().toString().padStart(2, '0')}-{(end_date.getMonth() + 1).toString().padStart(2, '0')}-{end_date.getFullYear()}</td>
                        <td>{item.type_leave}</td><td>{item.Reason}</td></tr>
                    )
                })}
            </>
        )
    }


    return (
        <>
        <Chk/>
        <div className="container text-center">
            <h2>ยินดีต้อนรับ &gt;&gt;&gt;{user.FirstName+" "+user.LastName}</h2>
            {user.Department == "HR" ? (
                    <Link to='/addemployee'>
                        <button className='btn btn-primary'>บันทึกพนักงานใหม่</button>
                    </Link>
            ) : ("")}
            <br/>
            <br/>
            <Link>
                <button className='btn btn-warning'>ประวัติการแจ้งลา</button>
            </Link>
            <AddButton/>
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ชื่อพนักงาน</th>
                            <th>แผนก</th>
                            <th>วันที่แจ้งลา</th>
                            <th>วันที่เริ่มลา</th>
                            <th>วันสุดท้ายที่ลา</th>
                            <th>ประเภทการลา</th>
                            <th>หมายเหตุ</th>
                        </tr>
                    </thead>
                    <tbody id='leave-all'>
                        <SetTable />
                    </tbody>
                </table>
            </div>
        </div></>

    )
}

export default Home;