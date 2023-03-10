# DMT-Standalone-APP-Installer for svelte-kit

> for [svelte+vite(svite)](https://github.com/Anyass3/dmt-installer/tree/svite)

> Now with vite we don't neccesarily need hash-based-routing.
> any type of routing will work

### in the settings.json

- app_base: change app_base value to your app_base-route - the frontend sub-route in which the app should run.
- manifest: if you have one in static change its value to yours
- app_html: your main html entry before build
- build: your app build directory
- hook: if you have a dmt hook change it to its directory

# installation

in your project's root directory edit dmt/settings.json before installing the app, then run:

```bash
dmt integrate
```

now to install the dmt-app

```bash
npm run dmt-install
```

# dmt-installer
