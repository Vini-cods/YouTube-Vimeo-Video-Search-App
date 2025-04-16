import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { WebView } from "react-native-webview";
import { buscarVideos } from './youtube';

export default function YouTubeScreen() {
  const [pesquisa, setpesquisa] = useState("");

  const [videos, setVideos] = useState([]);

  const pesquisar = async () => {
    try {
      const resultados = await buscarVideos(pesquisa);
      setVideos(resultados);
    } catch (erro) {
      console.error("Erro ao pesquisar vídeos:", erro);
    }
  };

  return (
    <KeyboardAvoidingView style={estilos.container}>
      <View style={estilos.containerPesquisa}>
        <TextInput
          style={estilos.entrada}
          placeholder="Digite sua pesquisa"
          value={pesquisa}
          onChangeText={setpesquisa}
        />
        <TouchableOpacity style={estilos.botao} onPress={pesquisar}>
          <Text style={estilos.textoBotao}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={estilos.scrollView}>
        {videos.map((video) => (
          <View key={video.id.videoId} style={estilos.containerVideo}>
            <Text style={estilos.tituloVideo}>{video.snippet.title}</Text>
            <WebView
              style={estilos.webview}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{
                html: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>`,
              }}
            />
          </View>
        ))}
      </ScrollView>
      {/* </KeyboardAvoidingView> apenas para localizar */}
    </KeyboardAvoidingView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 50,
  },
  containerPesquisa: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#c4302b",
    borderRadius: 10,
    margin: 20,
  },
  entrada: {
    height: 40,
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 4,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  botao: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  textoBotao: {
    color: "#000",
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  containerVideo: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tituloVideo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  webview: {
    width: '100%',
    aspectRatio: 16 / 9,
  }
});