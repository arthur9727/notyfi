// Função para obter parâmetros da URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Obtém o valor do parâmetro "image"
const imageName = getQueryParam("image");

// Define a URL da imagem com base no parâmetro
if (imageName) {
    document.getElementById("displayImage").src = `images/${imageName}.png`;
} else {
    document.getElementById("displayImage").alt = "Nenhuma imagem encontrada.";
}
