
class SignIn extends React.Component {
    render() {
        const imgSrc = "../public/user.png";
        return (
            <div >
                <div>
                    <link rel="stylesheet" href="../Content/1.css" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
                    <div style={{ float: "right", width: "100%", backgroundColor: "white" }}>
                        <center>
                            <div style={{ float: "left", textAlign: "center" }} className="my-5">
                                <img style={{ height: "50vh", float: "left", textAlign: "center" }} src={imgSrc} alt="smart1" /><br />
                            </div><br /><br />
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center" style={{ color: "green", fontSize: "30px" }}>Member Login</h5>
                                    <form method="POST" action="/Home/SignIn" className="form-signin">
                                        <div className="form-label-group ">
                                            
                                            <input required type="text" id="username" name="username" className="form-control" placeholder="Enter Username" />
                                        </div><br />
                                        <div className="form-label-group">
                                            <input required type="password" name="password" id="password" className="form-control" placeholder="Enter Password" />
                                        </div><br />
                                        <div>
                                            {/*<a href="ForgotPass" ><label for="" style={{float:"left",fontSize: "12px" }} >Forgot Password</label></a>*/}
                                        </div><br />
                                        <input type="submit" className="btn btn-lg btn-block text-uppercase text-light" style={{ backgroundColor: "green" }} value="SIGN IN" />
                                    <hr className="my-4" />
                                    
                                    </form>
                                    {/*<a href="SignUp"><button className="btn btn-lg btn-dark btn-block text-uppercase" type="button" >Sign Up</button></a>*/}
                                </div>
                            </div>
                        </center>
                    </div>
                </div >
            </div>
        );
    }
}


ReactDOM.render(
    <div>

        <SignIn />
    </div>,
    document.getElementById('content')
);  