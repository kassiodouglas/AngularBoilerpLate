
// Cria comandos para serem executados

const { exec } = require('child_process');

const args = process.argv.slice(2);

// const name = args[1];
let dir = args.find(arg => arg.startsWith('--dir='))?.split('=')[1];
let type = dir;
let mod_type = 'shared'

const featured = args[2] ? true : false;

if(!args[1]){
  console.error(`ERROR: Arg NAME not found!`);
  return;
}

if(!dir){
  console.error(`ERROR: Arg DIR not found!`);
  return;
}

if(['page'].includes(dir) && !args[2]){
  console.error(`ERROR: Arg FEATURE not found!`);
  return;
}

if (['guard', 'interceptor'].includes(dir)) {
  mod_type = 'core';
}else if (['feature'].includes(dir)) {
  type = "module";
}else if (['page'].includes(dir)) {
  type = "component";
}else{
  mod_type = 'shared';
}

if (['feature'].includes(dir)) {
  command = `ng generate ${type} /${dir}s/${args[1]} --routing true`

}else if(['page'].includes(dir)) {
  command = `ng generate ${type} /features/${args[1].toLowerCase()}/pages/${args[2]} --standalone=false  --selector=page-${args[2]} --module=${args[1].toLowerCase()}`;

}else if(['module'].includes(dir)) {
  command = `ng generate ${type} /shared/components/${args[1].toLowerCase()} --routing=false `;

}else if(['service'].includes(dir) && featured) {
  command = `ng generate ${type} /features/${args[1].toLowerCase()}/${dir}s/${args[2]}`;

}else{
  command = `ng generate ${type} /${mod_type}/${dir}s/${args[1]}`
}


exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error executing command: ${err.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`${stdout}`);
});
