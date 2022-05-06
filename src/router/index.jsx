import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

const Routers = (
    <Router>
        <Routes>
            <Route exact path='/' element={<ChildOne />}></Route>
            <Route path='/one' element={<ChildOne />}></Route>
            <Route path='/two' element={<ChildTwo />}></Route>
        </Routes>
    </Router>
)
export default Routers