let Link = ReactRouter.Link;


class Home extends React.Component {
    render() {
        return(
            <div>
                <Link to="/SignIn" >SignIn</Link>
                <Link to="/SignUp" >SignUp</Link>
                <Link to="/About" >About</Link>
            </div>
            )
        )
    }
}

ReactDOM.render(
    <div>
        <Home />
    </div>
    ,
    document.getElementById('content')
);  