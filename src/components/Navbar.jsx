import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  return (
      <header className="header">
        <div className="logo-header">
          Tienda<span> Deportiva</span><i class="fas fa-futbol"></i>

        </div>
       <nav className="nav-menu">
            <ul>
                <li><a >Productos</a></li>
                <li><a >Categorias</a></li>
                <li><a ><i class="fas fa-shopping-cart"></i>1</a></li>
                <li><a  onClick={() => loginWithRedirect()}>Iniciar Sesíon</a></li>
            </ul>
        </nav>

      </header>
  );
};

export default Navbar;
