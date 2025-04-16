import axios from 'axios';

const ACCESS_TOKEN = 'Bearer 2736776638dbb7d6cd1b6ef75a65b89b'; // <-- Substitua pela sua

export const buscarVideosVimeo = async (query) => {
  try {
    const resposta = await axios.get('https://api.vimeo.com/videos', {
      headers: {
        Authorization: ACCESS_TOKEN,
      },
      params: {
        query,
        per_page: 10,
      },
    });
    return resposta.data.data; // Retorna lista de vídeos
  } catch (erro) {
    console.error('Erro ao buscar vídeos do Vimeo:', erro);
    throw erro;
  }
};
