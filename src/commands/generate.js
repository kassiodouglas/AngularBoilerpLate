const { exec } = require('child_process');
const path = require('path');

// Parse command-line arguments
const args = process.argv.slice(2);
const pathCommand = args.find(arg => arg.startsWith('--path='))?.split('=')[1];
let name = process.env.npm_config_name;
const feature = process.env.npm_config_feat;

let where = process.env.npm_config_where || 'features';

// Validate and set the generate type based on pathCommand
const generateMap = {
  components: 'component',
  guards: 'guard',
  interceptors: 'interceptor',
  pages: 'component',
  services: 'service',
  features: 'module',
  modules: 'module',
  pipes: 'pipe',
  models: 'interface',
};

let generate = generateMap[pathCommand] || 'component';

// Set 'where' for specific cases
if (['guards', 'interceptors', 'models'].includes(pathCommand)) {
  where = 'core';
}else if (['pipes'].includes(pathCommand)) {
  where = 'shared';
}

if (!['core', 'features', 'shared'].includes(where)) {
  console.error(`Error: Param 'where' is invalid. Valid options: 'core', 'features', 'shared'`);
  process.exit(1);
}

if (!['components', 'guards', 'interceptors', 'pages', 'services', 'features', 'modules','pipes','models'].includes(pathCommand)) {
  console.error(`Error: Param 'path' is invalid. Valid options: 'components', 'guards', 'interceptors', 'pages', 'services', 'features', 'modules'`);
  process.exit(1);
}

if (!name) {
  console.error(`Error: Param 'name' is required!`);
  process.exit(1);
}

if(generate === 'module'){
  name = `${name} --routing true`
}


// Build the Angular CLI command
let command = '';
if(generate === 'component' && feature !== undefined){
  name = `${feature}/${pathCommand}/${name}`
  command = `ng g ${generate} ${where}/${name}`;
}else{
  command = `ng g ${generate} ${where}/${pathCommand === 'features' ? name : `${pathCommand}/${name}`}`;
}


// Execute the command
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
