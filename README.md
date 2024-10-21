# Landing Page com Tematica NASA

Este é um projeto de uma landing page moderna com a temática da NASA, onde você poderia visualizar informações da NASA, enviar mensagens de contato e visualizar depoimentos de forma dinâmica. A página também consome dados de APIs externas para exibir imagens e depoimentos, utilizando bibliotecas para melhorar a interatividade e animação.


<br>

## Índice
- [Visão Geral](#visão-geral)
- [Como Visualizar o Projeto Localmente](#como-visualizar-o-projeto-localmente)
- [APIs Utilizadas](#apis-utilizadas)
- [Bibliotecas Externas](#bibliotecas-externas)
- [Recursos do Projeto](#recursos-do-projeto)
- [Contato](#contato)

<br>

## Visão Geral

A landing page inclui um formulário de contato funcional, uma seção de depoimentos dinâmica e integração com a API da NASA para exibir imagens astronômicas. Além disso, o projeto utiliza animações para aprimorar a experiência do usuário.

## Como Visualizar o Projeto Localmente

Para visualizar o projeto localmente em sua máquina, siga as etapas abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/Almile/LP-nasa.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd LP-nasa
   ```

3. Abra o arquivo `index.html` no navegador:
   - Se você estiver usando VS Code, pode abrir diretamente com a extensão "Live Server".
   - Alternativamente, você pode abrir o arquivo manualmente clicando duas vezes no arquivo `index.html`.

4. Para visualizar o projeto com todas as funcionalidades dinâmicas, é necessário ter acesso à internet, pois as APIs são consumidas remotamente.

<br>

## APIs Utilizadas

### 1. **API da NASA - Astronomy Picture of the Day (APOD)**
   - **Descrição**: Utilizada para buscar e exibir imagens do espaço, como parte da seção "Contato" da landing page.
   - **Documentação**: [API NASA - APOD](https://api.nasa.gov/)
   - **Endpoint**: `https://api.nasa.gov/planetary/apod`

### 2. **Random User API**
   - **Descrição**: Utilizada para gerar depoimentos de clientes fictícios com fotos e nomes aleatórios, que são exibidos dinamicamente na seção de "Testemunhos".
   - **Documentação**: [Random User API](https://randomuser.me/)

### 3. **EmailJS**
   - **Descrição**: O formulário de contato está integrado com o serviço EmailJS para envio de mensagens para um email especificado. Ele permite que os dados inseridos no formulário sejam enviados diretamente para seu email.
   - **Documentação**: [EmailJS](https://www.emailjs.com/)


<br>

## Bibliotecas Externas

### 1. **AOS.js (Animate On Scroll)**
   - **Descrição**: Utilizada para adicionar animações que são acionadas à medida que o usuário rola a página. Aplicada principalmente na seção de "Testemunhos".
   - **Instalação**: Incluído no projeto via CDN.
   - **Documentação**: [AOS.js](https://michalsnik.github.io/aos/)
   - 

### 3. **Bootstrap 5 (parcialmente)**
   - **Descrição**: Utilizado apenas para a estilização básica do formulário de contato, para garantir responsividade e um layout estruturado.
   - **Instalação**: Incluído via CDN.
   - **Documentação**: [Bootstrap](https://getbootstrap.com/)

## Recursos do Projeto

- **Formulário de Contato**: Um formulário responsivo que permite ao usuário enviar mensagens via EmailJS.
- **Testemunhos Dinâmicos**: Depoimentos gerados dinamicamente a partir de uma API de usuários aleatórios, incluindo fotos e animações de rolagem.
- **Imagens da NASA**: Exibe uma imagem astronômica diariamente, obtida diretamente da API da NASA.
- **Animações**: Diversas animações aplicadas utilizando a biblioteca AOS.js para melhorar a experiência do usuário à medida que ele interage com a página.

