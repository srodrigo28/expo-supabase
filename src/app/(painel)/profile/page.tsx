import { View, Text, StyleSheet } from "react-native";

export default function Profile(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Perfil Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    title: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    }

})