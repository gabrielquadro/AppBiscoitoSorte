import React, { useState } from 'react';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';

export default function App() {

  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [texto, setTexto] = useState("Quebre o biscoito para ler a frase!")

  let frases = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.'
  ];

  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTexto('" ' + frases[numeroAleatorio] + '"');
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciar() {
    setTexto("Quebre o biscoito para ler a frase!");
    setImg(require('./src/biscoito.png'));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Biscoito da Sorte
      </Text>
      
      <Image 
      source={img}
      style={styles.img}
      />

      <Text style={styles.textoFrase}>{texto}</Text>

      <TouchableOpacity 
      onPress={quebraBiscoito}
      style={styles.botao}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={reiniciar}
      style={[styles.botao, {marginTop: 20}]}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Reiniciar biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#148F77'
  },
  img: {
    width:230,
    height:230
  },
  textoFrase: {
    fontSize: 20,
    color: 'white',
    margin: 30,
    fontStyle: 'italic',
    marginBottom: 50
  },
  botao: {
    backgroundColor: '#CD6155',
    width:230,
    height:50,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 25
  }, 
  btnArea: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  titulo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 30
  }

})

