const { exec } = require('child_process');
const path = require('path');

// Parse command-line arguments
const args = process.argv.slice(2);
const pathCommand = args.find(arg => arg.startsWith('--path='))?.split('=')[1];
const name = process.env.npm_config_name;

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
};

let generate = generateMap[pathCommand] || 'component';

// Set 'where' for specific cases
if (['guards', 'interceptors'].includes(pathCommand)) {
  where = 'core';
}else if (['pipes'].includes(pathCommand)) {
  where = 'shared';
}

if (!['core', 'features', 'shared'].includes(where)) {
  console.error(`Error: Param 'where' is invalid. Valid options: 'core', 'features', 'shared'`);
  process.exit(1);
}

if (!['components', 'guards', 'interceptors', 'pages', 'services', 'features', 'modules','pipes'].includes(pathCommand)) {
  console.error(`Error: Param 'path' is invalid. Valid options: 'components', 'guards', 'interceptors', 'pages', 'services', 'features', 'modules'`);
  process.exit(1);
}

if (!name) {
  console.error(`Error: Param 'name' is required!`);
  process.exit(1);
}

// Build the Angular CLI command
let command = `ng g ${generate} ${where}/${pathCommand === 'features' ? name : `${pathCommand}/${name}`}`;

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
