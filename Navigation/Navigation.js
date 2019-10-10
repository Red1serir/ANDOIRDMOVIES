// Navigation/Navigation.js

import { createAppContainer } from 'react-navigation'
import Search from '../components/Search'
import {createStackNavigator}from 'react-navigation-stack'
import filmdetail from '../components/filmdetails'
const SearchStackNavigator = createStackNavigator({
  Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  }, filmdetail: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
  screen: filmdetail,
}
})
export default createAppContainer(SearchStackNavigator)