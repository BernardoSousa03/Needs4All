import { useContext } from "react";
import { FlatList, View, StyleSheet } from "react-native";

import {Text} from 'react-native-paper';
import ChatHomeScreenShowcase from "../components/ChatHomeScreenShowcase";

import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { BottomTabParamList } from "./MainScreen";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import { UserContext } from "../../store/user-context";

type chatUser = {username : string; userImageName : string; lastMessage : string};



type Props = CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, "ChatHomeScreen">, 
    NativeStackScreenProps<RootStackParamList>
>;

function ChatHomeScreen(props : Props){
    const userCtx = useContext(UserContext);

    const data = userCtx.mensagens;

    const navigation = props.navigation;


    return (
        <View style={styles.root}>
            <View>
                <Text variant="displayLarge">Messages</Text>
            </View>
            {data.length !== 0 ? <FlatList
                data={data} 
                renderItem={({item}) => <ChatHomeScreenShowcase onPress={() => navigation.navigate("ChatScreen", {messageContainer : item})} 
                messageContainer={item} />}
            />
            : <Text variant="titleSmall" style={{marginVertical : 50}}>No messages yet!</Text>}
        </View>
    );
}

export default ChatHomeScreen;

const styles = StyleSheet.create({
    root : {flex : 1, justifyContent: 'flex-start',alignItems : 'center', margin : 20}
})