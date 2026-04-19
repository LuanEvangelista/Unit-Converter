# Unit Converter

Aplicacao web desenvolvida com React e Vite para converter unidades de comprimento, peso e temperatura de forma rapida e simples. O projeto foi criado como uma ferramenta de estudo para praticar componentes, rotas, estado local e organizacao de logica reutilizavel em JavaScript.

## Sobre o projeto

Este projeto foi construido como uma aplicacao front-end com foco em praticar:

- Estruturacao de componentes em React
- Organizacao de rotas com React Router DOM
- Gerenciamento de estado com `useState`
- Reutilizacao de logica em funcoes auxiliares
- Separacao entre interface e regra de conversao
- Validacao basica de entrada de dados em formularios
- Criacao de uma interface simples, funcional e direta

Apesar de ser um projeto pequeno, ele ja segue uma estrutura clara, separando as telas de conversao da logica que executa os calculos.

## Funcionalidades

- Conversao de unidades de comprimento
- Conversao de unidades de peso
- Conversao de unidades de temperatura
- Navegacao entre telas com menu superior
- Redirecionamento automatico da rota raiz para `length`
- Exibicao do resultado da conversao em tela dedicada
- Botao para limpar os campos e refazer a conversao
- Estrutura reutilizavel para facilitar novas conversoes no futuro

## Conversoes disponiveis

O projeto atualmente suporta as seguintes categorias:

- `Length`
- `Weight`
- `Temperature`

### Unidades de comprimento

- `millimeter`
- `centimeter`
- `meter`
- `kilometer`
- `inch`
- `foot`
- `yard`
- `mile`

### Unidades de peso

- `milligram`
- `gram`
- `kilogram`
- `ounce`
- `pound`

### Unidades de temperatura

- `celsius`
- `fahrenheit`
- `kelvin`

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- React Router DOM

## Requisitos

Para executar o projeto localmente, voce precisa ter instalado:

- [Node.js](https://nodejs.org/)
- npm

## Como executar o projeto

1. Clone este repositorio:

```bash
git clone https://github.com/seu-usuario/unit-converter.git
```

2. Acesse a pasta do projeto:

```bash
cd unit-converter/UnitConverter
```

3. Instale as dependencias:

```bash
npm install
```

4. Execute a aplicacao em modo desenvolvimento:

```bash
npm run dev
```

Se preferir, voce tambem pode gerar a versao de producao:

```bash
npm run build
```

E, depois, visualizar o build localmente:

```bash
npm run preview
```

## Como usar

1. Ao abrir a aplicacao, voce sera direcionado automaticamente para a tela de conversao de comprimento.
2. Use o menu superior para alternar entre comprimento, peso e temperatura.
3. Escolha a unidade de origem e a unidade de destino.
4. Digite um valor numerico no campo correspondente.
5. Clique em `Convert` para ver o resultado.
6. Caso queira refazer a operacao, use o botao `Reset`.

## Exemplo de fluxo

```text
Unit Converter

Length converter
Select the units and enter a value to convert.

Value: 10
Convert from: Meter
Convert to: Kilometer

Result:
10 meter = 0.01 kilometer
```

## Estrutura do projeto

```text
Unit-Converter/
|-- README.md
`-- UnitConverter/
    |-- public/
    |   |-- favicon.svg
    |   `-- icons.svg
    |-- src/
    |   |-- components/
    |   |   `-- Navbar.jsx
    |   |-- pages/
    |   |   |-- Length.jsx
    |   |   |-- Weight.jsx
    |   |   `-- Temperature.jsx
    |   |-- utils/
    |   |   `-- converters.jsx
    |   |-- App.jsx
    |   |-- App.css
    |   |-- index.css
    |   `-- main.jsx
    |-- package.json
    `-- vite.config.js
```

## Organizacao das responsabilidades

### `src/main.jsx`

Ponto de entrada da aplicacao. Responsavel por montar a arvore principal do React e carregar os estilos globais.

### `src/App.jsx`

Responsavel pela estrutura geral da aplicacao:

- cria o roteamento
- exibe o titulo da pagina
- redireciona a rota inicial para `length`
- controla quais telas podem ser acessadas

### `src/components/Navbar.jsx`

Centraliza a navegacao entre as categorias disponiveis:

- Length
- Weight
- Temperature

### `src/pages/Length.jsx`

Tela responsavel pela conversao de unidades de comprimento.

### `src/pages/Weight.jsx`

Tela responsavel pela conversao de unidades de peso.

### `src/pages/Temperature.jsx`

Tela responsavel pela conversao de unidades de temperatura.

### `src/utils/converters.jsx`

Arquivo que concentra a logica reutilizavel de conversao:

- fatores de conversao para comprimento
- fatores de conversao para peso
- funcao generica para converter unidades com base em fatores
- funcao especifica para converter temperatura

## Como funciona a conversao

### Comprimento e peso

As conversoes de comprimento e peso usam uma estrategia semelhante:

1. O valor digitado e convertido para a unidade base.
2. Em seguida, esse valor e convertido para a unidade de destino.
3. O resultado final e exibido na tela.

### Temperatura

A conversao de temperatura usa a escala Celsius como ponto intermediario:

1. O valor de origem e convertido para Celsius.
2. Depois, o valor em Celsius e convertido para a unidade desejada.

## Melhorias futuras

Algumas ideias para evoluir o projeto:

- Adicionar mais categorias de conversao
- Permitir troca rapida entre unidade de origem e destino
- Exibir historico das ultimas conversoes
- Melhorar o layout com uma identidade visual mais marcante
- Adicionar validacao visual para entradas invalidas

## Aprendizados que este projeto pratica

Este projeto e uma boa oportunidade para reforcar conceitos importantes de desenvolvimento front-end com React, como:

- composicao de componentes
- navegacao com rotas
- gerenciamento de estado
- reutilizacao de funcoes utilitarias
- organizacao de telas por responsabilidade
- tratamento de formularios
- estruturacao de uma aplicacao com Vite

## Autor

Projeto desenvolvido para fins de estudo e pratica com React, JavaScript e Vite.

## Referencia do desafio

Este projeto foi desenvolvido com base no desafio proposto pelo roadmap.sh:

https://roadmap.sh/projects/unit-converter
