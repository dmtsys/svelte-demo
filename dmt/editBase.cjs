const fs = require('fs');
const { join: pathJoin } = require('path');

let settings = fs.readFileSync('dmt/settings.json', 'utf-8');
settings = JSON.parse(settings);

const app_base = pathJoin('/', settings.app_base);
// change this to your app base name
// ie. the frontend sub-route in which the app should run.

const canEditRe = `paths\\:[\\ ]{[\\t\\n\\ ]*base:[\\ ]*\\'${app_base}\\'[\\t\\n\\ ]*\\}[\\ ]*\\,`;

function edit(filePath) {
	const re = /kit:[\ ]*{/;
	const toAdd = `kit: {
		paths: {
			base: '${app_base}'
		},`;
	if (fs.existsSync(filePath)) {
		let fileStr = fs.readFileSync(filePath, 'utf8');
		canEdit = !RegExp(canEditRe).test(fileStr);
		if (canEdit) {
			fileStr = fileStr.replace(re, toAdd);
			fs.writeFileSync(filePath, fileStr);
			console.log(`Add base ^${app_base}.*`);
		}
	}
}

edit('svelte.config.js');
edit('svelte.config.cjs');
