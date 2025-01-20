## Boilerplate Angular 19  V1.0.0

# Instalar

Instale a versão: NodeJS v20+

Execute para instalar as bibliotecas pré-definidas:
```
npm i
```

# Bibliotecas Usadas Neste Projeto
Abaixo está uma lista das principais bibliotecas utilizadas neste projeto, juntamente com suas descrições e casos de uso.

1. <b>@fortawesome/angular-fontawesome</b>
- Versão: ^0.15.0

  Essa biblioteca fornece uma integração do Font Awesome com Angular, facilitando a adição de ícones vetoriais escaláveis e logotipos sociais em aplicativos Angular.
  Caso de Uso: Adicionar ícones dinâmicos, personalizáveis e interativos ao aplicativo, utilizando a ampla biblioteca do Font Awesome.

2. <b>@fortawesome/fontawesome-free</b>
- Versão: ^6.6.0

  O Font Awesome Free inclui milhares de ícones em três estilos: sólido, regular e marcas. Ele funciona perfeitamente com a biblioteca angular-fontawesome para uso em projetos Angular.
  Caso de Uso: Fornece acesso à coleção completa de ícones gratuitos do Font Awesome para aprimorar a interface do usuário.

3. <b>animate.css</b>
- Versão: ^4.1.1

  Animate.css é uma biblioteca CSS para criar animações compatíveis com navegadores de forma simples. Inclui uma grande variedade de animações predefinidas, como fade-ins, bounces e zooms.
  Caso de Uso: Adicionar animações atraentes a elementos da interface, como botões, modais e outros componentes, para melhorar a experiência do usuário.

4. <b>notiflix</b>
- Versão: ^3.2.7

  Notiflix é uma biblioteca JavaScript leve para criar notificações personalizáveis, alertas, indicadores de carregamento e diálogos de confirmação.
  Caso de Uso: Fornecer feedback aos usuários por meio de notificações elegantes, incluindo mensagens de sucesso, erro e informação.

5. <b>moment</b>
- Versão: ^2.30.1

  Moment.js é uma biblioteca JavaScript popular para análise, validação, manipulação e formatação de datas.
  Caso de Uso: Simplificar o trabalho com datas e horários, incluindo formatação, conversões de fuso horário e comparações de datas.

6. <b>aos (Animate on Scroll)</b>
- Versão: ^2.3.4

  AOS é uma biblioteca leve para adicionar animações disparadas por eventos de rolagem. Permite que elementos animem ao entrar na tela conforme o usuário rola a página.
  Caso de Uso: Criar efeitos de rolagem envolventes, como fade-ins e slide-ups, para melhorar a interatividade geral do aplicativo.

Cada uma dessas bibliotecas desempenha um papel essencial para aprimorar a funcionalidade, a experiência do usuário e a interatividade do aplicativo. Para mais detalhes e documentação, consulte os links correspondentes.



# Comandos

Servir na porta 3000 com ambiente 'development':
```
npm run serve
```

Executar os testes unitários
```
ng test
```

## Comandos de Geração
Os seguintes comandos são usados para gerar diferentes tipos de arquivos e estruturas dentro de um projeto Angular. Eles utilizam um script customizado generate.js para gerar os componentes e outras entidades com base no caminho especificado.

1. <b>npm run g-component</b>
Gera um componente no caminho features/components, ou em outro caminho configurado via o parâmetro where. Use este comando para criar novos componentes no seu projeto Angular.
2. <b>npm run g-guard</b>
Gera um guard no caminho core/guards, ou em outro caminho configurado via o parâmetro where. Utilize este comando para criar guards que protejam rotas no Angular.
3. <b>npm run g-interceptor</b>
Gera um interceptor no caminho core/interceptors, ou em outro caminho configurado via o parâmetro where. Esse comando é utilizado para criar interceptores de requisições HTTP ou outras operações no Angular.
4. <b>npm run g-page</b>
Gera um componente de página no caminho features/pages. Use este comando para gerar componentes específicos para páginas no Angular.
5. <b>npm run g-service</b>
Gera um serviço no caminho features/services. Com este comando, você cria novos serviços para manipulação de dados ou lógica de negócios.
6. <b>npm run g-feature</b>
Gera um módulo no caminho features, utilizado para encapsular funcionalidades específicas no projeto.
7. <b>npm run g-module</b>
Gera um módulo no caminho features/modules, ou em outro caminho configurado via o parâmetro where. Esse comando é utilizado para criar novos módulos dentro da aplicação.
8. <b>npm run g-pipe</b>
Gera um pipe no caminho shared/pipes, ou em outro caminho configurado via o parâmetro where. Use este comando para criar pipes reutilizáveis no seu projeto Angular.
9. <b>npm run g-model</b>
Gera arquivos de interface dentro do core.


