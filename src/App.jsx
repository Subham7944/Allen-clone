import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {

  return <div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Default />} />
        <Route path= "/neet" element = {<Layout />} >
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route path="/neet/landing" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
}

function Layout(){
  return <div style = {{height: "100vh", background: "grey"}}>
    <Headers />
    {/*Whatever the data/or the main page should 
    look like outlet will help us render this*/}
    <div style = {{height: "90vh", background: "red"}}>
      <Outlet /> 
    </div>

    footer
  </div>
}

function Default(){
  return <div>
    Allen Page
  </div>
}
function Headers(){
  return <div>
      <Link to="/neet/landing">Allen</Link>
      | 
      <Link to="/neet/online-coaching-class-11">Class 11</Link> 
      | 
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
  </div>
}

function Landing(){
  return <div>
    Welcome to allen
  </div>
}

function Class11Program(){
  return <div>
    NEET Program for class 11
  </div>
}

function Class12Program(){
  return <div>
    NEET Program for class 12
  </div>
}

export default App;
