import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <div className="header-nav">
            <Link to="/">Головна</Link>
            <Link to="/shop">Магазин</Link>
            <Link to="/shop">Про нас</Link>
            <Link to="/shop">Кошик</Link>
            {/* <ul>
                            <li><Link to="/">Головна</Link>     </li>
                            <li><Link to="/shop">Магазин</Link></li>
                            <li><Link to="/shop">Про нас</Link></li>
                            <li><Link to="/shop">Кошик</Link>   </li>
                            <li v-if="currentUser == null"><a :to="'/login'">Війти</a></li>
                            <li v-else><a :to="'/logout'">Вийти ({{currentUser.login}})</a></li>
                        </ul> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
