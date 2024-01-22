import * as React from 'react';
import { Text, View, TextInput, StyleSheet, Pressable, Alert} from 'react-native';
import {useTailwind} from 'tailwind-rn';

function AddRecipe() {
    const [title, setTitle] = React.useState('');
    const tailwind = useTailwind();
    const [ingredients, setIngredients] = React.useState(['']); // Initial ingredient field

  function _addIngredient() {
    setIngredients([...ingredients, '']); // Add a new empty ingredient field
    Alert.alert("Simple button pressed");
  }

  function _updateIngredient(index, value) {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
  }

  function _removeIngredient(index) {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  }

  return (

    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>

        <View style={tailwind('bg-gray-200 px-3 py-1 rounded-full mt-6')}>
            <Text style={tailwind('text-black font-semibold')}>Add Recipe</Text>
        </View>


      <TextInput
          value={title}
          style={tailwind('rounded-full border-2 border-gray-400 px-36 mt-6')}
          placeholder="Recipe Title"
          onChangeText={setTitle}
      />

      {ingredients.map((ingredient, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            value={ingredient}
            style={tailwind('rounded-full border-2 border-gray-400 py-2 px-10 mt-4')}
            placeholder={`Ingredient ${index + 1}`}
            onChangeText={(value) => _updateIngredient(index, value)}
          />
          <Pressable onPress={() => _removeIngredient(index)} style={tailwind('rounded-full bg-gray-400 px-10 py-2 mt-4')}>
            <Text style={tailwind('text-black')}>Remove</Text>
          </Pressable>
        </View>
      ))}

    <Pressable style={tailwind('rounded-full bg-gray-400 px-10 py-2 mt-4')} onPress={_addIngredient}>
        <Text style={tailwind('text-black')}>Add Ingredient</Text>
      </Pressable>
    </View>

  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: 200
  },
});

export default AddRecipe;
