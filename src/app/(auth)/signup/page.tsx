import { Link, router } from 'expo-router';
import colors from '@/constants/colors'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView, Alert } from "react-native";
import { useState } from 'react';
import { supabase } from "../../../lib/supabase"

export default function Signup(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const[loading, setLoading] = useState(false);

    async function handleSignUp(){
        alert("Cadastrando ...");

        // const { data, error } = await supabase.auth.signUp({
        //     email: email,
        //     password: password,
        //     options:{
        //         data:{
        //            name: name,     
        //         }
        //     }
        // })

        // if(error) {
        //     Alert.alert(error.message);
        //     setLoading(false);
        //     return
        // }

        // setLoading(false);
        // Alert.alert("Cadastrado com sucesso");
        // router.replace('/')
        // // // setTimeout(() => { }, 2000)
    }
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.viewBack}>
                        <Pressable onPress={ () => router.back() } style={styles.backButton}>
                            <Ionicons name="arrow-back" size={30} color={colors.green} />
                        </Pressable>
                        <Text style={styles.logoText}>
                            Dev <Text style={{color: colors.green}}>App</Text>
                        </Text>
                    </View>

                    <Text style={styles.slogan}>
                        Seu futuro passa por aqui.
                    </Text>
                </View>

                <View style={styles.form}>

                    <View style={styles.label}>
                        <Text style={styles.textLabel}>Nome Completo</Text>
                        <TextInput placeholder='Nome Completo'
                        value={name} onChangeText={setName}
                            style={styles.input} />
                    </View>
                    
                    <View style={styles.label}>
                        <Text style={styles.textLabel}>Email</Text>
                        <TextInput placeholder='Digite seu email'
                        value={email} onChangeText={setEmail}
                            style={styles.input} />
                    </View>

                    <View style={styles.label}>
                        <Text style={styles.textLabel}>Senha</Text>
                        <TextInput placeholder='Digite sua senha'
                            value={password} onChangeText={setPassword}
                        secureTextEntry style={styles.input} />
                    </View>

                    <Pressable style={styles.button} onPress={handleSignUp}>
                        <Text style={styles.buttonText}>
                            { loading ? 'Carregando...' : 'Cadastrar'}
                        </Text>
                    </Pressable>

                    <Link href="/" style={styles.link}>
                        <Text>Já tem uma conta?  
                            <Text style={styles.textCadastrar}></Text>
                        </Text>
                    </Link>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
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
        marginLeft: 5,
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
        paddingLeft: 3
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
    },
    viewBack:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    backButton: {
        backgroundColor: colors.zinc,
        padding: 8,
        borderRadius: 8,
        alignSelf: 'flex-start',
    }

})