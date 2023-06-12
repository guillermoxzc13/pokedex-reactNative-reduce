import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, Modal, StyleSheet } from 'react-native';
import axios from 'axios';

const PokemonListItem = ({ pokemon, onDelete }) => {
  const [sprite, setSprite] = useState('');
  const [showDeleteOption, setShowDeleteOption] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    const getPokemonDetails = async () => {
      try {
        const response = await axios.get(pokemon.url);
        setSprite(response.data.sprites.front_default);
        setAbilities(response.data.abilities);
      } catch (error) {
        console.error(error);
      }
    };
    getPokemonDetails();
  }, []);

  const handleLongPress = () => {
    setShowDeleteOption(true);
  };

  const handlePress = () => {
    setShowDeleteOption(),
    !showDeleteOption && setShowModal(true);
  };

  const handleDelete = () => {
    onDelete();
  };

  const closeModal = () => {
    setShowModal(false);
    
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.boton}
        onLongPress={handleLongPress}
        onPress={handlePress}
      >
        <Image style={styles.image} source={{ uri: sprite }} />
        <Text style={styles.name}>{pokemon.name}</Text>
      </TouchableOpacity>
      {showDeleteOption && (
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteButtonText}>Eliminar</Text>
        </TouchableOpacity>
      )}

      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={styles.centerView}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Habilidades:</Text>
            <View style={styles.abilitiesContainer}>
              {abilities.map((ability) => (
                <Text style={styles.ability} key={ability.ability.name}>
                  {ability.ability.name}
                </Text>
              ))}
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View> 
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  boton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 8,
    padding: 10,
    
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
    deleteButton: {
    marginLeft:4,
    marginTop: 1,
    backgroundColor: 'red',
    padding: 9,
    borderRadius: 6,
  },
  deleteButtonText: {
    height:50,
    color: 'white',
    fontWeight: 'bold',
  },
  modalContainer: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  centerView: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  abilitiesContainer: {
    alignSelf: 'stretch',
    marginBottom: 16,
    
  },
  ability: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'red',
    marginTop: 5,
    padding: 8,
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PokemonListItem;

/* mport React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import axios from 'axios';

const PokemonListItem = ({ pokemon, onDelete }) => {
  const [sprite, setSprite] = useState('');
  const [showDeleteOption, setShowDeleteOption] = useState(false);
  const [showAbilities, setShowAbilities] = useState(false);
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    const getPokemonDetails = async () => {
      try {
        const response = await axios.get(pokemon.url);
        setSprite(response.data.sprites.front_default);
        setAbilities(response.data.abilities);
      } catch (error) {
        console.error(error);
      }
    };
    getPokemonDetails();
  }, []);

  const handleLongPress = () => {
    setShowDeleteOption(true);
  };

  const handlePress = () => {
    setShowDeleteOption();
    setShowAbilities(!showAbilities);
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.boton}
        onLongPress={handleLongPress}
        onPress={handlePress}
      >
        <Image style={styles.image} source={{ uri: sprite }} />
        <Text style={styles.name}>{pokemon.name}</Text>
      </TouchableOpacity>
      {showAbilities && (
        <View style={styles.abilitiesContainer}>
          <Text style={styles.abilitiesTitle}>Habilidades:</Text>
          {abilities.map((ability) => (
            <Text style={styles.ability} key={ability.ability.name}>
              {ability.ability.name}
            </Text>
          ))}
        </View>
      )}
      {showDeleteOption && (
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteButtonText}>Eliminar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}; */






/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  boton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 8,
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#ff0000',
    borderRadius: 8,
    padding: 10,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});  */

