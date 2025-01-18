# Boilerplate Angular 19  V1.0.0

## Instalar

## Comandos

Servir na porta 3000 com abiente 'development':
```
npm run serve
```


## Estrutura de pastas

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

- public: pasta publica onde haverá arquivos estáticos
  - fonts: fontes externas e customizadas
  - images: imagens diversas
  - styles: estilos globais
  - data: arquivos estáticos de dados (json)

- src: arquivos de desenvolvimento
  - app/core: elementos unícos do núcleo do app; páginas únicas como login, erros
  - app/features: features, módulos, páginas, elementos que serão usados na aplicação
  - app/shared: módulo para elementos compartilhávies; elementos sem dependência externa
  - environments: arquivos de configurações dos ambientes


## Bibliotecas instaladas
```
"@fortawesome/angular-fontawesome": "^0.15.0",
"@fortawesome/fontawesome-free": "^6.6.0",
"animate.css": "^4.1.1",
"notiflix": "^3.2.7",
"moment": "^2.30.1"
```
