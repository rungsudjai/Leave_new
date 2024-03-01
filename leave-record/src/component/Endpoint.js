import axios from 'axios';

// GET request
function GetRecord() {
    axios.get('http://localhost:3001/emp_leaves')
        .then(response => {
            var a = response.data
            a = JSON.stringify(a)
        })
        .catch(error => {
            console.error(error);
        });
    
}


export default GetRecord;
