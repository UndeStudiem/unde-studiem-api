import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer'
import Home from './Home/Home'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Search from './Search/Search';
import Results from './Results/Results';



function App() {
  return (
    <div className="App">


<BrowserRouter basename="/">
      <Navbar/>

      <Switch>

        <Route exact path={`/`} exact component={Home}/>
        <Route exact path={`/search`} exact component={Search}/>
        <Route exact path={`/results`} exact component={Results}/>
        {/* <Route exact path={`/tests/:id`} exact component={TestPage}/>
        <Route exact path={`/createdtests`} exact component={CreatedTests}/>
        <Route exact path={`/createdtests/:id`} exact component={TestPage}/>
        <Route exact path={`/newtest`} exact component={CreateOrEditTest}/>
        <Route exact path={`/mygrades`} exact component={MyGrades}/>
        <Route exact path={`/catalog`} exact component={StudentsGrades}/>
        <Route exact path={`/activateusers`} exact component={NeactivatListPage}/>
        <Route exact path={`/users`} exact component={UsersPage}/>
        <Route exact path={`/profile`} exact component={MyProfile}/> */}


      </Switch>

      .
      <div>
        <Footer/>        
      </div>

    </BrowserRouter>
    </div>
  );
}

export default App;
