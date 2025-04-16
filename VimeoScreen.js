import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { buscarVideosVimeo } from './vimeo';

export default function VimeoScreen() {
  const [pesquisa, setPesquisa] = useState('');
  const [videos, setVideos] = useState([]);

  const pesquisar = async () => {
    try {
      const resultados = await buscarVideosVimeo(pesquisa);
      setVideos(resultados);
    } catch (erro) {
      console.error('Erro ao pesquisar no Vimeo:', erro);
    }
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.pesquisaContainer}>
        <TextInput
          style={estilos.input}
          placeholder="Pesquisar no Vimeo"
          value={pesquisa}
          onChangeText={setPesquisa}
        />
        <TouchableOpacity style={estilos.botao} onPress={pesquisar}>
          <Text style={estilos.textoBotao}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {videos.map((video) => (
          <View key={video.uri} style={estilos.videoContainer}>
            <Text style={estilos.titulo}>{video.name}</Text>
            <WebView
              style={estilos.webview}
              javaScriptEnabled
              domStorageEnabled
              source={{
                html: `<iframe src="https://player.vimeo.com/video/${video.uri.split('/').pop()}" width="100%" height="315" frameborder="0" allowfullscreen></iframe>`,
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
  pesquisaContainer: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#1ab7ea',
    borderRadius: 8,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 4,
  },
  botao: {
    backgroundColor: '#034694',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  videoContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 20,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  webview: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
});
