import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Category from './Category/Index';

export default class Header extends Component {
    render() {
        return (
           
            <div>
             
            <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">React</Link>
    </div>
    <ul className="nav navbar-nav">
     
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About us</Link></li>
      <li><Link to="/category">Category</Link></li>
    </ul>
    <form className="navbar-form navbar-right" action="">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Search" name="search"/>
      &nbsp;
      <button type="submit" style={{backgroundColor: "white"}} className="btn btn-default">Search</button>
      </div>
    </form>
  </div>
</nav>

              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/category" component={Category} />
              <Route exact path="/category/add" component={Category} />
              <Route exact path="/category/edit/:id" component={Category} />
            </div>
            
        );
    }
}


