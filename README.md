# global-proxy-setter

A simple utility to set HTTP and HTTPS proxies for Node.js applications using the `global-agent` package.

## Installation

To install this package globally, run:

```bash
npm install -g global-proxy-setter
```

You can also use `npm link` for local development:

```bash
npm link
```

## Usage

To use this package, you need to preload it when starting your Node.js application:

```bash
node -r global-proxy-setter your-app.js
```

The default proxy port is 1086. If you want to change it, set the `SET_PROXY_PORT` environment variable before running your application:

```bash
export SET_PROXY_PORT=7890
node -r global-proxy-setter your-app.js
```

## Important note

If you face issues with `node -r global-proxy-setter` and receive a "MODULE_NOT_FOUND" error, it could be due to Node.js not checking your global `node_modules` directory.

You can fix this by adding the global `node_modules` directory to your `NODE_PATH` environment variable:

```bash
export NODE_PATH=$(npm root -g)
```

After doing this, you should be able to run `node -r global-proxy-setter` without any issues.

## License

This project is licensed under the terms of the ISC license.
