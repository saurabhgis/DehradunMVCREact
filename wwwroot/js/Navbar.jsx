
class NavBar extends React.Component {
    render() {

        return (
            <div>
                <div>
                    <nav id="mainNavbar" className="navbar navbar-dark navbar-expand-md py-0 fixed-top">
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks">
                            <span className="navbar-toggler-icon bg-info"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navLinks">
                            <ul className="navbar-nav">
                                <li className="nav-item"> <a href="Home/DehradunHome" className="nav-link" style={{ color: "black" }}>HOME</a> </li>
                                <li className="nav-item"> <a href="Home/About" className="nav-link" style={{ color: "black" }}>ABOUT</a> </li>
                                <li className="nav-item"> <a href="Home/SignIn" className="nav-link" style={{ color: "black" }}>SIGN IN</a> </li>
                                <li className="nav-item"> <a className="btn btn-success" href="Home/DehradunSS"> City Gis</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <NavBar />
    </div>
    ,
    document.getElementById('NavBarId')
);  