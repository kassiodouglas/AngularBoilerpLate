
## Boilerplate Angular 19 V1.0.0

# Instalar

Instale a versão: NodeJS v20+

Execute para instalar as bibliotecas pré-definidas:
```
npm i
```

## Com docker
Instale o app na porta 3000 com docker
```
docker-compose up --build --force-recreate -d
```

# Bibliotecas Usadas Neste Projeto
Abaixo está uma lista das principais bibliotecas utilizadas neste projeto, juntamente com suas descrições e casos de uso.

1. <b>@fortawesome/fontawesome-free</b>
- Versão: ^6.6.0

  O Font Awesome Free inclui milhares de ícones em três estilos: sólido, regular e marcas. Ele funciona perfeitamente com a biblioteca angular-fontawesome para uso em projetos Angular.
  Caso de Uso: Fornece acesso à coleção completa de ícones gratuitos do Font Awesome para aprimorar a interface do usuário.

2. <b>animate.css</b>
- Versão: ^4.1.1

  Animate.css é uma biblioteca CSS para criar animações compatíveis com navegadores de forma simples. Inclui uma grande variedade de animações predefinidas, como fade-ins, bounces e zooms.
  Caso de Uso: Adicionar animações atraentes a elementos da interface, como botões, modais e outros componentes, para melhorar a experiência do usuário.

3. <b>notiflix</b>
- Versão: ^3.2.7

  Notiflix é uma biblioteca JavaScript leve para criar notificações personalizáveis, alertas, indicadores de carregamento e diálogos de confirmação.
  Caso de Uso: Fornecer feedback aos usuários por meio de notificações elegantes, incluindo mensagens de sucesso, erro e informação.

4. <b>moment</b>
- Versão: ^2.30.1

  Moment.js é uma biblioteca JavaScript popular para análise, validação, manipulação e formatação de datas.
  Caso de Uso: Simplificar o trabalho com datas e horários, incluindo formatação, conversões de fuso horário e comparações de datas.

5. <b>aos (Animate on Scroll)</b>
- Versão: ^2.3.4

  AOS é uma biblioteca leve para adicionar animações disparadas por eventos de rolagem. Permite que elementos animem ao entrar na tela conforme o usuário rola a página.
  Caso de Uso: Criar efeitos de rolagem envolventes, como fade-ins e slide-ups, para melhorar a interatividade geral do aplicativo.

6. <b>@faker-js/faker</b>
- Versão: ^9.6.0

  Uma biblioteca para gerar dados falsos de maneira fácil e rápida.
  Caso de Uso: Criar dados fictícios para testes, protótipos ou para preencher tabelas com dados simulados.

7. <b>@lithiumjs/angular</b>
- Versão: ^8.0.1

  Biblioteca para melhorar a experiência com Angular, fornecendo componentes e utilitários de alto desempenho.
  Caso de Uso: Usar os componentes e utilitários para aumentar a eficiência e a qualidade do código.

8. <b>@lithiumjs/ngx-virtual-scroll</b>
- Versão: ^0.3.3

  Biblioteca para implementar rolagem virtual em Angular, permitindo renderizar listas grandes de maneira eficiente.
  Caso de Uso: Utilizar em listas grandes para melhorar o desempenho e a experiência do usuário ao visualizar grandes volumes de dados.

9. <b>@ng-bootstrap/ng-bootstrap</b>
- Versão: ^18.0.0

  Biblioteca para usar componentes do Bootstrap com Angular.
  Caso de Uso: Adicionar componentes do Bootstrap como modais, popovers, tooltips, etc., diretamente no Angular.

10. <b>bootstrap</b>
- Versão: ^5.3.3

  Framework front-end popular para criar interfaces responsivas e móveis.
  Caso de Uso: Utilizar para criar layouts rápidos e responsivos usando a grade e os componentes do Bootstrap.

11. <b>miragejs</b>
- Versão: ^0.1.48

  Biblioteca para criar APIs de teste simuladas.
  Caso de Uso: Simular APIs para testes e desenvolvimento sem depender de back-end real.

12. <b>ngx-mask</b>
- Versão: ^19.0.6

  Biblioteca para aplicar máscaras de entrada em campos de formulário.
  Caso de Uso: Facilitar a formatação de entradas de usuário, como CPF, CNPJ, telefones e outros campos com formatação específica.

13. <b>signature_pad</b>
- Versão: ^5.0.4

  Biblioteca para capturar assinaturas manuscritas em formulários digitais.
  Caso de Uso: Permitir que os usuários assinem digitalmente em dispositivos com toque ou mouse.

# Comandos de servidor

Servir na porta 3000 com ambiente 'development':
```
npm run serve
```

Servir na porta 3000 com ambiente 'development' e habilitar o servidor para dados fakes:
```
npm run serve:mock
```

Servir na porta 3000 com ambiente 'test':
```
npm run serve:test
```

Servir na porta 3000 com ambiente 'production':
```
npm run serve:prod
```

# Comandos de build
Compila a aplicação com ambiente 'development':
```
npm run build
```

Compila a aplicação com ambiente 'test':
```
npm run build:test
```

