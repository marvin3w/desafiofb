import React from 'react';

function Header(){
  return(
    <header class="main-header">
      <h1>
        <img src="https://i.imgur.com/KDIDiSE.png" alt="Logo Facebook"/>
      </h1>
      <a href="#">
        <span>Meu perfil</span>
        <i className="material-icons">account_circle</i>
      </a>
    </header>
  )
}

export default Header;