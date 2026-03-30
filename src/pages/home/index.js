import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            
            <Image 
                source={require('../../assets/Gemini_Generated_Image_b8rw5ib8rw5ib8rw (1).png')} 
                style={styles.logo} 
                resizeMode="contain"
            />

            <View style={styles.content}>
                <Text style={styles.sobre}>
                    A Resona-7 é a melhor loja de artigos de hardware e software para o mundo! 
                    Não importa a distância, todos estamos conectados - nós só fornecemos os cabos.
                </Text>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate('Products')}
                >
                    <AntDesign name="shopping-cart" size={20} color="#000" style={{ marginRight: 10 }} />
                    <Text style={styles.textButton}>PRODUTOS</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button, styles.buttonSecondary]} 
                    onPress={() => navigation.navigate('Contact')}
                >
                    <FontAwesome name="whatsapp" size={20} color="#01cb33" style={{ marginRight: 10 }} />
                    <Text style={[styles.textButton, { color: '#01cb33' }]}>CONTATO</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        height: 250,
        width: '100%',
        marginTop: 20,
    },
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sobre: {
        color: '#01cb33',
        fontWeight: '500',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 26,
        marginBottom: 40,
    },
    button: {
        flexDirection: 'row', 
        backgroundColor: '#01cb33',
        width: '100%',
        height: 55,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    buttonSecondary: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#01cb33',
    },
    textButton: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    },
});