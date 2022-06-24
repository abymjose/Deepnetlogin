const Login = () => {
    return (
        <div className="main-box">
            <div className="row">
                <div className="col-md-12 text-center"><h1>Login</h1></div>

            </div>

            <div className="row">
                <div className="col-md-6 text-center">Email</div>
                <div className="col-md-6">
                    <input type="text" name="Email" className="form-control" />
                </div>
            </div>
           
            <div className="row">
                <div className="col-md-6 text-center">Password</div>
                <div className="col-md-6">
                    <input type="password" name="Password" className="form-control" />
                </div>
            </div>

            <div className="row">
                    <div className="col-md-12 text-center">
                        <input type="submit" name="submit" value="Login" className="btn btn-success" />
                    </div>
                </div>


        </div>
    )
}
export default Login;