Compila a aplicação com ambiente 'production':
```
npm run build:prod
```

## Comandos de Geração
Os seguintes comandos são usados para gerar diferentes tipos de arquivos e estruturas dentro de um projeto Angular. Eles utilizam um script customizado generate.js para gerar os componentes e outras entidades com base no caminho especificado.


 1. <b>make:guard NOME</b>
    -  Cria um guard dentro de core;

 2. <b>make:interceptor NOME</b>
    -  Cria um interceptor dentro de core;

 3. <b>make:feature NOME</b>
    -  Cria um módulo roteado na raiz de features;

 4. <b>make:page FEATURE NOME</b>
     -  Cria um componente de pagina dentro da feature informada;

 5. <b>make:component NOME</b>
      -  Cria um componente compartilhável em shared/components;

 6. <b>make:directive NOME</b>
      -  Cria uma directiva compartilhável em shared/directives;

 7. <b>make:model NOME</b>
      -  Cria uma interface compartilhável em shared/models;

 8. <b>make:pipe NOME</b>
      -  Cria um pipe compartilhável em shared/pipes;

 9. <b>make:service NOME</b>
      -  Cria um service compartilhável em shared/services;

 109. <b>make:service FEATURE NOME</b>
      -  Cria um service exclusivo dentro da feature informada;


### Exemplo de Uso
Se você deseja gerar um componente chamado header dentro da pasta shared/components, você pode executar:

```
npm run make:component header
```

Se você deseja gerar um service exclusivo de uma feature User você pode executar:

```
npm run make:service User meu-user-service
```
Esse comando criará um service diretório features/user/services/meu-user-service.service.ts.

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
  │   │   ├───guards
  │   │   ├───interceptors    
  │   │   └───services
  │   ├───features
  │   └───shared
  │       ├───components
  │       ├───directives
  │       ├───models
  │       ├───services
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

  - **guards/**: Guardas de rota que controlam o acesso a determinadas páginas (ex.: AuthGuard).
  - **interceptors/**: Interceptadores HTTP para manipular requisições e respostas (ex.: Adicionar cabeçalhos de autenticação).



- **features/**:
  Contém os módulos específicos de funcionalidades ou páginas, organizados por domínio ou caso de uso (ex.: `products`, `users`). Cada funcionalidade geralmente possui seus próprios componentes, serviços e rotas.

- **shared/**:
  Diretório para recursos reutilizáveis que podem ser usados em várias partes do projeto.
  - **components/**: Componentes reutilizáveis, como botões, modais ou tabelas.
  - **directives/**: Diretivas personalizadas reutilizáveis.
  - **pipes/**: Pipes personalizados reutilizáveis para formatação de dados.
  - **models/**: Local de armazenamento das interfaces de dados.
  - **services/**: Serviços centrais que fornecem funcionalidades compartilhadas.

##### **environments/**
Contém arquivos de configuração de ambiente (`environment.ts` e `environment.prod.ts`). Esses arquivos permitem definir variáveis específicas para cada ambiente (desenvolvimento, produção, etc.).

---

## Considerações
1. **Modularização**: A estrutura modular garante que cada parte da aplicação seja isolada e facilmente testável.
2. **Reutilização**: Componentes, diretivas e pipes compartilhados são centralizados no diretório `shared/`, promovendo a reutilização e a consistência.
3. **Escalabilidade**: A separação de funcionalidades no diretório `features/` facilita a adição de novas features sem impactar as existentes.
4. **Centralização do Core**: Recursos globais são agrupados no diretório `core/`, reduzindo redundâncias e promovendo boas práticas.

Essa estrutura é altamente recomendada para aplicações Angular de médio a grande porte, proporcionando organização e facilidade de manutenção ao longo do ciclo de vida do projeto.

# Mock-Server
O MirageJS é uma biblioteca para simulação de APIs RESTful, útil para criar mocks de dados e testar seu aplicativo sem depender de uma API real. Ele é frequentemente combinado com o Faker.js (ou o @faker-js/faker, que é uma versão mais atualizada) para gerar dados falsos realistas, como nomes, endereços e outros dados que podem ser usados para testar sua aplicação.

## Exemplo
```
// src/mock-server/server.ts

import { createServer, Model, Factory } from 'miragejs';
import { faker } from '@faker-js/faker'; // Importando o faker

export function makeServer() {
  const server = createServer({
    models: {
      user: Model, // Definindo um modelo para usuários
    },

    factories: {
      user: Factory.extend({
        // Usando Faker.js para gerar dados falsos
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
      }),
    },

    routes() {
      this.namespace = 'api'; // Definindo o namespace da API

      // Endpoint que retorna uma lista de usuários
      this.get('/users', (schema) => {
        return schema.users.all(); // Retorna todos os usuários simulados
      });

      // Endpoint que retorna um único usuário
      this.get('/user/:id', (schema, request) => {
        let id = request.params.id;
        return schema.users.find(id); // Retorna o usuário baseado no ID
      });
    },

    seeds(server) {
      // Criando dados falsos ao iniciar o servidor
      server.createList('user', 10); // Cria uma lista de 10 usuários
    },
  });

  return server;
}

```
