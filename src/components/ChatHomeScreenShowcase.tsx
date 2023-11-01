import {View, Image, StyleSheet, Pressable} from 'react-native';
import {Text} from 'react-native-paper';

import { userImagesRequires } from '../utils/imageConstants';
import { MessageContainer } from '../utils/types';

function ChatHomeScreenShowcase({onPress, messageContainer} : {onPress : () => void ; messageContainer : MessageContainer}){

    const userImage = userImagesRequires.find((value) => value[0] === messageContainer.deliveryUsername) || userImagesRequires[0];

    let lastMessage = messageContainer.messages.at(-1);
    console.log("lastMessage",lastMessage);
    let username = messageContainer.deliveryUsername;

    return(
        <Pressable onPress={onPress} style={styles.root}>
            <Image source={userImage[1]} style={styles.image} resizeMode='cover'/>
            <View style={styles.textContainer}>
                <Text variant='titleLarge'>{username}</Text>
                {lastMessage ? <Text variant='bodyMedium'>{lastMessage.text}</Text> : undefined}
            </View>
        </Pressable>
    );
}

export default ChatHomeScreenShowcase;

const styles = StyleSheet.create({
    root : {flex : 1, maxHeight : 200, width : '100%', flexDirection : 'row', justifyContent: 'center', alignItems : 'center'},
    image : {height : 50, width : 50, borderRadius : 50},
    textContainer : {padding : 15}
})