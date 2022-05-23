# API blog exercise

This project implement various strong and usefull tools to help

- Back developer to build the API for a blog
- Front developer to use the API

## Clean code

To keep clean and beautiful code, this app propose some NPMs (Node Package Module) in dev dependencies

- **[ESLlint](https://eslint.org/)** file that extends the airbnb config which is one of the most popular
- **[Prettier](https://prettier.io/)** file to formate the code
- **[EditorConfig](https://editorconfig.org/)** file to help to maintain consistent coding rules across various IDE (integrated development environment)

## Logs and debug

To have better logs in console and keep some logs saved in log files

- **[debug](https://www.npmjs.com/package/debug)** provides better console logs and allow to toggle the logs for differents parts of the modules
- **[bunyan](https://www.npmjs.com/package/bunyan)** allow to save some logs in JSON

## Validate data sent

To validate the data format

- **[joi](https://www.npmjs.com/package/joi)** allow to describe data in schemas, and validate the compliance of the data sent.

## Handle async/await

In the `helpers` folder, `controllerHandler.js` is used with each route which needs async/await. It wraps all the called controllers in a try/catch that allows to lighten the code without include all async/await in try/catch everywhere.

## Handle error

A csutom class named `ApiError` is available to get errors with status code and to throw custom error, with custom message and code.

## Migrations folder

The DDL (Data Manupilation Language) of the database is managed by **[Sqitch](https://sqitch.org/)**, a **version control framework** for databases.

We can find the deployment plan: `migrations > sqitch.plan`.

- Init the db by creating tables and columns
- Add a **domain** for the category routes with **regex**
- Add a **domain** for the slugs of posts with **regex**
- Add a custom **view** that joins posts and categories

## SQL scripts

In `data` folder, we can find two `.json` files which contain the data.
We have to run the `import.js` script to import data from `json` files in the database.
