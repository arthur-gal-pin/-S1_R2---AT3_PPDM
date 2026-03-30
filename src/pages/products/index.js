import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


export default function Products() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <View style={styles.produto}>
          <Image
            source={require('../../../assets/switch.png')}
            style={styles.imagemProduto}
          />

          <Text style={styles.titulo}>LS1008G Switch Gigabit 8 Portas TP-Link</Text>
          <Text style={styles.preco}>R$ 140,75</Text>

          <View style={styles.containerPix}>
            <Text style={styles.Pix}> R$120,00 no Pix</Text>
            <MaterialIcons name="pix" size={20} color="#32BCAD" />
          </View>

          <View style={styles.quantidadeContainer}>
            <Text style={{color: 'white'}}>Qtd:</Text>
            <TextInput
              style={styles.input}
              placeholder='0'
              keyboardType='number-pad'
            />
          </View>

          <TouchableOpacity
            style={styles.botaoCarrinho}
            onPress={() => alert("Produto adicionado ao carrinho")}
          >
            <Text style={styles.textoBotao}>Adicionar ao Carrinho</Text>
            <AntDesign name="shopping-cart" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.produto}>
          <Image
            source={require('../../../assets/retro-cyberdeck-v0-vx0uypshe9lc1.png')}
            style={styles.imagemProduto}
          />

          <Text style={styles.titulo}>Cyberdeck Retro Fedora</Text>
          <Text style={styles.preco}>R$ 1200,75</Text>

          <View style={styles.containerPix}>
            <Text style={styles.Pix}>R$1100,50  no Pix</Text>
            <MaterialIcons name="pix" size={20} color="#32BCAD" />
          </View>

          <View style={styles.quantidadeContainer}>
            <Text style={{color: 'white'}}>Qtd: </Text>
            <TextInput
              style={styles.input}
              placeholder='0'
              keyboardType='number-pad'
            />
          </View>

          <TouchableOpacity
            style={styles.botaoCarrinho}
            onPress={() => alert("Produto adicionado ao carrinho")}
          >
            <Text style={styles.textoBotao}>Adicionar ao Carrinho</Text>
            <AntDesign name="shopping-cart" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.produto}>
          <Image
            source={require('../../../assets/caboderede.png')}
            style={styles.imagemProduto}
          />

          <Text style={styles.titulo}>Cabo de Rede Ugreen NW153 Cat 8</Text>
          <Text style={styles.preco}>R$ 40,30</Text>

          <View style={styles.containerPix}>
            <Text style={styles.Pix}>R$35,00 no Pix</Text>
            <MaterialIcons name="pix" size={20} color="#32BCAD" />
          </View>

          <View style={styles.quantidadeContainer}>
            <Text style={{color: 'white'}}>Qtd:</Text>
            <TextInput
              style={styles.input}
              placeholder='0'
              keyboardType='number-pad'
            />
          </View>

          <TouchableOpacity
            style={styles.botaoCarrinho}
            onPress={() => alert("Produto adicionado ao carrinho")}
          >
            <Text style={styles.textoBotao}>Adicionar ao Carrinho</Text>
            <AntDesign name="shopping-cart" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.produto}>
          <Image
            source={require('../../../assets/raspberryPi.png')}
            style={styles.imagemProduto}
          />

          <Text style={styles.titulo}>Raspberry Pi3 Pi 3 Model B Quadcore 1.2ghz +</Text>
          <Text style={styles.preco}>R$ 360,05</Text>

          <View style={styles.containerPix}>
            <Text style={styles.Pix}>R$340,99 no Pix</Text>
            <MaterialIcons name="pix" size={20} color="#32BCAD" />
          </View>

          <View style={styles.quantidadeContainer}>
            <Text style={{color: 'white'}}>Qtd:</Text>
            <TextInput
              style={styles.input}
              placeholder='0'
              keyboardType='number-pad'
            />
          </View>

          <TouchableOpacity
            style={styles.botaoCarrinho}
            onPress={() => alert("Produto adicionado ao carrinho")}
          >
            <Text style={styles.textoBotao}>Adicionar ao Carrinho</Text>
            <AntDesign name="shopping-cart" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.produto}>
          <Image
            source={require('../../../assets/thinkpad.png')}
            style={styles.imagemProduto}
          />

          <Text style={styles.titulo}>ThinkPad T440p Upgraded</Text>
          <Text style={styles.preco}>R$2000,99</Text>

          <View style={styles.containerPix}>
            <Text style={styles.Pix}>R$1809,99 no Pix</Text>
            <MaterialIcons name="pix" size={20} color="#32BCAD" />
          </View>

          <View style={styles.quantidadeContainer}>
            <Text style={{color: 'white'}}>Qtd:</Text>
            <TextInput
              style={styles.input}
              placeholder='0'
              keyboardType='number-pad'
            />
          </View>

          <TouchableOpacity
            style={styles.botaoCarrinho}
            onPress={() => alert("Produto adicionado ao carrinho")}
          >
            <Text style={styles.textoBotao}>Adicionar ao Carrinho</Text>
            <AntDesign name="shopping-cart" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#00FF41',
    backgroundColor: '#111F24',
    alignItems: 'center',
  },
  headerText: {
    color: '#00FF41',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  scrollview: {
    flex: 1,
  },
  produto: {
    backgroundColor: 'rgba(122, 129, 140, 0.05)',
    margin: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#593F2B',
    paddingBottom: 15,
  },
  imagemProduto: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    backgroundColor: '#000',
    opacity: 0.8,
  },
  infoContainer: {
    padding: 15,
  },
  titulo: {
    color: '#00FF41',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    marginBottom: 5,
  },
  preco: {
    color: '#7A818C',
    fontSize: 16,
    fontFamily: 'monospace',
    textDecorationLine: 'line-through',
    marginBottom: 2,
  },
  containerPix: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  Pix: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  quantidadeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderTopWidth: 1,
    paddingTop: 10,
  },
  label: {
    color: '#7A818C',
    fontFamily: 'monospace',
    marginRight: 10,
  },
  input: {
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#00FF41',
    color: '#00FF41',
    paddingHorizontal: 10,
    width: 60,
    height: 30,
    fontFamily: 'monospace',
  },
  botaoCarrinho: {
    backgroundColor: '#00FF41',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    gap: 10,
  },
  textoBotao: {
    color: '#111F24',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});
