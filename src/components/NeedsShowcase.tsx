import {Image, StyleSheet, Pressable} from 'react-native';
import { Text } from 'react-native-paper';

import { needsImageRequires } from '../utils/imageConstants';
import { Needs } from '../utils/types';

function NeedsShowcase({ onPress, needsData} : {onPress : () => void ;needsData : Needs}){

    const imageString = needsData.image;

    const image = needsImageRequires.find((value) => value[0] === imageString) || needsImageRequires[0]

    return (
        <Pressable onPress={onPress} style={styles.root}>
            <Image resizeMode='contain' source={image[1]} style={styles.image}/>
            <Text>{needsData.name}</Text>
        </Pressable>
    );
}

export default NeedsShowcase;

const styles = StyleSheet.create({
    root : {maxHeight: 200, maxWidth: 100},
    image : {height: 100, width: 100, borderRadius : 5}
})