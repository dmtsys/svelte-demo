const fs = require('fs');
const { join: pathJoin } = require('path');

let settings = fs.readFileSync('dmt/settings.json', 'utf-8');
settings = JSON.parse(settings);

let app = fs.readFileSync('dmt-hook/server/app.js', 'utf-8');

const app_base = pathJoin('/', settings.app_base);
// change this to your app base name
// ie. the frontend sub-route in which the app should run.
app = app.replace(/set_paths\(\{[^;]+/, `set_paths({ base: '', assets: '${app_base}' })`);
fs.writeFileSync('dmt-hook/server/app.js', app);
