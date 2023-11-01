import {View, StyleSheet} from 'react-native';
import { Text } from 'react-native-paper';

function ChatBubble({chat, user} : {chat : string; user : boolean}){
    return (
        <View style={styles.root}>
            <View style={{flex : 1, alignItems : user ? 'flex-end' : 'flex-start', justifyContent : 'flex-start'}}>
                <View style={[styles.bubbleContainer, user ? styles.userBubble : styles.notUserBubble]}>
                    <Text style={{color : user ? 'black' : 'white'}} variant='bodyLarge'>{chat}</Text>
                </View>
            </View>
        </View>
    );
}

export default ChatBubble;

const styles = StyleSheet.create({
    root : {flex : 1, flexDirection : 'row', width : '100%'},
    bubbleContainer : {flex : 1, borderRadius : 20, padding : 10, marginVertical : 5, maxWidth : '60%'},
    userBubble : {backgroundColor : 'white', color : 'black'},
    notUserBubble : {backgroundColor : 'blue', color : 'white'}
})