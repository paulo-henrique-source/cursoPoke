import React, { useState, useEffect, } from 'react'
import Navbar from '../../components/Navbar'
import Background from '../../components/Background'
import { CardContainer, HomeContainer } from './styles'
import PokemonCard from '../../components/PokemonCard'
import api from '../../services/api'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from '../../components/Loading'
import { Capitalize } from '../../utils/strFormat'

const Home = () => {
  const [pokemonName, setPokemonName] = useState([])
  const [pokemonInfo, setPokemonInfo] = useState([])
  const [pokemonLimit] = useState(20)
  const [pokemonOffSet, setPokemonOffSet] = useState(pokemonLimit)
  const [isLoading, setIsLoading] = useState(false)

  const handleGetPokemonStats = (pokemons) => {
    try {
      pokemons.map((pokemon) =>
        api.get(`/pokemon/${pokemon.name}`).then((response) => {
          const result = response.data
          setPokemonInfo((prevState) =>
            [...prevState, result].sort((a, b) => {
              return a.id - b.id
            })
          )
        })
      )
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGetPokemonName = (
    async (filteredPokemons) => {
      try {
        setIsLoading(true)
        if (filteredPokemons) {
          setPokemonName(filteredPokemons)
          setPokemonInfo([])
          filteredPokemons.map((pokemon) =>
            api.get(`/pokemon/${pokemon.name}`).then((response) => {
              const result = response.data
              setPokemonInfo((prevState) =>
                [...prevState, result].sort((a, b) => {
                  return a.id - b.id
                })
              )
            })
          )
        } else {
          const response = await api.get('pokemon', {
            params: {
              limit: pokemonLimit,
            },
          })
          if (response) {
            setPokemonName(response.data.results)
            handleGetPokemonStats(response.data.results)
          }
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    })



  const handleLoadNewPokemons = async () => {
    try {
      setIsLoading(true)
      const response = await api.get('pokemon', {
        params: {
          limit: pokemonLimit,
          offset: pokemonOffSet,
        },
      })
      if (response) {
        setPokemonName((prevState) => [...prevState, ...response.data.results])
        handleGetPokemonStats(response.data.results)
        setPokemonOffSet((prevState) => prevState + pokemonLimit)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }


  useEffect(() => {
    handleGetPokemonName()
  }, [])

  return (
    <>
      <InfiniteScroll
        dataLength={pokemonInfo.length}
        next={handleLoadNewPokemons}
        hasMore={isLoading ? false : true}
        scrollThreshold={0.9}
      >
        <Background />
        <HomeContainer>
          <Navbar />

          <CardContainer>
            {isLoading ? <Loading /> : <></>}
            {pokemonInfo ? (
              pokemonName.map((pokemon, index) => (
                <PokemonCard
                  color={pokemonInfo[index]?.types}
                  key={index}
                  code={`#${pokemonInfo[index]?.id}`}
                  name={Capitalize(pokemon.name)}
                  badges={pokemonInfo[index]?.types}
                  image={
                    pokemonInfo[index]?.sprites.other['official-artwork']
                      .front_default
                  }
                />
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </CardContainer>
        </HomeContainer>
      </InfiniteScroll>
    </>
  )
}

export default Home
