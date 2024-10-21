let lastScrollY = window.scrollY; 
const header = document.querySelector('header'); 

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY; 

    if (currentScrollY > lastScrollY) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }
    
    lastScrollY = currentScrollY;
});

document.addEventListener("DOMContentLoaded", () => {
    const imgElements = document.querySelectorAll('.card-img-top');
    const nasaApiKey = 'HSAT9XYzsKFKat8EllTFlC4BHxYE4WuLVQCLPh8s';
    
    imgElements.forEach((img, index) => {
        fetch(`https://images-api.nasa.gov/search?q=space&page=${Math.floor(Math.random() * 100) + 1}`)
            .then(response => response.json())
            .then(data => {
                if (data.collection.items.length > 0) {
                    const randomItem = data.collection.items[Math.floor(Math.random() * data.collection.items.length)];
                    img.src = randomItem.links[0].href; 
                } else {
                    img.alt = "Imagem não disponível";
                }
            })
            .catch(error => {
                console.error('Erro ao buscar a imagem:', error);
                img.alt = "Imagem não disponível"; 
            });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const depoimentosContainer = document.getElementById("depoimentos");

    fetch(`https://randomuser.me/api/?results=3`)
        .then(response => response.json())
        .then(data => {
            const usuarios = data.results;
            usuarios.forEach(usuario => {
                const depoimentoCard = document.createElement("div");
                depoimentoCard.className = "col-md-4 mb-4 aos-item";
                depoimentoCard.setAttribute("data-aos", "fade-up");

                depoimentoCard.innerHTML = `
                    <div class="card">
                        <img src="${usuario.picture.large}" 
                             class="card-img-top" 
                             alt="${usuario.name.first} ${usuario.name.last}" 
                             onerror="this.onerror=null; this.src='https://via.placeholder.com/150';">
                        <div class="card-body">
                            <h5 class="card-title">${usuario.name.first} ${usuario.name.last}</h5>
                            <p class="card-text">"A NASA sempre me inspirou a explorar o desconhecido e usar dados para minhas pesquisas. O acesso às informações é incrível!"</p>
                        </div>
                    </div>
                `;

                depoimentosContainer.appendChild(depoimentoCard);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar os depoimentos:', error);
            depoimentosContainer.innerHTML = '<p>Erro ao carregar depoimentos.</p>';
        });
});

document.addEventListener("DOMContentLoaded", () => {
    const spaceMapImage = document.getElementById("space-map");
    const nasaApiKey = 'HSAT9XYzsKFKat8EllTFlC4BHxYE4WuLVQCLPh8s';
    
    fetch(`https://images-api.nasa.gov/search?q=space%20map`)
        .then(response => response.json())
        .then(data => {
            if (data.collection.items.length > 0) {
                const randomItem = data.collection.items[Math.floor(Math.random() * data.collection.items.length)];
                spaceMapImage.src = randomItem.links[0].href;
            } else {
                spaceMapImage.alt = "Imagem não disponível"; 
            }
        })
        .catch(error => {
            console.error('Erro ao buscar a imagem:', error);
            spaceMapImage.alt = "Imagem não disponível"; 
        });
});


document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    if (nome === "" || email === "" || mensagem === "") {
        alert('Por favor, preencha todos os campos obrigatórios.');
    } else {
        alert('Mensagem enviada com sucesso!');
    }
});

(function(){
    emailjs.init("_8G2UD-fdpMAfbub5");
})();

document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coleta os dados do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    emailjs.send("service_rtx9ap9", "template_54rbazb", {
        from_name: nome,
        from_email: email,
        from_phone: telefone,
        message: mensagem
    })
    .then(function(response) {
        console.log('Mensagem enviada com sucesso!', response.status, response.text);
        alert("Mensagem enviada com sucesso!");
        document.getElementById("form-contato").reset();
    }, function(error) {
        console.log('Erro ao enviar mensagem:', error);
        alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
    });
});
