let render = ReactDOM.render;
let browserHistory = ReactRouter.browserHistory;
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let IndexRoute = ReactRouter.IndexRoute;
let Link = ReactRouter.Link;

render((

    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
        </Route>
    </Router>

), document.getElementById('root'))