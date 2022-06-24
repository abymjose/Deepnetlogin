import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Register = (props) => {

    let history = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        place: "",
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });

    }

    const submitForm = (e) => {
        e.preventDefault();
       const sendData = {
            name: data.name,
            email: data.email,
            password: data.password,
            place: data.place,
        }
        console.log(sendData);
        axios.post()
        .then((result)=>{
            if(result.data.Status=='Invalid'){
                alert('Invalid User');
            }
            else{
               history('/dashboard')
            }
        })
    }
    return (
        <div className="main-box">
            <form onSubmit={submitForm}>
                <div className="row">
                    <div className="col-md-12 text-center"><h1>Register</h1></div>
                </div>

                <div className="row">
                    <div className="col-md-6 text-center">Name</div>
                    <div className="col-md-6 text-center">
                        <input type="text" name="Name" className="form-control"
                            onChange={handleChange} value={data.name} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 text-center">Email</div>
                    <div className="col-md-6">
                        <input type="email" name="email" className="form-control"
                            onChange={handleChange} value={data.email} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 text-center">Password</div>
                    <div className="col-md-6">
                        <input type="password" name="password" className="form-control"
                            onChange={handleChange} value={data.password} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 text-center">Place</div>
                    <div className="col-md-6">
                        <input type="text" name="place" className="form-control"
                            onChange={handleChange} value={data.place} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <input type="submit" name="submit" value="Register"  className="btn btn-success"/>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Register;