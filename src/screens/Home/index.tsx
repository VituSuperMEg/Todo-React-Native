import React, { useState } from "react";
import { View, Image, Text, TextInput , TouchableOpacity, FlatList, Alert} from "react-native";
import { Task } from "../../components/Task";
import { styles } from "./styles";

export function Home(){
    
   const [count, setCount] = useState(0);
   const [tasks, setTasks] = useState<string[]>([]);
   const [taskName, setTaskName] = useState('');
   const [concluida, setConcluida] = useState(0);
   const [style, setStyle] = useState('');
    function adicionarTask(){
        setTasks(prevState => [...prevState, taskName]);
        setTaskName('');
        console.log(tasks);

        setCount(count + 1);
    }
    function removerTask(nome:String){
        Alert.alert("Remover", `Deseja remover essa mesma tarefa ${nome}` , [
            {
               text : "Sim",
               onPress : () => setTasks(preState => preState.filter(task => task !== nome)),
               
            },
            {
                text : "Não",
                style: "cancel"
            }
        ])
        setCount(count - 1);
        console.log('Removido');
    }
    function taskAtivada(nome:String){
        setConcluida(concluida + 1);
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                <Image source={require('../../../assets/Logo.png')} />

                <View style={styles.tabTask}>
                    <TextInput 
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor='#808080'
                    style={styles.tab}
                    onChangeText={setTaskName}
                     />
                     <TouchableOpacity 
                      style={styles.btn}
                      onPress={adicionarTask}
                      
                     >
                        <Text style={styles.btnText}>  +  </Text>
                     </TouchableOpacity>
                </View>
              </View>
            </View>
            
            <View style={styles.info}>
            <View style={styles.infoRow}>
             <View style={styles.infoCriada}>
                <Text style={styles.textTask}>
                    Criadas
                </Text>
                <View style={styles.ciclo}>
                    <Text style={styles.textCount}>
                        {count}
                    </Text>
                </View>
             </View>
             <View style={styles.infoResolvida}>
                <Text style={styles.textResolvida}>
                   Concluídas
                </Text>
                <View style={styles.ciclo}>
                    <Text style={styles.textCount}>
                        {concluida}
                    </Text>
                </View>
             </View>             
            </View>
              <View style={styles.border} />
            </View>
            <View style={styles.content}>
               <FlatList 
                data={tasks}
                keyExtractor={item => item}
                renderItem={({item}) => (
                   <Task
                   key={ item }
                   nome={ item }
                   onRemove={ () => removerTask(item)}
                   isActive={ () => taskAtivada(item)}
                  />
                )}
                showsHorizontalScrollIndicator={ false}
                ListEmptyComponent={() => (
                    <View style={styles.contentEmpty}>
                        <Image source={require('../../../assets/Clipboard.png')}/>
                    <Text style={styles.textBold}>
                      Você ainda não tem tarefas cadastradas
                    </Text>
                    <Text style={styles.textEmpty}>
                      Crie tarefas e organize seus itens a fazer
                    </Text>
                   </View>
                 )}
               />
            </View>
        </View>
    )
}