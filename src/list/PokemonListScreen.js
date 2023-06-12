import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, TextInput} from 'react-native';
import PokemonListItem from './PokemonListItem';
import axios from 'axios';

const PokemonListScreen = () => {
  
  const [pokemons, setPokemons] = useState([]);

  const [searchText, setSearchText] = useState('');

  const deletePokemon = (pokemon) => {
    const updatedPokemons = pokemons.filter(p => p.name !== pokemon.name);
    setPokemons(updatedPokemons);
  }

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setPokemons(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getPokemons();
  }, []);

  const renderItem = ({ item }) => {
    // No mostrar el elemento si no coincide con el texto de búsqueda
    if (searchText && !item.name.includes(searchText.toLowerCase())) {
      return null; 
    }
    return (
      <PokemonListItem pokemon={item} onDelete={() => deletePokemon(item)} />
    );
  };

  return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar Pokémon"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
      </View>
        <FlatList
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.url}
        renderItem={renderItem}
      />
      </View>
  )};

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 8,
  }

});

export default PokemonListScreen; 