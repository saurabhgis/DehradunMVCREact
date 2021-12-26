const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;

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
                                <form action="/Home/Forgot" method="POST">
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
class SignUp extends React.Component {
    render() {

        function CaptchGen() {
            var a = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            console.log(a.length);
            var max = 62;
            var str = "";
            for (var i = 0; i < 5; i++) {
                var num = Math.floor(Math.random() * max);
                str += a[num];
            }
            console.log(str);
            var temp = str;
            document.getElementById("Captch").value = str;
        }


        function CheckCaptch() {
            if (document.getElementById("EnterCaptch").value != document.getElementById("Captch").value) {
                alert("Invalid Captch");
                return false;
            } else {
                return true;
            }
        }
        return (
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div className="container my-5" style={{ width: "50%" }}>
                    <h5>ALL FIELDS ARE REQUIRED</h5>
                    <h3>CREATE YOUR ACCOUNT</h3><br />
                    <h2 className="card-title" style={{ color: "green" }}>Register</h2>
                    <form method="POST" action="/Home/Create" >
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlfor="">First Name</label>
                                <input type="text" className="form-control" id="Fname" name="Fname" placeholder="First Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlfor="">Last Name</label>
                                <input type="text" className="form-control" id="Lname" name="Lname" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlfor="">User Name</label>
                                <input type="text" className="form-control" id="username" name="username" placeholder="User Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlfor="">Mobile Number</label>
                                <input type="text" className="form-control" id="Mobno" name="Mobno" placeholder="Mobile Number" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlfor="">Email</label>
                                <input type="email" className="form-control" id="Email" name="Email" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlfor="">Password</label>
                                <input type="password" className="form-control" id="Password" name="Password" placeholder="Password" />
                            </div>
                        </div>
                        {/*<div className="form-row">*/}
                        {/*    <div className="form-group col-md-6">*/}
                        {/*        <label htmlfor="captcha">Captcha</label>*/}
                        {/*        <i className="fas fa-sync" style={{ fontSize: "15px" }} onClick={CaptchGen} ></i>*/}
                        {/*        <input type="text" className="form-control" id="Captch" style={{ width: "30%" }} name="Captch" readOnly />*/}
                        {/*        <input type="text" className="form-control" id="EnterCaptch" style={{ width: "70%" }} name="EnterCaptch" placeholder="Captcha" />*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlfor="gridCheck">
                                    I agree to the Terms and Conditions
							</label>
                            </div>
                        </div>
                        <input type="submit" className="btn btn1 text-light" style={{ backgroundColor: "green", width: "100%" }} value="Sign UP" />
                    </form> <br />
                    <div onLoad={CaptchGen} style={{ float: "right" }}>Already Registered ? <Link to="SignIn">Sign In</Link></div>
                </div>
            </div >
        );
    }
}



class About extends React.Component {
    render() {
        const imgSrc = "../public/read.JPG";
        return (
            <div>
                <div style={{ float: "left", width: "60%", paddingLeft: "10%", height: "80vh" }}>
                    <img src={imgSrc} alt="smart1" style={{ height: "90vh", width: "80%" }} /><br />
                </div>
                <div style={{ float: "right", textAlign: "justify", width: "40%", fontSize: "18px", height: "80vh" }}>
                    For the purpose of implementing the smart cities project,<br />
                    <b>Dehradun Smart City Limited (DSCL),</b> a Special Purpose<br /> Vehicle (SPV) for Dehradun Smart City Project has been<br /> incorporated, under the Indian Companies Act, 2013. <br /> <br /> The <b>focus is on sustainable and inclusive development</b>            and<br /> the idea is to look at compact areas, create a replicable model<br /> which will act like a light house to other aspiring cities. <br /> <br /> The <b>Dehradun Smart City Mission of the Government is a<br />
            bold, new initiative.</b> It is meant to set examples that can be<br /> replicated both within and outside the Smart City, catalysing the<br /> creation of similar Smart Cities in various regions and parts of<br /> the country. <br />
                    <br />
                    <a href="http://smartcitydehradun.uk.gov.in/" target="_blank"><input className="btn text-light btn-success" style={{ backgroundColor: "green", fontSize: "18px" }} type="button" value="READ MORE" /></a>
                </div>
            </div>
        );
    }
}

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
                                        <input required type="password" name="password" type="password" id="userPw" className="form-control" placeholder="Enter Password" />
                                    </div><br />
                                    <div>
                                        <Link to="ForgotPass" ><label for="" style={{ float: "left", fontSize: "12px" }} >Forgot Password</label></Link>
                                    </div><br />
                                    <input type="submit" className="btn btn-lg btn-block text-uppercase text-light" style={{ backgroundColor: "green" }} value="SIGN IN" />
                                    <hr className="my-4" />
                                    </form>
                                    <Link to="SignUp"><button className="btn btn-lg btn-dark btn-block text-uppercase" type="button" >Sign Up</button></Link>
                                </div>
                            </div>
                        </center>
                    </div>
                </div >
            </div>
        );
    }
}

class Home extends React.Component {
    render() {
        const H1 = "../public/1.png";
        const H2 = "../public/2.jpg";
        const H3 = "../public/3.jpg";
        return (
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" style={{ height: "91vh" }}>
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={H1} alt="First slide" width="100%" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={H2} alt="Second slide" width="100%" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={H3} alt="Third slide" width="100%" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

const App = () => (
    <ReactRouterDOM.HashRouter>
        {/*<ul>*/}
        {/*    <li><Link to="/">Home</Link></li>*/}
        {/*    <li><Link to="/SignIn">Login</Link></li>*/}
        {/*    <li><Link to="/About">About</Link></li>*/}
        <div>
            {/*</ul>*/}
            {/*<div>*/}
            {/*        <header style={{ width: "100%", height: "30vh "}}>*/}
            {/*            <div id="indicators" className="carousel slide" data-ride="carousel" style={{ width: "100%",height: "25vh "}}>*/}
            {/*                <ol className="carousel-indicators">*/}
            {/*                    <li data-target="#indicators" data-slide-to="0" className="active"></li>*/}
            {/*                    <li data-target="#indicators" data-slide-to="1"></li>*/}
            {/*                    <li data-target="#indicators" data-slide-to="2"></li>*/}
            {/*                </ol>*/}
            {/*                <div className="carousel-inner" role="listbox">*/}
            {/*                    <div className="carousel-item active"> <img src={g5} style={{ width: "100%", height: "30vh" }} /> </div>*/}
            {/*                    <div className="carousel-item"><img src={g6} style={{ width: "100%", height: "30vh" }} /></div>*/}
            {/*                    <div className="carousel-item"> <img src={ g7} style={{ width: "100%", height: "30vh" }} /></div>*/}
            {/*                </div>*/}
            {/*                <a className="carousel-control-prev" href="#indicators" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a>*/}
            {/*                <a className="carousel-control-next" href="#indicators" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a>*/}
            {/*            </div>*/}
            {/*        </header>*/}
            {/*</div>*/}
            <div>
                <center>
                    {/*<img src={logo} style={{ height: "25vh", width: "50%" }} />*/}
                </center>
            </div>
            <div>
                <nav id="mainNavbar" className="navbar navbar-dark navbar-expand-md  bg-dark" style={{ backgroundColor: "#333", color: "white" }}>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks"> <span className="navbar-toggler-icon bg-info"></span> </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navLinks">
                        <ul className="navbar-nav">
                            <li className="nav-item"> <Link to="" className="nav-link" style={{ color: "white" }}><label> HOME</label> </Link> </li>
                            <li className="nav-item"> <Link to="about" className="nav-link" style={{ color: "white" }}><label>ABOUT</label></Link> </li>
                            <li className="nav-item"> <Link to="SignIn" className="nav-link" style={{ color: "white" }}> <label> SIGN IN </label> </Link> </li>

                            {/*<li className="nav-item"> <a hrf="/Home/DehradunSS" className="nav-link" style={{ color: "white" }}> <label> SIGN IN </label> </a> </li>*/}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/About" component={About} />
        <Route path="/ForgotPass" component={Forgotpass} />
        
        
    </ReactRouterDOM.HashRouter>
)


ReactDOM.render(
    <div>
        <App />

    </div>,
    document.getElementById('content')
);  