Docker commands to run pj
1. sudo docker build -t ethereum-wallet-interface.
2. sudo docker run -p 5003:5003 ethereum-wallet-interface

Npm:
1. yarn|npm install
2. yarn|npm start:frontend


Ethereum Wallet Interface
The Ethereum Wallet Interface is a project providing an integration interface with Ethereum wallets. This project leverages the power of React, TypeScript, and Webpack, and utilizes libraries such as ethers, @ethersproject/providers, @web3modal/ethereum, and @walletconnect/web3-provider to interface with wallets and conduct transactions.

The application's theme has been generated with the help of Artificial Intelligence (AI) techniques. This approach provides a unique and modern visual aesthetic to the application interface.

Integration with Aave protocol is also incorporated, enabling the retrieval of the token list from Aave and facilitating easy interaction with these tokens.

Dependencies
@ethersproject/providers, ethers: These libraries enable interaction with the Ethereum blockchain.
@web3modal/ethereum, @web3modal/react, web3modal: These libraries provide a user interface to allow users to connect to various Ethereum wallets.
@walletconnect/web3-provider: This enables wallets to connect to the dApp via the WalletConnect protocol.
react, react-dom, react-router-dom: These are the core libraries for creating the user interface.
three: This library is used for creating and handling 3D graphics.
wagmi: This library contains utilities and helpers for Ethereum dApps.
Dev-dependencies
@babel/*: Babel and its plugins and presets are used to transpile TypeScript and JSX to JavaScript.
@typescript-eslint/*: These are plugins and parser for ESLint to support TypeScript.
eslint, eslint-plugin-prettier, eslint-plugin-react, and others: These tools ensure code quality.
webpack, webpack-dev-server, webpack-cli, webpack-bundle-analyzer: These tools are used for bundling and development of the application.
html-loader, html-webpack-plugin, style-loader, css-loader, sass-loader: These webpack loaders and plugins handle the processing of HTML, CSS, and Sass files.
dotenv-webpack: This provides integration with environment variables for webpack.
prettier: This tool is used for automatic code formatting.
