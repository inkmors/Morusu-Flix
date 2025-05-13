# 🍿 **Morusu Flix**
Desenvolvido por: Vinícius Lima

**Morusu Flix** é uma plataforma moderna para **explorar filmes**, com **interface responsiva**, carregamento preguiçoso (lazy loading) e uma experiência de usuário aprimorada. Inspirada em grandes serviços de streaming, a plataforma permite visualizar **detalhes dos filmes**, **salvar favoritos e navegar** de forma fluida e intuitiva.

## 🌐 Demonstração

**Acesse a versão online, clicando ao lado:** [https://morusuflix.vercel.app/](https://morusuflix.vercel.app/)

## ⭐ Funcionalidades

- **Navegação de Filmes**: Visualize uma lista de filmes com imagens, sinopses, gêneros e outras informações relevantes.
- **Carregamento Preguiçoso**: Utiliza técnicas de lazy loading com Intersection Observer para melhorar a performance.
- **Detalhes do Filme**: Página de detalhes com informações completas sobre o filme, como título, sinopse, gênero, avaliação, duração e data de produção.
- **Favoritos**: Adicione filmes à sua lista de favoritos para fácil acesso.
- **Design Responsivo**: Layout otimizado para dispositivos móveis, tablets e desktops.
- **Integração com APIs**: Consumo de dados de filmes (possivelmente via [TMDB API](https://www.themoviedb.org/documentation/api)) para exibir informações atualizadas.

## ⚙️ Tecnologias Utilizadas

- **React** – Biblioteca para construção da interface do usuário.
- **Vite** – Ferramenta de build e desenvolvimento rápido.
- **Tailwind CSS** – Framework utilitário para estilização.
- **React Router** – Para navegação entre páginas.
- **Intersection Observer API** – Para implementar o lazy loading de imagens e componentes.
- **Slick Carousel** – Para a exibição dos banners de filmes (via `react-slick` e `slick-carousel`).

## 🚀 Instalação

Para executar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/inkmors/Morusu-Flix.git
   cd Morusu-Flix
2. **Instale as dependências:**

   ```bash
   npm install
3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
4. **Insira sua chave API da TMDB:**

   ```bash
   No arquivo .env, onde está "VITE_API_KEY='INSIRA_SUA_API_KEY'", insira sua chave API da TMDB dentro das "", fazendo assim, carregar os filmes.
5. **Acesse a aplicação:**

   ```bash
   Abra seu navegador e acesse http://localhost:3000 (ou a porta configurada).
   
# 📁 Estrutura do Projeto
   ```bash
        Morusu-Flix/
        ├── public/  # Arquivos públicos, imagens, favicon, etc.
        ├── src/
        │   ├── Components/  # Componentes React,
        │   ├── Pages/  # Todas as páginas da projeto,
        │   ├── Routes/  # Todas as rotas do projeto,
        │   ├── Services/  # A rota base dos serviço da API,
        │   ├── main.css  # Estilização principal do projeto,
        │   └── main.jsx  # Ponto de entrada da aplicação,              
        ├── package.json  # Configurações e dependências do projeto,
        └── README.md  # Documentação do projeto.
   ```

# 🤝 Contibuições
    - Contribuições são bem-vindas! Se você encontrar algum bug ou tiver sugestões para melhorias, por favor abra uma issue ou envie um pull request.

    - Faça um fork do repositório.

    - Crie uma branch com a sua feature (git checkout -b minha-feature).

    - Faça o commit das suas alterações (git commit -m 'Minha nova feature').

    - Envie a branch (git push origin minha-feature).

    - Abra um Pull Request.
# 📜 Licença
Este projeto está licenciado sob a **MIT License.**

# 📧 Contato
- **GitHub:** @inkmors

- **Email:** gvlima.contato@gmail.com

