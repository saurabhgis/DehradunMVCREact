

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
            var coord = Link.split("=");
            console.log(coord);
            var cd = coord[1].split("/");
            console.log(cd);
            document.getElementById("tbody").innerHTML += "<tr><td><a style='color:black;cursor: pointer;'  onclick='bookmarkd(" + cd[0] +","+cd[1]+"," +cd[2] + ")'>" + NameBook + "</a></td>" +
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
                    fetch('http://localhost:8081/geoserver/DehradunGIS/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=DehradunGIS%3Abankforlandmark&maxFeatures=50&outputFormat=application%2Fjson')
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
                    fetch('http://localhost:8081/geoserver/DehradunGIS/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=DehradunGIS%3Aatmsforlandmark&maxFeatures=50&outputFormat=application%2Fjson')
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
                    fetch('http://localhost:8081/geoserver/DehradunGIS/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=DehradunGIS%3Apostoffice&maxFeatures=50&outputFormat=application%2Fjson')
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
                    fetch('http://localhost:8081/geoserver/DehradunGIS/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=DehradunGIS%3Astate%20government%20office&maxFeatures=50&outputFormat=application%2Fjson')
                        .then(function (res) {
                            res.text().then(function (data) {
                                var data = JSON.parse(data);
                                StateCount = data.features.length;
                                console.log(StateCount);
                                Fetch2();
                            })
                        });

                    function Fetch2(params) {
                        fetch('http://localhost:8081/geoserver/DehradunGIS/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=DehradunGIS%3Acentral%20government%20buildings&maxFeatures=50&outputFormat=application%2Fjson')
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
                                    {/*<a id="LogOut" className="nav-item nav-link" style={{ color: "white", textAlign: "center" }}><i className="fa fa-user" style={{ fontSize: "30px" }}><br /> <label htmlFor="Account" style={{ fontSize: "15px" }}> Log Out</label></i></a>*/}

                                </div>
                            </div>
                        </nav>
                    </div>

                    <nav id="changenavfoot" className="navbar fixed-bottom navbar-expand-lg navbar-light bg-dark" style={{ background: "royalblue", marginLeft: "38%", marginRight: "38%" }}>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a id="home" className="nav-link" href="#"> <i className="fa fa-home" style={{ fontSize: "30px" }}></i></a>
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

                    <div id="iframeHolder" style={{ display: "none" }}>

                    </div>
                    <div id="iframeHolder2" style={{ display: "none" }}></div>
                    {/*Around me */}
                    <div id="mySidenav1" className="sidenav1" style={{ zIndex: "3", position: "absolute" }}>
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
                    <div style={{ zIndex: "2", position: "absolute", overflowY: "scroll" }}>
                        <div id="mySidepanel" className="sidepanel" >
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
                                <form id="LayerForm">
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
                                    <table width="100%">
                                        <tbody id="tbody">

                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>


                    {/* DASHBOARD */}


                    <div id="mySidenav" className="sidenav" style={{ zIndex: "3", position: "absolute" }}>
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
                        <div id="map" className="map" style={{ width: "100%", height: "600px" }} ></div>

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
                                            <td><input type="text" style={{ width: "100%" }} id="LatF" placeholder="Lat" className="form-control" /></td>
                                            <td><input type="text" style={{ width: "100%" }} id="LongF" placeholder="Long" className="form-control" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table style={{ width: "100%" }}>
                                    <tbody>
                                        <tr>Location To</tr>
                                        <tr>
                                            <td style={{ textAlign: "center" }}><i className="fa fa-map-marker" style={{ color: "red", fontSize: "25px" }}></i></td>
                                            <td><input type="text" style={{ width: "100%" }} id="LatT" placeholder="Lat" className="form-control"/></td>
                                            <td><input type="text" style={{ width: "100%" }} id="LongT" placeholder="Long" className="form-control" /></td>
                                        </tr>
                                    </tbody>
                                </table><br />
                                <p><button style={{ width: "50%" }} id="DireSearch"><i className="fa fa-arrow-circle-right" style={{ color: "royalblue" }}></i> Direction</button>
                                    {/*<button style={{ width: "47%" }} id="Hide3"><i className="fa fa-paint-brush" style={{ color: "royalblue" }}></i>Clear</button>*/}
                                </p>
                            </div>
                            <button className="btn btn-danger" onClick={HideBookmark} >Close</button>
                        </div>
                    </div>


                    <dialog id="dialog2" style={{ top: "35%", padding: "8px", width: "350px", height: "200px", zIndex: "7", border: "black", borderRadius: "10px" }}>
                        <section style={{ padding: "9px", textAlign: "center" }}>
                            
                            <i className="fa fa-exclamation-circle fa-3x" style={{ color: "goldenrod" }}></i><br></br><br></br>
                                Please Click on Map to Identify/Point Your Location
                            <br/><br/>
                            <button id="dia2Close" className="btn btn-danger">Ok</button>
                        </section>
                        <p></p>
                    </dialog>

                    {/*Iframe For ADVANCE SEARCh*/}

                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <div>
        <DehradunSS />
    </div>,
    document.getElementById('root')
);  