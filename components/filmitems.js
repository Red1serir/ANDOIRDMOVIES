
import React from 'react'
import { StyleSheet ,View, TextInput, Button ,FlatList,Text,Image, TouchableOpacity} from 'react-native'
import films from './helpers/filmsdata'
import {getImageFromApi} from '../API/TMDB'
class FilmItems extends React.Component {
  render() {
      const film=this.props.films;
      const displaydetailfilm=this.props.displaydetailfilm;
    return (
        < TouchableOpacity style={styles.maincontainer}
        onPress={()=>displaydetailfilm(film.id)}
        >
            <Image
             style={styles.image}
             source={{uri: getImageFromApi(film.poster_path)}}
            />
            

            
          
        <View style={styles.content_container}  >

              <View  style={styles.header}>
         
          <Text style={styles.titre }> {film.title} </Text>
    
    
        <Text style={styles.vote }> {film.vote_average}</Text>
    
        </View>
        <View style={styles.description_container}>
            <Text style={styles.description} numberOfLines={6}>
            {film.overview}
            </Text>
        </View>
        <View style={styles.date_container}>
            <Text style={styles.date} >
                sortie le : { film.release_date}
            </Text>
        </View>
        
        </View>
        </ TouchableOpacity>
        
        

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
    flexDirection:'row',
    height:190,
    }, 
    titre:{
        fontSize: 20,
    fontWeight: 'bold',
    flex:1,
    flexWrap:'wrap',
    paddingRight:5,
      }
      ,image:{
          width:120,height:180,margin:5,
      }
      ,vote:{
          fontWeight:'bold',
          fontSize:26,
          color:'#666666',
      }
      ,header:{
        flex:3,

          flexDirection:'row',

      },
      content_container:{
          flex:1,
          margin:5,

      },
      description : {
          fontStyle:'italic',
          color:'#666666',

      },
      description_container:{
          flex:7,


      },
      date_container:{
          flex:2,
          flexDirection:'row-reverse'

      },
})
export default FilmItems