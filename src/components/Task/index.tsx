import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";


type Tasks = {
    nome : String;
    onRemove : () => void;
    isActive : () => void;
}

export function Task( {nome, onRemove, isActive}:Tasks){
    return(
        <View style={styles.container}>
            <View style={styles.check}>
                <TouchableOpacity 
                  style={styles.box} 
                  onPress={isActive}
                >
                </TouchableOpacity>
            </View>

           <Text style={styles.text}>
              {nome}
           </Text>

           <TouchableOpacity onPress={onRemove}>
              <Image source={require('../../../assets/trash.png')} />
           </TouchableOpacity>
                           
           </View>        
    );
}