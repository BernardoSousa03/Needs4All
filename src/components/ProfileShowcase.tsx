import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-paper";
import { Profile } from "../utils/types";

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { userImagesRequires } from "../utils/imageConstants";

function ProfileShowcase({profile} : {profile : Profile}){

    const image = userImagesRequires.find((value) => value[0] === profile.name) || userImagesRequires[0];

    return (
        <View style={styles.root}>
            <Text variant="titleLarge">{profile.name}</Text>
            <Image source={image[1]} style={styles.image}/>
        </View>
    );
}

export default ProfileShowcase;

const styles = StyleSheet.create({
    root : {flex : 1, flexDirection : "row", justifyContent : 'space-around', alignItems : 'center'},
    image : {height : 100, width: 100, borderRadius : 50, overflow : 'hidden'}
})