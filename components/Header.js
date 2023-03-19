
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return(
   ( <View >
        <Text style={styles.header}>TODO LIST</Text>
    </View>
));
   }
const styles=StyleSheet.create({
    header:{
        height:80,
        backgroundColor:'coral',
        marginTop:20,
        textAlign:'center',
        textAlignVertical:'center',
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    }

})