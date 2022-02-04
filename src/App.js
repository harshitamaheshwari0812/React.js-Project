
import React from 'react';
import './App.css';
import DisplayEmp from './Components/DisplayEmp';
import GetPosts from './Components/GetPosts';
import IncreaseQty from './Components/IncreaseQty';
import Login from './Components/Login';
import SubmitPost from './Components/SubmitPost';
import { UserProvider } from './Components/UserContext';

import Home  from './Components/MyWebPage/Home';
import About from "./Components/MyWebPage/About"
import Contact from './Components/MyWebPage/Contact';
import PageNotFound from './Components/MyWebPage/PageNotFound';
// import Employee from './Components/Employee';
// import ErrorBoundary from './Components/ErrorBoundary';
// import DisplayEmployee from "./Components/DisplayEmployee"
// import {ClassComp} from "./Components/ClassComp"
// import DisplayEmp from "./Components/DisplayEmp"
// import CountChar from './Components/CountChar';
// import TableFragment  from './Components/TableFragment';
// import logo from "./assets/images/a.jpg"
import EmpList from './Components/EmpList'
//import ConditionalRendering from "./Components/ConditionalRendering"
//import LifeCycle from "./Components/LifeCycle"
// import AddEmployee from './Components/AddEmployee';
// import Formusingformik from './Components/Formusingformik';
import {Route, Routes,NavLink} from 'react-router-dom'
import {Nav, Navbar, Container} from 'react-bootstrap'
import EditPost from './Components/EditPost';
import HookuseState from './Components/HookuseState';
import HookuseEffect from './Components/HookuseEffect';
import Comp1 from './Components/Comp1';

export const UserContext=React.createContext()
export const AdminContext=React.createContext()
class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:{Id:101,Name:"ram"}
    }
  }
  
  changeData=()=>{
    this.setState({data:{Id:110,Name:"Infoway"}})
  }
  render(){
  return (
    <div className="container m-5">
        {/* <img src={'/logo512.png'} style={{width:"100px"}} />
        <img src={logo} />
      <img src={require('./assets/images/c2.jpg')}/> */}

        {/* <h1 className='bg-primary'>React App</h1> */}
        {/* <DisplayEmployee id="101" name="smith" salary="400000"></DisplayEmployee> */}
        {/* <ClassComp/> */}
        {/* <DisplayEmp id="101" name="smith" count="0" basicsal="29000" hra="5000" sa="6000"></DisplayEmp> */}
        {/* <CountChar/> */}
        {/* <TableFragment/> */}
        {/* <EmpList/> */}
        {/* <ConditionalRendering/> */}
        {/* <LifeCycle addr="Infoway"/> */}
         {/* <AddEmployee/> */}
         {/* <Formusingformik/> */}

         {/* <ErrorBoundary>
         <Employee name="Smith"/>
         </ErrorBoundary>
         <ErrorBoundary>
         <Employee name="Peter"><p>data</p></Employee>
         </ErrorBoundary>
        <ErrorBoundary>
         <Employee name="joker"></Employee>
         </ErrorBoundary> */}
         {/* <IncreaseQty/> */}
         {/* <Login/> */}
         {/* <button onClick={this.changeData}>To change context data</button>
         <UserProvider value={this.state.data}>
              <DisplayEmp/>
         </UserProvider> */}
          {/* <GetPosts/> */}
          {/* <SubmitPost/> */}
          {/* <Navbar bg="dark" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="#home">React</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><NavLink to="/home" className="linkclass">Home</NavLink></Nav.Link>
        <Nav.Link><NavLink to="/about" className="linkclass">About</NavLink></Nav.Link>
        <Nav.Link><NavLink to="/contact" className="linkclass">Contact</NavLink></Nav.Link>
        <Nav.Link><NavLink to="/GetPosts" className="linkclass">Show Posts</NavLink></Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}
    
      {/* <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/home' element={<Home />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route exact path='/contact' element={<Contact />}></Route>
      <Route exact path='/contact/emp' element={<EmpList />}></Route>
      <Route exact path='/GetPosts' element={<GetPosts />}></Route>
      <Route exact path='/GetPosts/:id' element={<EditPost/>}></Route>
      <Route exact path="*" element={<PageNotFound />}/>
      </Routes> */}

          {/* <HookuseState/> */}
          {/* <HookuseEffect/> */}

    <UserContext.Provider value={'Infoway'}>
        <AdminContext.Provider value={'Admin'}>
                   <Comp1/>
          </AdminContext.Provider>
    </UserContext.Provider>
    </div>
  );
}
}
export default App;

