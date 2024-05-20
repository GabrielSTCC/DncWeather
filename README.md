# DncWeather

Bem-vindo ao repositório do DncWeather, uma aplicação web que permite aos usuários obter previsões do tempo e informações de endereço em tempo real. Este documento fornece instruções sobre como configurar e usar o projeto.

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Contato](#contato)

## Visão Geral

DncWeather é uma aplicação web simples que utiliza APIs externas para fornecer informações de previsão do tempo e detalhes de endereço com base no CEP (Código de Endereçamento Postal). O layout é construído utilizando HTML, CSS (com Bootstrap) e JavaScript.

Link do site disponibilizado: https://dnc-weather-rho.vercel.app

## Tecnologias Utilizadas

- HTML5
- CSS3
- Bootstrap 5.3.3
- JavaScript
- API ViaCEP
- API Open-Meteo

## Instalação

1. Clone o repositório para o seu ambiente local:

    ```bash
    git clone https://github.com/seu-usuario/dncweather.git
    cd dncweather
    ```

2. Abra o arquivo `index.html` em seu navegador.

    ```bash
    open index.html
    ```

## Uso

1. Preencha o formulário com seu nome, e-mail, CEP e coordenadas (latitude e longitude).
2. Clique no botão **Acessar** para obter as informações:
   - O endereço completo será preenchido automaticamente com base no CEP fornecido.
   - A previsão do tempo será exibida com base nas coordenadas fornecidas.

## Estrutura do Projeto

- `index.html`: Arquivo principal contendo a estrutura HTML da aplicação.
- `style.css`: Arquivo CSS personalizado para estilos adicionais.
- `funcao.js`: Script JavaScript contendo funções assíncronas para chamadas às APIs ViaCEP e Open-Meteo.

## Funcionalidades

### Navbar

A barra de navegação inclui links para diferentes seções da aplicação:

- **Endereços**: Navega para a seção de endereços.
- **Previsão do Tempo**: Navega para a seção de previsão do tempo.

### Formulário

- **Primeiro Nome**: Campo de entrada para o nome do usuário.
- **E-mail**: Campo de entrada para o e-mail do usuário.
- **CEP**: Campo de entrada para o CEP do usuário.
- **Latitude e Longitude**: Campos de entrada para as coordenadas geográficas do usuário.

### Botão Acessar

Ao clicar no botão **Acessar**, as seguintes funções são chamadas:

- `getAddressByCep()`: Busca informações de endereço usando a API ViaCEP.
- `getPrevisao()`: Busca a previsão do tempo usando a API Open-Meteo.

### Resultados

Os resultados das buscas são exibidos em campos de entrada desabilitados para fácil visualização:

- **Endereço**: Logradouro, Bairro, Localidade/UF.
- **Previsão do Tempo**: Temperatura atual na região especificada.

## Contato

Para mais informações ou suporte, entre em contato com:

- Nome: Gabriel Santos Teixeira
- E-mail: gabrielsantosteixeira.cc@gmail.com

Sinta-se à vontade para contribuir com o projeto através de pull requests ou reportando issues.
