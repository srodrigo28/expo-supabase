import colors from '@/constants/colors'
import { Link } from 'expo-router';
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

export default function Login(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logoText}>
                    Dev <Text style={{color: colors.green}}>App</Text>
                </Text>

                <Text style={styles.slogan}>
                    O futuro da programação
                </Text>
            </View>

            <View style={styles.form}>
                
                <View style={styles.label}>
                    <Text style={styles.textLabel}>Email</Text>
                    <TextInput placeholder='Digite seu email'
                        style={styles.input} />
                </View>

                <View style={styles.label}>
                    <Text style={styles.textLabel}>Senha</Text>
                    <TextInput placeholder='Digite sua senha'
                       secureTextEntry style={styles.input} />
                </View>

                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </Pressable>

                <Link href="/(auth)/signup/page" style={styles.link}>
                    <Text>Ainda não possui uma conta?  
                        <Text style={styles.textCadastrar}>Cadastra-se</Text>
                    </Text>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 34,
        backgroundColor: colors.darkBlue
    },
    header: {
        paddingHorizontal: 18,
        height: 200,
    },
    logoText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 50,
        paddingHorizontal: 14,
    },
    slogan: {
        fontSize: 34,
        marginTop: 50,
        marginBottom: 36,
        color: colors.white,
        textAlign: 'center'
    },
    form:{
        flex: 1,
        margin: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.white,
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    label:{
        color: colors.zinc,
        marginBottom: 20,
    },
    textLabel:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    input:{
        borderWidth: 1,
        borderRadius: 8,
        borderColor: colors.gray,
        paddingVertical: 16,
        paddingHorizontal: 8

    },
    button:{
        marginTop: 20,
        paddingVertical: 16,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        width: '100%',
        letterSpacing: 2,
        backgroundColor: colors.green
    },
    buttonText:{
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
    link: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
    },
    textCadastrar:{
        paddingLeft: 10,
        color: colors.green,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }

})