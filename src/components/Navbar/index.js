import React from 'react'
import { NavbarContainer, Title } from './styles'

const Navbar = ({ setValue }) => {
  return (
    <>
      <NavbarContainer>
        <div>
          <Title>Pokédex</Title>
        </div>
        {/* <SearchContainer>
          <Search
            type="text"
            placeholder="O que você está procurando ?"
            onChange={(event) => setValue(event.target.value)}
          ></Search>
        </SearchContainer> */}
      </NavbarContainer>
    </>
  )
}

export default Navbar
