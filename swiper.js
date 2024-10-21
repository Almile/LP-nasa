// Função para buscar imagens da API da NASA (APOD) para o carrossel
const fetchNasaImages = async () => {
    try {
        const apiKey = 'HSAT9XYzsKFKat8EllTFlC4BHxYE4WuLVQCLPh8s';  // Substitua por sua chave da API da NASA
        const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=3`;  // Usamos count para obter múltiplas imagens
        const response = await fetch(url);
        const data = await response.json();

        // Selecionar o elemento do carrossel onde as imagens serão inseridas
        const sliderContent = document.getElementById('slider-content');
        sliderContent.innerHTML = '';

        // Iterar sobre as imagens e criar slides
        data.forEach((item, index) => {
            if (item.media_type === 'image') {  // Verificar se o retorno é uma imagem
                let slide = `
                    <div class="swiper-slide" style="background-image:url('${item.url}');">
                        <div class="overlay">
                            <h1>${item.title}</h1>
                            <p>${item.explanation.substring(0, 100)}...</p>
                        </div>
                    </div>
                `;
                sliderContent.innerHTML += slide;
            }
        });

        // Inicializar o Swiper.js após adicionar os slides
        var swiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

    } catch (error) {
        console.error('Erro ao carregar as imagens da NASA:', error);
    }
};

// Chamar a função para buscar e exibir as imagens no carrossel
fetchNasaImages();
