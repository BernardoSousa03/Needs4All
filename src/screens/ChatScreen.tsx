import {useState, useContext, useEffect} from 'react';
import {FlatList, View, StyleSheet, Keyboard} from 'react-native';
import ChatBubble from '../components/ChatBubble';
import { IconButton, TextInput } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { UserContext } from '../../store/user-context';

type Props = NativeStackScreenProps<RootStackParamList, 'ChatScreen'>;

function ChatScreen(props : Props){
    const [textInput, setTextInput] = useState('');

    const {deliveryUsername, deliveryEmail, messages} = props.route.params.messageContainer;

    const navigation = props.navigation;

    const userCtx = useContext(UserContext);

    const [updatedMessages, setUpdatedMessages] = useState(messages);

    function updateHandler(){
        setUpdatedMessages([...updatedMessages, {text : textInput, user : true}]);
        userCtx.addMessage(deliveryUsername, deliveryEmail,{text : textInput, user : true});
        setTextInput("");
        Keyboard.dismiss();
    }

    useEffect(() => {
        navigation.setOptions({title : deliveryUsername});
    })
    return (
        <View style={styles.root}>
            <FlatList
                style={styles.flatList}
                data={updatedMessages}
                renderItem={({item}) => <ChatBubble chat={item.text} user={item.user}/>}
                ItemSeparatorComponent={() => <View style={{height : 10}}/>}
            />
            <View style={styles.textInput}>
                <TextInput style={{flex : 1}} mode='outlined' onChangeText={setTextInput} onSubmitEditing={updateHandler} value={textInput}/>
                <IconButton icon={'send'} onPress={updateHandler}/>
            </View>
        </View>
    );
}

export default ChatScreen;

const styles = StyleSheet.create({
    root : {flex : 1, justifyContent : 'center', margin : 20},
    flatList : {flex : 1},
    textInput : {flexDirection : 'row', width : '100%'}
})