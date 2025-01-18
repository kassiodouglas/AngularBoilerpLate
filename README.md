## Boilerplate Angular 19  V1.0.0

# Instalar

Instale a versão: NodeJS v20+

Execute para instalar as bibliotecas pré-definidas:
```
npm i
```

# Bibliotecas pré-definidas
```
"@fortawesome/angular-fontawesome": "^0.15.0",
"@fortawesome/fontawesome-free": "^6.6.0",
"animate.css": "^4.1.1",
"notiflix": "^3.2.7",
"moment": "^2.30.1"
"aos": "^2.3.4",
```

# Comandos

Servir na porta 3000 com ambiente 'development':
```
npm run serve
```

Executar os testes unitários
```
npm run test
```


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
