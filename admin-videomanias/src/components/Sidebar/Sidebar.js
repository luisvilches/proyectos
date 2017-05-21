import React, { Component } from 'react';
import { Link } from 'react-router'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/dashboard'} className="nav-link"><i className="icon-speedometer"></i> Dashboard </Link>
              <Link to={'/productos'} className="nav-link"><i className="fa fa-puzzle-piece"></i> Productos </Link>
              <Link to={'/categorias'} className="nav-link"><i className="fa fa-calendar-o"></i> Categorias </Link>
              <Link to={'/familias'} className="nav-link"><i className="fa fa-star"></i> Familias </Link>
              <Link to={'/generos'} className="nav-link"><i className="fa fa-genderless"></i> Generos </Link>
              <Link to={'/banners'} className="nav-link"><i className="fa fa fa-flag-o"></i> Banners </Link>
              <Link to={'/publicidad'} className="nav-link"><i className="fa fa-info-circle"></i> Publicidad </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
