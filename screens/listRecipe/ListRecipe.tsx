import * as React from 'react';
import { Text, View, TextInput, StyleSheet, Pressable, ScrollView, Image} from 'react-native';
import {useTailwind} from 'tailwind-rn';

function ListRecipe() {
    const tailwind = useTailwind();


    return (
        <View style={{flexDirection: 'column'}}>

            <View>

                <Text numberOfLines={1} style={tailwind('text-slate-700 mt-10 ml-6 font-semibold text-2xl')}>Dinners</Text>

                <ScrollView horizontal={true}>
                    <View style={tailwind('rounded-lg h-80 w-60 bg-orange-300 mt-20 ml-6 items-center')}>
                        <Image source= {require('../../assets/recipe_list_thumbnails/th1.jpg')}
                        style={tailwind('rounded-lg h-40 w-60')}/>
                        <Text style={tailwind('text-xl text-slate-100 mt-6')}>Smoked italian sausage</Text>
                        <Text style={tailwind('text-xl text-slate-100')}>with</Text>
                        <Text style={tailwind('text-xl text-slate-100 ')}>slow roasted potatoes</Text>
                    </View>
                    <View style={tailwind('rounded-lg h-80 w-60 bg-orange-600 mt-20 ml-6 items-center')}>
                        <Image source= {require('../../assets/recipe_list_thumbnails/th2.png')}
                        style={tailwind('rounded-lg h-40 w-60 ')}/>
                        <Text style={tailwind('text-xl text-slate-100 mt-10')}>Homemade</Text>
                        <Text style={tailwind('font-semibold text-xl text-slate-100')}>Chili</Text>
                    </View>
                    <View style={tailwind('rounded-lg h-80 w-60 bg-slate-200 mt-20 ml-6 items-center')}>
                        <Image source= {require('../../assets/recipe_list_thumbnails/th3.png')}
                        style={tailwind('rounded-lg h-40 w-60 ')}/>
                        <Text style={tailwind('font-semibold text-xl text-slate-700 mt-10')}>Enchiladas</Text>
                    </View>
                </ScrollView>
            </View>

            <View>

                <Text numberOfLines={1} style={tailwind('text-slate-700 mt-6 ml-6 font-semibold text-2xl')}>Categories:</Text>
                <ScrollView horizontal={true}>
                    <View style={tailwind('rounded-lg h-20 w-20 bg-orange-600 mt-10 ml-6 justify-center items-center')}>
                        <Text style={tailwind('text-slate-100 font-semibold')}>Dinner</Text>
                    </View>
                    <View style={tailwind('rounded-lg h-20 w-20 bg-slate-200 mt-10 ml-6 justify-center items-center')}>
                        <Text style={tailwind('text-slate-600')}>Breakfast</Text>
                    </View>
                    <View style={tailwind('rounded-lg h-20 w-20 bg-slate-200 mt-10 ml-6 justify-center items-center')}>
                        <Text style={tailwind('text-slate-600')}>Snacks</Text>
                    </View>
                    <View style={tailwind('rounded-lg h-20 w-20 bg-slate-200 mt-10 ml-6 justify-center items-center')}>
                        <Text style={tailwind('text-slate-600')}>Dessert</Text>
                    </View>
                    <View style={tailwind('rounded-lg h-20 w-20 bg-slate-200 mt-10 ml-6 justify-center items-center')}>
                        <Text style={tailwind('text-slate-600')}>Drinks</Text>
                    </View>
                </ScrollView>
            </View>

        </View>
    );
}

export default ListRecipe;
