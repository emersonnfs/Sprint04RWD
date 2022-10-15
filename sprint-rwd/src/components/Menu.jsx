import React from 'react';
import { DivMenu, LogoMenu } from '../style/styled';
import { Link } from 'react-router-dom'

function Menu() {


  return(
    <DivMenu>
        <nav>
            <Link to="/"><LogoMenu>SolveUS</LogoMenu></Link>
        </nav>
    </DivMenu>
  )
}

export default Menu;