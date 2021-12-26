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
                                            <label htmlFor="">Email</label>
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
                                <label htmlFor="">First Name</label>
                                <input type="text" className="form-control" id="fname" name="fname" placeholder="First Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="">Last Name</label>
                                <input type="text" className="form-control" id="lname" name="lname" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="">User Name</label>
                                <input type="text" className="form-control" id="username" name="username" placeholder="User Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="">Mobile Number</label>
                                <input type="text" className="form-control" id="mobno" name="mobno" placeholder="Mobile Number" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="">Email</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="">Password</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
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
                                <label className="form-check-label" htmlFor="gridCheck">
                                    I agree to the Terms and Conditions
							</label>
                            </div>
                        </div>
                        <input type="submit" className="btn btn1 text-light" style={{ backgroundColor: "green", width: "100%" }} value="Sign UP" />
                    </form> <br />
                    <div  style={{ float: "right" }}>Already Registered ? <Link to="SignIn">Sign In</Link></div>
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
                                            <Link to="ForgotPass" ><label htmlFor="" style={{ float: "left", fontSize: "14px" }} >Forgot Password</label></Link>
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


class PublicMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = { center: ol.proj.fromLonLat([73.41, 23.82]), zoom: 8 };
        this.olmap = new ol.Map({
            target: null,
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([73.41, 23.82]),
                zoom: 8
            })
        });
    }
    componentDidMount() {
        this.olmap.setTarget("map");

        // Listen to map changes
        this.olmap.on("moveend", () => {
            let center = this.olmap.getView().getCenter();
            let zoom = this.olmap.getView().getZoom();
            this.setState({ center, zoom });
        });
    }
    updateMap() {
        this.olmap.getView().setCenter(this.state.center);
        this.olmap.getView().setZoom(this.state.zoom);
    }
    shouldComponentUpdate(nextProps, nextState) {
        let center = this.olmap.getView().getCenter();
        let zoom = this.olmap.getView().getZoom();
        if (center === nextState.center && zoom === nextState.zoom) return false;
        return true;
    }
    userAction() {
        this.setState({ center: ol.proj.fromLonLat([73.41, 23.82]), zoom: 5 });
    }


    render() {
        var stateGovtBuildingsSource = new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Dehradun35/wms',
            params: { 'LAYERS': 'Dehradun35:state government office' },
            serverType: 'geoserver'
        })
        var stateGovtBuildingsLayer = new ol.layer.Image({
            source: stateGovtBuildingsSource
        });
        stateGovtBuildingsLayer.setZIndex(19);

        this.updateMap(); // Update map on render?
        return (
            <div id="map" style={{ width: "100%", height: "360px" }}>
                {/* <button onClick={e => this.userAction()}>setState on click</button> */}
            </div>
        );
    }
}
class DehradunSS extends React.Component {
    render() {
        function Show() {
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
        }

        function Hide() {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        }
        var coordinate = [];
        function CoordSearch() {
            var Lon = parseFloat(document.getElementById("Long").value);
            var Lat = parseFloat(document.getElementById("Lati").value);
            console.log(Lon + " " + Lat);
            var p = new Promise((resolve, reject) => {
                fetch('https://nominatim.openstreetmap.org/reverse?format=json&lon=' + Lon + '&lat=' + Lat)
                    .then(function (response) {
                        return response.json();
                    }).then(function (json) {
                        console.log(json);
                        coordinate = [Lon, Lat];
                        // overlay.setPosition(coordinate);

                        CoordinateDataInfo.innerHTML = '<div style="font-size:15px">' + json.display_name + '</div>';
                        resolve(Hide());
                    });
            })
        }
        function ShowBookmark() {
            var modal = document.getElementById("myModal1");
            modal.style.display = "block";
        }
        function HideBookmark() {
            var modal = document.getElementById("myModal1");
            modal.style.display = "none";
        }
        function ADDBOOK() {
            var NameBook, Description;
            NameBook = document.getElementById("NameBook").value;
            Description = document.getElementById("DescBook").value;
            var Link = window.location.href;
            document.getElementById("tbody").innerHTML += "<tr><td><a style='color:black;' href='" + Link + "'>" + NameBook + "</a></td>" +
                "<td style='text-align: center;'><input type='button' class='btn btn-danger'  value='Delete' style='float:right' onclick='updateBox(this)'</td>" + "</tr>";
            HideBookmark();
        }

        function DrawChartTest() {
            var SelectChart = document.getElementById("RealTime").value;
            console.log(SelectChart);
            if (SelectChart == "Bank") {
                document.getElementById("piechart").style.display = "";
                var BankCount, ATMCount, POSToffCount;
                var p2 = new Promise((resolve, reject) => {
                    fetch('http://localhost:8081/geoserver/Dehradun/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Dehradun%3Abankforlandmark&maxFeatures=50&outputFormat=application%2Fjson')
                        .then(function (res) {
                            res.text().then(function (data) {
                                var data = JSON.parse(data);
                                BankCount = data.features.length;
                                console.log(BankCount);
                                FetchAtm();
                            })
                        });
                });

                function FetchAtm() {
                    fetch('http://localhost:8081/geoserver/Dehradun/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Dehradun%3Aatmsforlandmark&maxFeatures=50&outputFormat=application%2Fjson')
                        .then(function (res) {
                            res.text().then(function (data) {
                                var data = JSON.parse(data);
                                ATMCount = data.features.length;
                                console.log(ATMCount);
                                FetchPostOff();
                            })
                        });
                }

                function FetchPostOff() {
                    fetch('http://localhost:8081/geoserver/Dehradun/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Dehradun%3Apostoffice&maxFeatures=50&outputFormat=application%2Fjson')
                        .then(function (res) {
                            res.text().then(function (data) {
                                var data = JSON.parse(data);
                                POSToffCount = data.features.length;
                                console.log(POSToffCount);
                                DrawingCharti();
                            })
                        })
                }

                function DrawingCharti() {
                    google.charts.load('current', {
                        'packages': ['corechart']
                    });
                    google.charts.setOnLoadCallback(drawChart);

                    function drawChart() {

                        var data = google.visualization.arrayToDataTable([
                            ['Task', 'Hours per Day'],
                            ['BANK', BankCount],
                            ['ATM', ATMCount],
                            ['Post Office', POSToffCount]
                        ]);

                        var options = {
                            title: 'Bank,ATMs & Post office'
                        };

                        const chart = new google.visualization.PieChart(document.getElementById('piechart'));

                        chart.draw(data, options);
                    }
                }

            }
            if (SelectChart == "Building") {
                document.getElementById("piechart").style.display = "";
                console.log("BUILDING");
                var CentralCount, StateCount;
                var p1 = new Promise((resolve, reject) => {
                    fetch('http://localhost:8081/geoserver/Dehradun/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Dehradun%3Astate%20government%20office&maxFeatures=50&outputFormat=application%2Fjson')
                        .then(function (res) {
                            res.text().then(function (data) {
                                var data = JSON.parse(data);
                                StateCount = data.features.length;
                                console.log(StateCount);
                                Fetch2();
                            })
                        });

                    function Fetch2(params) {
                        fetch('http://localhost:8081/geoserver/Dehradun/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Dehradun%3Acentral%20government%20buildings&maxFeatures=50&outputFormat=application%2Fjson')
                            .then(function (res) {
                                res.text().then(function (data) {
                                    var data = JSON.parse(data);
                                    CentralCount = data.features.length;
                                    console.log(CentralCount);
                                    DraaeingChart();
                                })
                            });
                    }
                });


                function DraaeingChart() {


                    google.charts.load('current', {
                        'packages': ['corechart']
                    });
                    google.charts.setOnLoadCallback(drawChart);

                    function drawChart() {

                        var data = google.visualization.arrayToDataTable([
                            ['Task', 'Hours per Day'],
                            ['Central Govt Building', CentralCount],
                            ['State Govt Building', StateCount]
                        ]);

                        var options = {
                            title: 'Building'
                        };

                        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

                        chart.draw(data, options);
                    }
                }
            }
        }
        function ShowLandmark() {
            document.getElementById("landmarkarea").style.display = "block";
        }
        function openNav() {

            document.getElementById("mySidepanel").style.width = "250px";
        }

        function closeNav() {
            document.getElementById("mySidepanel").style.width = "0";
        }

        function openNav1() {

            document.getElementById("mySidenav").style.width = "250px";
        }

        function closeNav1() {
            document.getElementById("mySidenav").style.width = "0";
        }
        function openNav2() {

            document.getElementById("mySidenav1").style.width = "250px";
        }

        function closeNav2() {
            document.getElementById("mySidenav1").style.width = "0";
        }
        var count = 0;
        function changenavbar() {
            if (count == 0) {
                document.getElementById("changenav").classList.remove('bg-dark');
                document.getElementById("changenav").classList.add('bg-success');
                document.getElementById("changenavfoot").classList.remove('bg-dark');
                document.getElementById("changenavfoot").classList.add('bg-success');
                document.getElementById("nav1").classList.remove("bg-dark");
                document.getElementById("nav2").classList.remove("bg-dark");
                document.getElementById("nav1").classList.add("bg-success");
                document.getElementById("nav2").classList.add("bg-success");
                count = 1;
            } else {
                count = 0;
                document.getElementById("changenav").classList.add('bg-dark');
                document.getElementById("changenavfoot").classList.add('bg-dark');
                document.getElementById("nav1").classList.remove("bg-success");
                document.getElementById("nav2").classList.remove("bg-success");
                document.getElementById("nav1").classList.add("bg-dark");
                document.getElementById("nav2").classList.add("bg-dark");
            }
        }
        
        return (
            <div>
                <div>
                    <div className="navbar-fixed-top">
                        <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-fixed-top" id="changenav">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon">
                                </span></button>

                            <div className="collapse  navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                                <div className="navbar-nav ">

                                    <a id="Identify" className="nav-item nav-link" style={{ color: "white", textAlign: "center" }}><i className="fa fa-info" style={{ fontSize: "30px" }}><br /> <label htmlFor="Identify" style={{ fontSize: "15px" }}>  IDENTIFY </label></i></a>
                                    <a id="PAN" className="nav-item nav-link" style={{ color: "white", textAlign: "center" }}> <i className="fa fa-hand-paper-o" style={{ fontSize: "30px" }}><br /> <label htmlFor="Pan" style={{ fontSize: "15px" }}> PAN</label></i></a>
                                    <a id="Coordinates" onClick={Show} className="nav-item nav-link" style={{ color: "white", textAlign: "center" }}><i className="fa fa-map-o" style={{ fontSize: "30px" }}><br /> <label htmlFor="Coordinates" style={{ fontSize: "15px" }}> COORDINATES</label></i></a>
                                    <a id="length" className="nav-item nav-link" style={{ color: "white", textAlign: "center" }}><i className="fa fa-line-chart" style={{ fontSize: "30px" }}><br /> <label htmlFor="Length" style={{ fontSize: "15px" }}> LENGTH</label></i></a>
                                    <a id="Area" className="nav-item nav-link" style={{ color: "white", textAlign: "center" }}><i className="fa fa-object-ungroup" style={{ fontSize: "30px", color: "white" }}><br /> <label htmlFor="Area" style={{ fontSize: "15px" }}> AREA</label></i></a>
                                    <a id="Image" className="nav-item nav-link" style={{ color: "white", textAlign: "center" }}><i className="fa fa-globe" style={{ fontSize: "30px" }}><br /> <label htmlFor="Image" style={{ fontSize: "15px" }}>  IMAGE</label></i></a>
                                    <a id="Print" href="javascript:window.print();" className="nav-item nav-link" style={{ color: "white", textAlign: "center" }}><i className="fa fa-print" style={{ fontSize: "30px" }} ><br /> <label htmlFor="Print" style={{ fontSize: "15px" }}> PRINT</label></i></a>
                                    <a id="help" href="http://sc1dehradun.sgligis.com/Help/guest/index.htm#t=Dehradun_Smart_City_Portal%2FIntroduction.htm" target="_blank" className="nav-item nav-link" style={{ color: "white" }}><i className="fa fa-handshake-o" style={{ fontSize: "30px" }}><br /> <label htmlFor="Help" style={{ fontSize: "15px" }}> HELP</label></i></a>
                                    <a id="BookMarks" onClick={ShowBookmark} className="nav-item nav-link" style={{ color: "white", textAlign: "center" }}><i className="fa fa-bookmark" style={{ fontSize: "30px" }}><br /> <label htmlFor="Bookmark" style={{ fontSize: "15px" }}> Bookmark</label></i></a>
                                    <a id="AdvanceSearch" className="nav-item nav-link" style={{ color: "white", textAlign: "center" }}><i className="fa fa-search-plus" style={{ fontSize: "30px" }}><br /> <label htmlFor="AdvanceSearch" style={{ fontSize: "15px" }}> Advance Search</label></i></a>
                                    <a id="PredefineQuery" className="nav-item nav-link" style={{ color: "white", textAlign: "center" }}><i className="fa fa-files-o" style={{ fontSize: "30px" }}><br /> <label htmlFor="PredefineQuery" style={{ fontSize: "15px" }}> Predefine Query</label></i></a>
                                    <a className="nav-item nav-link" onClick={openNav2} style={{ color: "white", textAlign: "center" }}> <i className="fa fa-map-marker" style={{ fontSize: "30px" }}><br /> <label htmlFor="Around" style={{ fontSize: "15px" }}> Around Me</label> </i></a>
                                    <a id="" onClick={changenavbar} className="nav-item nav-link" style={{ color: "white", textAlign: "center" }}><i className="fa fa-refresh" style={{ fontSize: "30px" }}><br /> <label htmlFor="theme" style={{ fontSize: "15px" }}> Change Theam</label></i></a>
                                    <a id="LogOut" className="nav-item nav-link" href="/Home" style={{ color: "white", textAlign: "center" }}><i className="fa fa-user" style={{ fontSize: "30px" }}><br /> <label htmlFor="Account" style={{ fontSize: "15px" }}> Log Out</label></i></a>

                                </div>
                            </div>
                        </nav>
                    </div>

                    <nav id="changenavfoot" className="navbar fixed-bottom navbar-expand-lg navbar-light bg-dark" style={{ background: "royalblue", marginLeft: "38%", marginRight: "38%" }}>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a id="home" className="nav-link" > <i className="fa fa-home" style={{ fontSize: "30px" }}></i></a>
                                </li>
                                <li id="Previous" className="nav-item"><a className="nav-link"><i className="fa fa-undo" style={{ fontSize: "30px" }}></i></a></li>
                                <li id="Next" className="nav-item"> <a className="nav-link"><i className="fa fa-repeat" style={{ fontSize: "30px" }}></i></a></li>
                                <li id="ZoomInbtn" className="nav-item"> <a className="nav-link"><i className="fa fa-plus" style={{ fontSize: "30px" }}></i></a></li>
                                <li id="ZoomOutbtn" className="nav-item"> <a className="nav-link"><i className="fa fa-minus" style={{ fontSize: "30px" }}></i></a></li>
                                <li id="ClearSelection" className="nav-item"><a className="nav-link"><i className="fa fa-eye-slash" style={{ fontSize: "30px" }}></i></a></li>
                                <li id="Currentlocation2" className="nav-item"><a className="nav-link"><i className="fa fa-crosshairs" style={{ fontSize: "30px" }}></i></a></li>
                                <li id="STOPBLINK" className="nav-item"><a className="nav-link"><i className="fa fa-unlink" style={{ fontSize: "30px" }}></i></a></li>
                            </ul>
                        </div>
                    </nav>

                    <div id="iframeHolder"></div>
                    <div id="iframeHolder2"></div>
                    {/*Around me */}
                    <div id="mySidenav1" className="sidenav1" style={{ zIndex: "3", position: "absolute", top: "11.4%" }}>
                        <i className="fa fa-search" style={{ fontSize: "25px" }}> <label > Around Me</label> </i>
                        <a href="javascript:void(0)" className="closebtn" style={{ color: "#333" }} onClick={closeNav2}>&times;</a>
                        <div style={{ zIndex: "1", position: "absolute" }}>
                            <details>
                                <summary> <i className="fa fa-map-marker" style={{ color: "#333", fontSize: "20px" }}></i><label style={{ fontSize: "13px" }}> Around Me </label> </summary>
                                <div style={{ paddingLeft: "25px" }}>
                                    <input type="checkbox" name="Aroundme" id="EmergencyServices" /> Emergency Services
                                    <div id="ShowHospital" style={{ color: "white", fontSize: "14px" }}>
                                    </div>
                                    <div>
                                        <table id="TShow"></table>
                                    </div>
                                    <input type="checkbox" name="Aroundme1" id="TouristAttraction" /> Tourist Attraction <br />
                                    <div id="TouristShow" style={{ color: "white", fontSize: "14px" }}></div>
                                    <div>
                                        <table id="TourShow"></table>
                                    </div>
                                    <input type="checkbox" name="Aroundme2" id="FunEntertainment" /> Fun & Entertainment <br />
                                    <div id="FunEnterShow" style={{ color: "white", fontSize: "14px" }}></div>
                                    <div>
                                        <table id="FunShow"></table>
                                    </div>
                                    <div>
                                        <input type="number" name="LengthArea" id="lengtharea" required placeholder="In Meter" className="form-control" />
                                    </div>
                                    <input type="button" className="btn btn-success" value="Go!" id="GoAroundme" />
                                    <input type="button" className="btn btn-danger" value="Clear!" id="ClearAround" />
                                </div>
                            </details>
                        </div>
                    </div>
                    {/* LAYER  */}
                    <button className="openbtn bg-dark" id="nav1" onClick={openNav} style={{ zIndex: "2", position: "absolute" }}><i className="fa fa-th-large"></i></button>
                    <div style={{ zIndex: "2", position: "absolute", overflowY: "scroll", top: "11.4%" }}>
                        <div id="mySidepanel" className="sidepanel" style={{ top:"11.4%" }}>
                            <a href="javascript:void(0)" className="closebtn" style={{ color: "#333" }} onClick={closeNav}>×</a>

                            <h3 style={{ textAlign: "center" }}> LAYERS <i className="fa fa-database" style={{ fontSize: "25px", color: "#333" }}></i></h3>
                            <div style={{ width: "100%", color: "#F4FFEF", textAlign: "center" }}>
                                <span>
                                    <a id="AllLayerOff" style={{ fontSize: "14px", textDecoration: "none" }}>ALL LAYER OFF </a>
                                </span>
                                <span> | </span>
                                <span>
                                    <a id="resetlayer" style={{ fontSize: "14px" }}> RESET LAYER</a>
                                </span>
                            </div>
                            <div style={{ marginLeft: "5%", marginBottom: "10%", background: "white", overflowY: "scroll", height: "70%", width: "90%" }}>

                                <details>
                                    <summary>
                                        <input type="checkbox" name="Img" id="Img" /> Dehradun Image <br />
                                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="Img" id="basemap" /> Basemap <br />
                                        <input type="checkbox" name="Img" id="satmap" /> Sat Map <br />
                                        <input type="checkbox" name="Img" id="uncheck" /> Dehradun Image
                    </div>
                                </details>

                                <details id="AdminBoundLayer">
                                    <summary>
                                        <input type="checkbox" name="adminbound" id="adminbound" /> Adminisrative Boundaries <br />
                                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="adminbound" id="boundmun" /> Boundaries Municipal<br />
                                    </div>
                                </details>

                                <details id="BuildingLayer">
                                    <summary>
                                        <input type="checkbox" name="Buildings" id="Building" /> Building
                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="" id="stategovbuild" /> State Goverment Building <br />
                                        <input type="checkbox" name="" id="centgovbuild" /> Central Goverment Building <br />

                                    </div>
                                </details>

                                <details id="StromWaterLayer">
                                    <summary>
                                        <input type="checkbox" name="stormwater" id="stormwater" /> Storm Water
                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="stormwater" id="drainage" /> Drainage Netowrk<br />
                                        <input type="checkbox" name="stwCatchmentbound" id="stwCatchmentbound" /> STW Catchment Boundary<br />
                                        <input type="checkbox" name="stwpoint" id="stwpoint" /> STW Point <br />
                                    </div>
                                </details>

                                <details id="GreenAreaLayer">
                                    <summary>
                                        <input type="checkbox" name="GreenArea" id="GreenArea" /> Green Areas
                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="farmhouse" id="farmhouse" /> Farm House<br />
                                        <input type="checkbox" name="forest" id="forest" /> Forest<br />
                                        <input type="checkbox" name="greenarea" id="greenarea" /> Green Area <br />
                                        <input type="checkbox" name="agric" id="agric" /> Agriculture
                    </div>
                                </details>

                                <details id="RoadLayer">
                                    <summary>
                                        <input type="checkbox" name="road" id="road" />Road
                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="road" id="parking" />Parking<br />
                                        <input type="checkbox" name="road" id="petrolpump" /> Petrol Pump<br />
                                        <input type="checkbox" name="road" id="bridge" />Bridges And Flyover <br />
                                        <input type="checkbox" name="road" id="trafficisland" />Traffic Island <br />
                                        <input type="checkbox" name="road" id="trafficjunc" />Traffic Junction <br />
                                        <input type="checkbox" name="road" id="busdepots" />Bus Depots
                    </div>
                                </details>

                                <details id="BankPostalLayer">
                                    <summary>
                                        <input type="checkbox" name="bankpostal" id="bankpostal" />Banking and Postal Facilitys
                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="bankpostal" id="banks" />Banks<br />
                                        <input type="checkbox" name="bankpostal" id="postoff" /> Post Office<br />
                                        <input type="checkbox" name="bankpostal" id="atms" />ATMs <br />
                                    </div>
                                </details>

                                <details id="WaterSuppLayer">
                                    <summary>
                                        <input type="checkbox" name="watersup" id="watersup" />Water Supply
                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="watersup" id="wateroverhead" />Water Overhead Tank<br />
                                        <input type="checkbox" name="watersup" id="watertreatment" /> Water Treatment Plant<br />
                                        <input type="checkbox" name="watersup" id="landmark" />Landmark <br />
                                        <input type="checkbox" name="watersup" id="waterpipline" />Water Pipline <br />
                                        <input type="checkbox" name="watersup" id="watersupppoint" />Water Supply Point <br />
                                        <input type="checkbox" name="watersup" id="tubewell" />Tubewells <br />
                                    </div>
                                </details>

                                <details id="StreetLightLayer">
                                    <summary>
                                        <input type="checkbox" name="stlight" id="stlight" />Street Light
                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="streetlight" id="streetlight" />Street Light
                    </div>
                                </details>

                                <details id="SewerageLayer">
                                    <summary>
                                        <input type="checkbox" name="Sewerage" id="Sewerage" />Sewerage
                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="Sewerage" id="commtoilet" />Community Toilets <br />
                                        <input type="checkbox" name="Sewerage" id="pubtoilet" />Public Toilets
                    </div>
                                </details>

                                <details id="RailwayLayer">
                                    <summary>
                                        <input type="checkbox" name="Railway" id="Railway" />Railway
                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="Railway" id="railwayline" />Railway Line <br />
                                        <input type="checkbox" name="Railway" id="railwaystat" />Railway Station
                    </div>
                                </details>

                                <details id="EmergencyLayer">
                                    <summary>
                                        <input type="checkbox" name="Emeserv" id="Emeserv" />Emergecy Services
                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="firestat" id="firestat" />Fire Station
                    </div>
                                </details>

                                <details id="EducationLayer">
                                    <summary>
                                        <input type="checkbox" name="EmesEducationerv" id="Education" />Education
                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="primary" id="primary" />Primary
                    </div>
                                </details>

                                <details id="SolidWasteLayer">
                                    <summary>
                                        <input type="checkbox" name="SWM" id="SWM" />Solid Waste Management
                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="SWMContainer" id="SWMContainer" />SWM Container <br />
                                        <input type="checkbox" name="SWMTransferStation" id="SWMTransferStation" />SWM Transfer Station
                    </div>
                                </details>

                                <details id="MedicalLayer">
                                    <summary>
                                        <input type="checkbox" name="ms" id="ms" />Medical Services
                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="bloodbank" id="bloodbank" />Blood Banks <br />
                                        <input type="checkbox" name="Homeopathic" id="Homeopathic" />Homeopathic <br />
                                        <input type="checkbox" name="MedicalStore" id="MedicalStore" />Medical Stores <br />
                                        <input type="checkbox" name="Clinic" id="Clinic" />Clinic <br />
                                        <input type="checkbox" name="surgshop" id="surgshop" />Surgical Shops <br />
                                        <input type="checkbox" name="vetclin" id="vetclin" />Veterinary Clinic <br />
                                        <input type="checkbox" name="Hospital" id="Hospital" />Hospital <br />
                                    </div>
                                </details>

                                <details id="ABDLayer">
                                    <summary>
                                        <input type="checkbox" name="ms" id="ms" />ABD
                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="ABDArea" id="ABDArea" />ABD Area <br />
                                        <input type="checkbox" name="ABDWardBound" id="ABDWardBound" />ABD Ward Bound <br />
                                        <input type="checkbox" name="ABDConnDrain" id="ABDConnDrain" />ABD Connectivity Drain <br />
                                        <input type="checkbox" name="ABDGreenBuilding" id="ABDGreenBuilding" />ABD Green Building <br />
                                        <input type="checkbox" name="surgshop" id="ABDMddaPark" />ABD MDDA Park
                        </div>
                                </details>

                                <details id="CovidLayer">
                                    <summary>
                                        <input type="checkbox" name="Covid" id="Covid" />Covid
                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="Covid" id="islotaionward" />Islolation Ward
                    </div>
                                </details>

                                <details id="OtherLayer">
                                    <summary>
                                        <input type="checkbox" name="other" id="Other" />Other
                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="other" id="OEducation" />Education
                    </div>
                                </details>

                                <details id="SCADALayer">
                                    <summary>
                                        <input type="checkbox" name="SCADA" id="SCADA" />SCADA
                    </summary>
                                    <div style={{ paddingLeft: "7%" }}>
                                        <input type="checkbox" name="SCADA" id="STubewell" />Tubewell <br />
                                        <input type="checkbox" name="SCADA" id="Reservoir" />Reservoir
                    </div>
                                </details>
                                <table>
                                    <tbody id="tbody">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    {/* DASHBOARD */}


                    <div id="mySidenav" className="sidenav" style={{ zIndex: "3", position: "absolute", top: "11.4%" }}>
                        <i className="fa fa-tachometer" style={{ color: "#333", fontSize: "25px" }}>  GIS UTILITIES </i>
                        <a href="javascript:void(0)" className="closebtn" onClick={closeNav1} style={{ color: "#333" }}>&times;</a>
                        <div style={{ zIndex: "1", marginLeft: "5%", marginBottom: "10%", background: "white", overflowY: "scroll", height: "80%", width: "90%" }}>
                            <br />

                            <details>
                                <summary> <i className="fa fa-bank" style={{ fontSize: " 20px", color: "#333" }}></i> Landmarks</summary>
                                <div style={{ overflowY: "scroll", height: "120px", width: "100%" }}>

                                    <input type="checkbox" name="LandHospital" id="LandHospital" />Hospital <br />
                                    <input type="checkbox" name="PrimarySchool" id="LandPschool" />Primary School <br />
                                    <input type="checkbox" name="LandBank" id="LandBank" />Banks<br />
                                    <input type="checkbox" name="LandATM" id="LandATM" />ATMs<br />

                                    <input type="button" className="btn btn-success" value="Next" id="Nextlandmarks" onClick={ShowLandmark} />
                                    <div style={{ display: "none" }} id="landmarkarea">
                                        <select name="AreaSelect" id="AreaSelect" style={{ borderRadius: "5px" }}>
                                            <option value="Dehradun">Dehradun</option>
                                            <option value="Rājpur">Rājpur</option>
                                            <option value="Kalanga">Kalanga</option>
                                        </select><br />
                                        <input type="button" value="Go!" className="btn btn-success" id="LandmarksGo" />
                                    </div>
                                    <div id="LandShow" style={{ color: "#333", fontSize: "14px" }}></div>
                                </div>
                            </details>
                            <details>
                                <summary> <i className="fa fa-edit" style={{ color: "#333", fontSize: "20px" }}></i> Ward Information</summary>
                            </details>
                            <details>
                                <summary> <i style={{ color: "#333", fontSize: "20px" }} className="fa fa-arrows-alt"></i> Find Direction</summary>
                                <input type="checkbox" name="findlocation" id="findlocation" /> Find Direction From Map Click <br />
                                <input type="checkbox" name="findlocation" id="FindLoc" /> Find Direction From Coordinates <br />
                            </details>
                            <details>
                                <summary> <i className="fa fa-pie-chart" style={{ fontSize: "20px", color: "#333" }}></i> Real Time Dashboard</summary>
                                <select name="chrt" id="RealTime">
                                    <option value="Bank">Bank,ATM & Postoffice</option>
                                    <option value="Building">Bulding</option>
                                </select>
                                <input type="button" value="Go!" className="btn btn-success" onClick={DrawChartTest} />
                                <div id="piechart" style={{ display: "none" }}></div>
                            </details>
                            <details>
                                <summary>
                                    <i className="fa fa-crosshairs" style={{ color: "#333", fontSize: "20px" }}></i>
                                    <label htmlFor="track">
                                        track position
                    <input id="track" type="checkbox" />
                                    </label>
                                </summary>
                                <p>
                                    position accuracy :
                <code id="accuracy"></code>&nbsp;&nbsp; altitude : <code id="altitude"></code>&nbsp;&nbsp; altitude accuracy : <code id="altitudeAccuracy"></code>&nbsp;&nbsp; heading : <code id="heading"></code>
                    &nbsp;&nbsp; speed :
                <code id="speed"></code><code id="info"></code>
                                </p>

                            </details>
                            <div>
                                <div id="google_translate_element"></div>
                            </div>

                            <div id="CoordinateDataInfo"></div>
                        </div>

                    </div>
                    <button className="openbtn bg-dark" id="nav2" style={{ zIndex: "2", position: "absolute", right: "0px", cursor: "pointer" }} onClick={openNav1}>&#9776;</button>
                    {/* MAP  */}

                    <div>
                        <div id="map"  className="map" style={{ width: "100%", height: "600px" }} ></div>

                        <div id="popup" className="ol-popup">
                            <a href="#" id="popup-closer" className="ol-popup-closer"></a>
                            <div id="popup-content"></div>
                        </div>
                        <div id="ShowCoordinatesDetails" style={{ right: "0", zIndex: "4", position: "fixed", bottom: "0" }}></div>
                        <div style={{ zIndex: "1", position: "absolute", width: "100%" }}>
                            {/*  <PublicMap/>*/}
                        </div>
                    </div>
                    {/*<dialog id="FindLocDil" style={{ width: "50%", zIndex: "3", position: "absolute", textAlign: "center" }}>*/}
                    {/*    <p style={{ textAlign: "end" }}><i id="hide" className="fa fa-times-circle" style={{ fontSize: "25px" }}></i></p>*/}
                    {/*    <div style={{ width: "100%" }} id="find">*/}
                    {/*        <p style={{ backgroundColor: "cornflowerblue " }}>Find Location</p>*/}
                    {/*        <table style={{ width: "100%" }}>*/}
                    {/*            <tbody>*/}
                    {/*            <tr>Location From</tr>*/}
                    {/*            <tr>*/}
                    {/*                <td style={{ textAlign: "center" }}><i className="fa fa-map-marker" style={{ color: "#00c2ff", fontSize: "25px" }}></i></td>*/}
                    {/*                <td><input type="text" style={{ width: "100%" }} id="LatF" placeholder="Lat" /></td>*/}
                    {/*                <td><input type="text" style={{ width: "100%" }} id="LongF" placeholder="Long" /></td>*/}
                    {/*            </tr>*/}
                    {/*             </tbody>*/}
                    {/*        </table>*/}
                    {/*        <table style={{ width: "100%" }}>*/}
                    {/*            <tbody>*/}
                    {/*            <tr>Location To</tr>*/}
                    {/*            <tr>*/}
                    {/*                <td style={{ textAlign: "center" }}><i className="fa fa-map-marker" style={{ color: "red", fontSize: "25px" }}></i></td>*/}
                    {/*                <td><input type="text" style={{ width: "100%" }} id="LatT" placeholder="Lat" /></td>*/}
                    {/*                <td><input type="text" style={{ width: "100%" }} id="LongT" placeholder="Long" /></td>*/}
                    {/*                </tr>*/}
                    {/*                </tbody>*/}
                    {/*        </table><br />*/}
                    {/*        <p><button style={{ width: "50%" }} id="DireSearch"><i className="fa fa-arrow-circle-right" style={{ color: "royalblue" }}></i> Direction</button>*/}
                    {/*            <button style={{ width: "47%" }} id="Hide3"><i className="fa fa-paint-brush" style={{ color: "royalblue" }}></i>Clear</button>*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</dialog>*/}
                    {/*<dialog id="myFirstDialog" style={{float:"left", backgroundColor: "#f2f2f2", border: "1px dotted black", zIndex: "5", position: "absolute", textAlign: "center", width: "100%" }} >*/}
                    {/*             <label>Latitude</label>*/}
                    {/*             <input className="form-control" type="text" name="Lati" id="Lati" /><label>Longitude</label>*/}
                    {/*             <input className="form-control" type="text" name="Long" id="Long" /><br />*/}
                    {/*             <button className="btn btn-success" id="Search">Search</button>*/}
                    {/*             <button className="btn btn-danger" id="Hide2" >Close</button>*/}
                    {/*         </dialog>             */}
                    {/*         <dialog id="BookDialog" style={{backgroundColor:"#F4FFEF",border:"1px dotted black", zIndex: "5",position: "absolute",textAlign: "center",width: "50%"}}>*/}
                    {/*             <label htmlFor="Name">Name</label>*/}
                    {/*             <input className="form-control" type="text" name="NameBook" id="NameBook"/>*/}
                    {/*                 <label htmlFor="Description">Description</label>*/}
                    {/*                 <input className="form-control" type="text" name="DescBook" id="DescBook"/> <br/>*/}
                    {/*                     <button className="btn btn-success" id="AddBook">Add</button>*/}
                    {/*                     <button className="btn btn-danger" id="CancelBook">Cancel</button>*/}
                    {/*                      </dialog>  */}

                </div>
                <div>



                    {/*Dialog Boxes*/}
                    {/*Coordinates*/}
                    <div id="myModal" className="modal" style={{ zIndex: "7", position: "absolute" }}>
                        <div className="modal-content">
                            <span className="close" onClick={Hide}>&times;</span>
                            <label>Latitude</label>
                            <input className="form-control" type="text" name="Lati" id="Lati" /><label>Longitude</label>
                            <input className="form-control" type="text" name="Long" id="Long" /><br />
                            <button className="btn btn-success" id="Search" onClick={CoordSearch}>Search</button> <br />
                            <button className="btn btn-danger" id="Hide2" onClick={Hide} >Close</button>
                        </div>
                    </div>
                    {/*Bookmarks*/}
                    <div id="myModal1" className="modal" style={{ zIndex: "7", position: "absolute" }}>
                        <div className="modal-content">
                            <span className="close" onClick={HideBookmark}>&times;</span>
                            <label htmlFor="Name">Name</label>
                            <input className="form-control" type="text" name="NameBook" id="NameBook" />
                            <label htmlFor="Description">Description</label>
                            <input className="form-control" type="text" name="DescBook" id="DescBook" /> <br />
                            <button className="btn btn-success" id="AddBook" onClick={ADDBOOK}>Add</button> <br />
                            <button className="btn btn-danger" onClick={HideBookmark} >Close</button>
                        </div>
                    </div>

                    {/*Find Direction*/}
                    <div id="myModal2" className="modal" style={{ zIndex: "7", position: "absolute" }}>
                        <div className="modal-content">
                            <span className="close" id="HideFind">&times;</span>
                            <p style={{ textAlign: "end" }}><i id="hide" className="fa fa-times-circle" style={{ fontSize: "25px" }}></i></p>
                            <div style={{ width: "100%" }} id="find">
                                <p style={{ backgroundColor: "cornflowerblue" }}>Find Location</p>
                                <table style={{ width: "100%" }}>
                                    <tbody>
                                        <tr>Location From</tr>
                                        <tr>
                                            <td style={{ textAlign: "center" }}><i className="fa fa-map-marker" style={{ color: "#00c2ff", fontSize: "25px" }}></i></td>
                                            <td><input type="text" style={{ width: "100%" }} id="LatF" placeholder="Lat" /></td>
                                            <td><input type="text" style={{ width: "100%" }} id="LongF" placeholder="Long" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table style={{ width: "100%" }}>
                                    <tbody>
                                        <tr>Location To</tr>
                                        <tr>
                                            <td style={{ textAlign: "center" }}><i className="fa fa-map-marker" style={{ color: "red", fontSize: "25px" }}></i></td>
                                            <td><input type="text" style={{ width: "100%" }} id="LatT" placeholder="Lat" /></td>
                                            <td><input type="text" style={{ width: "100%" }} id="LongT" placeholder="Long" /></td>
                                        </tr>
                                    </tbody>
                                </table><br />
                                <p><button style={{ width: "50%" }} id="DireSearch"><i className="fa fa-arrow-circle-right" style={{ color: "royalblue" }}></i> Direction</button>
                                    <button style={{ width: "47%" }} id="Hide3"><i className="fa fa-paint-brush" style={{ color: "royalblue" }}></i>Clear</button>
                                </p>
                            </div>
                            <button className="btn btn-danger" onClick={HideBookmark} >Close</button>
                        </div>
                    </div>

                    {/*Iframe For ADVANCE SEARCh*/}

                </div>
            </div>
        );
    }
}
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav id="mainNavbar" className="navbar navbar-light navbar-expand-md  bg-light" style={{ backgroundColor: "#333", color: "white" }}>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks"> <span className="navbar-toggler-icon bg-info"></span> </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navLinks">
                        <ul className="navbar-nav">
                            <li className="nav-item"> <Link to="/" className="nav-link" ><label> HOME</label> </Link> </li>
                            <li className="nav-item"> <Link to="/about" className="nav-link" ><label>ABOUT</label></Link> </li>
                            <li className="nav-item"> <Link to="/SignIn" className="nav-link" > <label> SIGN IN </label> </Link> </li>
                            <li className="nav-item"> <Link to="/DehradunSS" className="nav-link btn btn-success" >  CITY GIS  </Link> </li>
                            {/*<li className="nav-item"> <a hrf="/Home/DehradunSS" className="nav-link" style={{ color: "white" }}> <label> SIGN IN </label> </a> </li>*/}
                        </ul>
                    </div>
                </nav>
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
           
        </div>

        <Route path="/" exact render={props => <div><Navbar /><Home /> </div>}/>
        
        <Route path="/SignIn" render={props => <div><Navbar /><SignIn /> </div>} />
        <Route path="/SignUp" render={props => <div><Navbar /><SignUp /> </div>} />
        <Route path="/About" render={props => <div><Navbar /><About /> </div>} />
        <Route path="/ForgotPass" render={props => <div><Navbar /><Forgotpass /> </div>} />
        <Route path="/DehradunSS" component={DehradunSS} />

    </ReactRouterDOM.HashRouter>
)


ReactDOM.render(
    <div>
        <App />

    </div>,
    document.getElementById('content')
);  