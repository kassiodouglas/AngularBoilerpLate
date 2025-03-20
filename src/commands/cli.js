#!/usr/bin/env node

const { Command } = require("commander");
const { execSync } = require("child_process");

const program = new Command();

program
  .name("li2")
  .description("CLI personalizado para automação de comandos no Angular")
  .version("1.0.0");

// Função auxiliar para executar comandos do Node
const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error("Erro ao executar o comando:", error.message);
  }
};

// Comandos serve
program.command("serve")
  .description("Inicia o servidor no modo development")
  .action(() => runCommand("ng serve --configuration development --host 0.0.0.0 --port 3000"));

program.command("serve:test")
  .description("Inicia o servidor no modo test")
  .action(() => runCommand("ng serve --configuration test --host 0.0.0.0 --port 3000"));

program.command("serve:mock")
  .description("Inicia o servidor no modo mock")
  .action(() => runCommand("ng serve --configuration mock --host 0.0.0.0 --port 3000"));

program.command("serve:prod")
  .description("Inicia o servidor no modo production")
  .action(() => runCommand("ng serve --configuration production --host 0.0.0.0 --port 3000"));

// Comandos build
program.command("build")
  .description("Compila o projeto no modo development")
  .action(() => runCommand("ng build --configuration development"));

program.command("build:test")
  .description("Compila o projeto no modo test")
  .action(() => runCommand("ng build --configuration test"));

program.command("build:mock")
  .description("Compila o projeto no modo mock")
  .action(() => runCommand("ng build --configuration mock"));

program.command("build:prod")
  .description("Compila o projeto no modo production")
  .action(() => runCommand("ng build --configuration production"));

// Comandos make
const makeCommands = [
  "guard", "interceptor", "feature", "page",
  "component", "directive", "model", "pipe",
  "service", "module"
];

makeCommands.forEach((type) => {
  program
    .command(`make:${type} <name>`)
    .description(`Cria um novo ${type}`)
    .action((name) => runCommand(`node src/commands/make.js --dir=${type} ${name}`));
});

// Exibe ajuda se nenhum comando for fornecido
program.showHelpAfterError();
program.parse(process.argv);
