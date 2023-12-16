import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import Succes from './Succes';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams,

} from "react-router-dom";

function App() {
    const [all, setAll] = useState({})


    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Signup onSignup={(email, password) => setAll({ email, password })} />} />

                    <Route path="/Login" element={<Login onLogin={(emails, passwords) => {
                        if (all.email === emails && all.password === passwords) {
                            return '/success'

                        } else {

                            window.location.href = ('/Login')
                            console.log("Invalid")
                            
                        }
                    }
                    } />} />
                    <Route path="/success" element={<Succes />} />

                </Routes>
            </Router>

        </div>
    )
}

export default App;














