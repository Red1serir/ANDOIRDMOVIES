// Components/Search.js
import React from 'react'
import { StyleSheet ,View, TextInput, Button ,FlatList,Text,ActivityIndicator} from 'react-native'
import films from './helpers/filmsdata.js'
import FilmItems from './filmitems'
import {getFilmsFromApiWithSearchedText} from '../API/TMDB'
class Search extends React.Component {
    constructor(props)
    {
        super(props)
        this.searchedText = "",
        this.totalpages=0,
        this.page=0,
        this.state={films:[] ,
        is_loading:false,
        }  
      }
  
  _loadfilms(text)
  { this.setState({is_loading:true})
getFilmsFromApiWithSearchedText(text,this.page+1).then(data=>
  {this.page=data.page,
    this.totalpages=data.total_pages,
  this.setState(
  {
    
    films: this.state.films.concat(data.results) ,
    
    is_loading:false})
  })

}
  
  _searchTextInputChanged(text) {
    this.searchedText=text 
   // this._loadfilms(this.searchedText)
}
_displayLoading()
{
  if(this.state.is_loading)
  {
    return(<View style={styles.loading_container}>
      <ActivityIndicator size='large'/>

      
    </View>)
  }
}
_searchFilms()
{
  this.page=0;
  this.totalpages=0;
  this.setState({
    films:[]
  },()=>
 { console.log("totalpage:"+this.totalpages+"  pages:"+this.page)
  this._loadfilms(this.searchedText)
 } )
}
_displayfilmdetail=(idFilm)=>
 {
  console.log("Display film with id " + idFilm)
  this.props.navigation.navigate("filmdetail", { idFilm: idFilm })
}




    render() {
      
    return (
      <View style ={styles.maincontainer}>
        <TextInput  style= {styles.Textinput}
         placeholder='Titre du film'
          onChangeText={(text)=>this._searchTextInputChanged(text)}
          onSubmitEditing={()=>this._searchFilms()}
          />
        <Button style ={styles.button} title='Rechercher' onPress={() =>this._searchFilms()}/>
        <FlatList 
          data={this.state.films}
          
          keyExtractor={(item)=>item.id.toString()}
          renderItem={({item}) => <FilmItems films={item}
          displaydetailfilm={this._displayfilmdetail}
          
          />}
          onEndReachThreashold={0.5}
          onEndReached={()=>{
            if(this.page<this.totalpages)
            {
              this._loadfilms(this.searchedText);
            }
            
          }}
          
        />
    {this._displayLoading()}
     </View>
    )
  }
}
const styles =StyleSheet.create({
    Textinput:{ 
        
    
         height:50,
          borderColor: '#000000',
          borderBottomWidth: 2,
          
          paddingLeft:5
        
    },
    button:{
      color:'green'  
        
    },
    maincontainer:{
        flex :1,
    }, 
    loading_container:{
      position:'absolute',
      top:100,
      left:0,
      right:0,
      bottom:0,
      alignItems:'center',
      justifyContent:'center'
    },
})
export default Search