### Parâmetros
- <b>--path=<entidade></b>: Define o tipo de entidade a ser gerada (ex: components, guards, services).
- <b>--where=<diretório></b>: Define o diretório onde a entidade será gerada (valores válidos: core, features, shared).
- <b>--name=<nome></b>: O nome do componente, serviço, guard, etc., a ser gerado. Esse nome é obtido através da variável de ambiente npm_config_name.

### Exemplo de Uso
Se você deseja gerar um componente chamado header dentro da pasta components, você pode executar:

```
npm run g-component --path=components --where=features --name=header
```
Esse comando criará um componente header no diretório features/components.

Esses comandos são úteis para agilizar a geração de arquivos em um projeto Angular e manter a organização da estrutura de pastas.


# Estrutura de Pastas do Projeto

Esta seção descreve a estrutura de pastas utilizada no projeto Angular e a finalidade de cada diretório. A organização visa manter o código limpo, escalável e de fácil manutenção.

## Estrutura de Pastas

```
├─public
│ ├───fonts
│ ├───images
│ └───styles
│ └───data
└─src
  ├───app
  │   ├───core
  │   │   ├───components
  │   │   ├───guards
  │   │   ├───interceptors
  │   │   ├───pages
  │   │   └───services
  │   ├───features
  │   └───shared
  │       ├───components
  │       ├───directives
  │       └───pipes
  └───environments
```

### Diretórios e Finalidades

#### **public/**
Diretório para arquivos estáticos que não são processados pelo Angular e podem ser acessados diretamente pelo navegador.
- **fonts/**: Armazena fontes personalizadas usadas na aplicação.
- **images/**: Contém imagens estáticas, como logotipos ou ícones.
- **styles/**: Armazena arquivos CSS ou SCSS globais que não pertencem a um componente específico.
- **data/**: Pode conter arquivos JSON ou outros dados estáticos utilizados pela aplicação.

#### **src/**
Diretório principal do projeto Angular. Contém o código-fonte da aplicação.

##### **app/**
- **core/**:
  Contém código essencial para a aplicação que deve ser carregado uma vez e estar disponível em todo o projeto.
  - **components/**: Componentes globais usados em toda a aplicação (ex.: Header, Footer).
  - **guards/**: Guardas de rota que controlam o acesso a determinadas páginas (ex.: AuthGuard).
  - **interceptors/**: Interceptadores HTTP para manipular requisições e respostas (ex.: Adicionar cabeçalhos de autenticação).
  - **models/**: Local de armazenamento das interfaces de dados.
  - **pages/**: Páginas principais e globais da aplicação, como tela de login ou página de erro 404.
  - **services/**: Serviços centrais que fornecem funcionalidades compartilhadas, como autenticação ou manipulação de configurações globais.

- **features/**:
  Contém os módulos específicos de funcionalidades ou páginas, organizados por domínio ou caso de uso (ex.: `products`, `users`). Cada funcionalidade geralmente possui seus próprios componentes, serviços e rotas.

- **shared/**:
  Diretório para recursos reutilizáveis que podem ser usados em várias partes do projeto.
  - **components/**: Componentes reutilizáveis, como botões, modais ou tabelas.
  - **directives/**: Diretivas personalizadas reutilizáveis.
  - **pipes/**: Pipes personalizados reutilizáveis para formatação de dados.

##### **environments/**
Contém arquivos de configuração de ambiente (`environment.ts` e `environment.prod.ts`). Esses arquivos permitem definir variáveis específicas para cada ambiente (desenvolvimento, produção, etc.).

---

## Considerações
1. **Modularização**: A estrutura modular garante que cada parte da aplicação seja isolada e facilmente testável.
2. **Reutilização**: Componentes, diretivas e pipes compartilhados são centralizados no diretório `shared/`, promovendo a reutilização e a consistência.
3. **Escalabilidade**: A separação de funcionalidades no diretório `features/` facilita a adição de novas features sem impactar as existentes.
4. **Centralização do Core**: Recursos globais são agrupados no diretório `core/`, reduzindo redundâncias e promovendo boas práticas.

Essa estrutura é altamente recomendada para aplicações Angular de médio a grande porte, proporcionando organização e facilidade de manutenção ao longo do ciclo de vida do projeto.
