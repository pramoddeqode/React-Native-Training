import { BaseRouter } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView,TouchableOpacity,Text,View, Image,FlatList,StyleSheet} from 'react-native';

const HomeScreen = (props) => {
    const Data = [
        {
          id: '1',
          title: 'John Doy',
          img:require('../assets/images/man1.png'),
          mail:'john@gmail.com'
        },
        {
            id: '2',
            title: 'Roman Doy',
            img:require('../assets/images/man2.jpeg'),
            mail:'roman@gmail.com'
          },
        
      ];
  return (
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList
             data={Data}
             renderItem={({item})=>(
                <View>
            <View style={styles.row}> 
                <TouchableOpacity style={styles.imgback} onPress={()=>props.navigation.navigate('ProfileScreen',{item:item})}>
                  <Image style={styles.img} source={item.img} />
               </TouchableOpacity>
               <View>
               <Text style={styles.title}>{item.title}</Text>
               <Text style={styles.mail}>{item.mail}</Text>
               </View>
               
             </View>
             <View style={styles.line}/>
             </View>
        )}
        />
        </View>
       
    
      </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    img:{
      resizeMode:'contain' ,
      height:60,
      width:60,
      borderRadius:25
      
    },
    imgback:{
       backgroundColor:"white",
       borderRadius:35, 
       height:65,
       width:65,
       alignItems:'center',
       justifyContent:'center',
       borderColor:'gray',
       borderWidth:1
    },
    row:{
        flexDirection:"row",
        alignItems:'center',
       margin:10
    },
    title:{
        color:'black',
        fontSize:22,
        fontWeight:'600',
        marginLeft:15
       
     },
     mail:{
        color:'black',
        fontSize:14,
        fontWeight:'500',
        marginLeft:15
       
     },
     line:{
        borderWidth:0.3,
        borderBottomColor:'gray',
        marginVertical:8
        
     }
}
)
   