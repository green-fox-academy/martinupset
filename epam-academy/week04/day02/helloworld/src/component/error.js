import React from 'react'
import {BrowserRouter as Router,
Switch,
Route,
Link,
useParams} from 'react-router-dom'

function App(){
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to = '/'>Home</Link>
                    </li>
                    <li>
                        <Link to = '/error'>Error</Link>
                    </li>
                    <li>
                        <Link to = '/error/:code'>Error code</Link>
                    </li>
                    <li>
                        <Link to = '/:any'>Not implemented yet</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path = '/'>
                        <Home/>
                    </Route>
                    <Route exact path = '/error'>
                        <Error/>
                    </Route>
                    <Route path = '/error/:code'>
                        <ErrorCode/>
                    </Route>
                    <Route path = '/:any'>
                        <Imp/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

function Home(){
    return(
        <div>
            <h2>Hello world</h2>
        </div>
    )
}

function Error(){
    return(
        <div>
            <h2>something bad happen</h2>
        </div>
    )
}

function ErrorCode(){
    let {code} = useParams();
    return(
        <div>
            <h2>Error:{code}</h2>
        </div>
    )
}

function Imp(){
    return(
        <div>
            <h2>This page is not imp</h2>
        </div>
    )

}
export default App;