import React, { useEffect, useState } from 'react'
import {
  Container,
  Pokedex,
  ChangeCard,
  DescriptionInfo,
  TypeWrapper,
} from './styles.js'
import Pokeball from '../../assets/patterns/pokeballAbout.svg'
import TypeIcons from '../TypeIcons/index.js'

const PokemonCardInfo = ({
  color,
  description,
  species,
  height,
  weight,
  weaknesses,
  catchRate,
  baseFriendship,
  growthRate,
}) => {
  const [isAboutVisible, setIsAboutVisible] = useState(true)
  const [isStatsVisible, setIsStatsVisible] = useState(false)
  const [isEvolutionVisible, setIsEvolutionVisible] = useState(false)

  useEffect(() => {
    console.log(color)
  })

  const handleActiveAboutVisible = () => {
    setIsAboutVisible(true)
    setIsStatsVisible(false)
    setIsEvolutionVisible(false)
  }
  const handleActiveStatsVisible = () => {
    setIsAboutVisible(false)
    setIsStatsVisible(true)
    setIsEvolutionVisible(false)
  }
  const handleActiveEvolutionVisible = () => {
    setIsAboutVisible(false)
    setIsStatsVisible(false)
    setIsEvolutionVisible(true)
  }

  return (
    <>
      <ChangeCard>
        <button
          className={isAboutVisible ? 'active' : ''}
          onClick={() => handleActiveAboutVisible()}
        >
          About
          {isAboutVisible && <img src={Pokeball} alt="Pokeball"></img>}
        </button>

        <button
          className={isStatsVisible ? 'active' : ''}
          onClick={() => handleActiveStatsVisible()}
        >
          Stats
          {isStatsVisible && <img src={Pokeball} alt="Pokeball"></img>}
        </button>
        <button
          className={isEvolutionVisible ? 'active' : ''}
          onClick={() => handleActiveEvolutionVisible()}
        >
          Evolution
          {isEvolutionVisible && <img src={Pokeball} alt="Pokeball"></img>}
        </button>
      </ChangeCard>
      <Container>
        {isAboutVisible && (
          <>
            <p>{description}</p>
            <Pokedex color={color}>
              <div>
                <h3>Pokedex Data</h3>
                <DescriptionInfo>
                  <div>
                    <h2>Species</h2>
                  </div>
                  <div>
                    <p>{species}</p>
                  </div>
                </DescriptionInfo>
                <DescriptionInfo>
                  <div>
                    <h2>Height</h2>
                  </div>
                  <div>
                    <p>{height}</p>
                  </div>
                </DescriptionInfo>
                <DescriptionInfo>
                  <div>
                    <h2>Weight</h2>
                  </div>
                  <div>
                    <p>{weight}</p>
                  </div>
                </DescriptionInfo>
                <DescriptionInfo>
                  <div>
                    <h2>Weaknesses</h2>
                  </div>
                  <TypeWrapper>
                    <TypeIcons badgesList={weaknesses} />
                  </TypeWrapper>
                </DescriptionInfo>
              </div>
              <div>
                <h3>Training</h3>
                <DescriptionInfo>
                  <div>
                    <h2>Catch Rate</h2>
                  </div>
                  <div>
                    <p>{catchRate}</p>
                  </div>
                </DescriptionInfo>
                <DescriptionInfo>
                  <div>
                    <h2>Base Friendship</h2>
                  </div>
                  <div>
                    <p>{baseFriendship}</p>
                  </div>
                </DescriptionInfo>
                <DescriptionInfo>
                  <div>
                    <h2>Growth Rate</h2>
                  </div>
                  <div>
                    <p>{growthRate}</p>
                  </div>
                </DescriptionInfo>
              </div>
            </Pokedex>
          </>
        )}
      </Container>
    </>
  )
}

export default PokemonCardInfo
