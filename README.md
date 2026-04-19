# Unit Converter

Uma aplicacao web feita com React e Vite para converter unidades de comprimento, peso e temperatura de forma simples, rapida e direta. O projeto foi desenvolvido para praticar componentes, rotas, estado local e reaproveitamento de logica em JavaScript.

## 🚀 Comecando

Essas instrucoes vao te ajudar a rodar o projeto na sua maquina local para desenvolvimento e teste.

Consulte **[Implantacao](#-implantacao)** para ver a versao publicada.

### 📋 Pre-requisitos

Voce vai precisar de:

```bash
Node.js
npm
```

### 🔧 Instalacao

1. Clone o repositorio:

```bash
git clone https://github.com/luanevangelista/Unit-Converter.git
```

2. Acesse a pasta do projeto:

```bash
cd Unit-Converter/UnitConverter
```

3. Instale as dependencias:

```bash
npm install
```

4. Inicie a aplicacao em modo desenvolvimento:

```bash
npm run dev
```

5. Se quiser gerar a versao de producao:

```bash
npm run build
```

6. Para testar o build localmente:

```bash
npm run preview
```

## ⚙️ Executando os testes

Este projeto nao possui testes automatizados configurados no momento.

Como validacao basica, voce pode usar:

### 🔩 Analise dos testes de ponta a ponta

Nao ha uma suite E2E configurada ainda, mas voce pode conferir o fluxo principal abrindo a aplicacao, escolhendo as unidades e fazendo uma conversao.

```bash
npm run dev
```

### ⌨️ Testes de estilo de codificacao

O projeto usa ESLint para validar o codigo e ajudar a manter um padrao consistente.

```bash
npm run lint
```

Tambem e possivel conferir se o build esta funcionando corretamente:

```bash
npm run build
```

## 📦 Implantacao

O projeto esta publicado no GitHub Pages e pode ser testado aqui:

https://luanevangelista.github.io/Unit-Converter/#/length

A navegacao usa `HashRouter`, entao a rota principal para testar a conversao de comprimento e:

`https://luanevangelista.github.io/Unit-Converter/#/length`

## 🛠️ Construido com

Ferramentas e bibliotecas usadas no projeto:

* [React](https://react.dev/) - Biblioteca principal da interface
* [Vite](https://vite.dev/) - Ambiente de desenvolvimento e build
* [React Router DOM](https://reactrouter.com/) - Rotas da aplicacao
* JavaScript - Logica da aplicacao

## ✒️ Autores

* **Luan Evangelista** - Desenvolvimento e manutencao do projeto

## Referencia do desafio

Este projeto foi desenvolvido com base no desafio proposto pelo roadmap.sh:

https://roadmap.sh/projects/unit-converter
