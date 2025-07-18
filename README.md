# Gabriel Sarzi - Landing Page Portfólio

Uma landing page minimalista e profissional para serviços de criação e estruturação de e-commerces.

## 🌐 Demonstração Online

Você pode ver o site funcionando em: **https://maexfqcu.manus.space**

## 🎨 Design

- **Estética**: Minimalista, profissional e monocromática
- **Paleta de cores**: Preto, branco e tons de cinza
- **Tipografia**: Inter (Google Fonts)
- **Animações**: tsParticles para fundo interativo
- **Responsivo**: Funciona em desktop, tablet e mobile

## 📁 Estrutura do Projeto

```
gabriel-sarzi-portfolio/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos CSS
├── js/
│   └── main.js         # JavaScript (tsParticles + navegação)
├── img/
│   └── logo-branca.png # Logo Gabriel Sarzi
└── README.md           # Este arquivo
```

## 🚀 Como Hospedar no GitHub Pages

### Passo 1: Criar um Repositório no GitHub

1. Acesse [GitHub.com](https://github.com) e faça login
2. Clique em "New repository" (Novo repositório)
3. Nomeie o repositório (ex: `gabriel-sarzi-portfolio`)
4. Marque como "Public" (Público)
5. Clique em "Create repository"

### Passo 2: Fazer Upload dos Arquivos

1. No repositório criado, clique em "uploading an existing file"
2. Arraste e solte todos os arquivos e pastas do projeto:
   - `index.html`
   - `css/style.css`
   - `js/main.js`
   - `img/logo-branca.png`
   - `README.md`
3. Adicione uma mensagem de commit (ex: "Adicionar landing page Gabriel Sarzi")
4. Clique em "Commit changes"

### Passo 3: Ativar GitHub Pages

1. No seu repositório, vá em "Settings" (Configurações)
2. Role para baixo até encontrar "Pages" no menu lateral
3. Em "Source", selecione "Deploy from a branch"
4. Em "Branch", selecione "main" ou "master"
5. Deixe a pasta como "/ (root)"
6. Clique em "Save"

### Passo 4: Acessar seu Site

Após alguns minutos, seu site estará disponível em:
`https://SEU-USUARIO.github.io/gabriel-sarzi-portfolio`

## ✏️ Personalizações

### Alterar Informações de Contato

No arquivo `index.html`, localize e altere:

```html
<!-- WhatsApp -->
<a href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços de e-commerce." class="whatsapp-button" target="_blank">

<!-- E-mail -->
<a href="mailto:contato@gabrielsarzi.com.br" class="email-button">

<!-- E-mail em destaque -->
<span>contato@gabrielsarzi.com.br</span>
```

### Adicionar Logos de Clientes

1. Substitua os placeholders na seção "Clientes"
2. Adicione as imagens dos logos na pasta `img/`
3. Atualize o HTML para referenciar as imagens:

```html
<div class="client-logos">
    <img src="img/cliente1-logo.png" alt="Cliente 1">
    <img src="img/cliente2-logo.png" alt="Cliente 2">
    <!-- Adicione mais conforme necessário -->
</div>
```

### Personalizar Animações tsParticles

No arquivo `js/main.js`, você pode ajustar:

- **Número de partículas**: `value: 50`
- **Velocidade**: `speed: 1`
- **Distância dos links**: `distance: 150`
- **Opacidade**: `opacity: 0.3`

### Alterar Cores e Estilos

No arquivo `css/style.css`, você pode personalizar:

- **Cor de fundo**: `background: #000000` (hero) / `background: #ffffff` (seções)
- **Cor do texto**: `color: #1a1a1a`
- **Cor dos botões**: `border: 2px solid #1a1a1a`
- **Fontes**: Altere `font-family: 'Inter'`

## 📱 Recursos Incluídos

- ✅ Design minimalista e monocromático
- ✅ Logo personalizada integrada
- ✅ Fundo animado com tsParticles
- ✅ Design responsivo (funciona em celular, tablet e desktop)
- ✅ Botões de contato direto (WhatsApp e E-mail)
- ✅ E-mail em destaque na seção de contato
- ✅ Seção para logos de clientes
- ✅ Otimizado para SEO
- ✅ Carregamento rápido
- ✅ Código organizado em pastas

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- tsParticles (animações de fundo)
- Font Awesome (ícones)
- Google Fonts (tipografia Inter)

## 📞 Suporte

Se precisar de ajuda com personalizações ou hospedagem, entre em contato!

---

**Desenvolvido com foco em minimalismo e performance para Gabriel Sarzi**

