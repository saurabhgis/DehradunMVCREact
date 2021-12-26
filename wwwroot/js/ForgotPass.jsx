
class Forgotpass extends React.Component {
    render() {
        const imgSrc = "../public/user.png";
        return (
            <div style={{ width: "100%", height: "80vh" }}>
                <div >

                    <div style={{ float: "right", width: "90%", backgroundColor: "white" }}>
                        <div style={{ float: "left", textAlign: "center" }} className="my-5">
                            <img style={{ height: "50%", float: "left", textAlign: "center" }} src={imgSrc} alt="smart1" /><br />
                        </div><br /><br />
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center" style={{ color: "green", fontSize: "30px" }}>Member Login</h5>
                                <form action="http://localhost:3001/forgotpass" method="POST">
                                    <div className="form-row">
                                        <div className="form-group col-md-6" style={{ paddingLeft: "2%" }}>
                                            <h4 className="card-title" style={{ color: "green" }}>Forgot Username / Password</h4><br />
                                            <label htmlfor="">Email</label>
                                            <input type="text" className="form-control" id="Email" name="Email" placeholder="Email" required /><br />
                                            <input type="submit" className="btn btn1 text-light" style={{ backgroundColor: "green", width: "30%" }} value="Submit" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}


ReactDOM.render(
    <div>
        <Forgotpass />
    </div>,
    document.getElementById('content')
);  