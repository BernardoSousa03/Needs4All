import {View, StyleSheet} from 'react-native';
import {Text, RadioButton} from 'react-native-paper';

function RadioButtonContainer({text ,checked, onPress} : {text : string, checked : boolean; onPress : (value : boolean) => void}){
    return (
        <View style={styles.RadioButtonContainer}>
            <Text variant='titleMedium' style={{width : '70%'}}>{text}</Text>
            <View style={{justifyContent : 'center', alignItems : 'center'}}>
                <RadioButton value='checked' status={checked ? 'checked' : 'unchecked'} onPress={() => onPress(!checked)}/>
            </View>
        </View>
    );
}

export default RadioButtonContainer;

const styles = StyleSheet.create({
    RadioButtonContainer : {width : '100%', flexDirection : 'row', justifyContent : 'space-around', marginVertical : 20},
});
