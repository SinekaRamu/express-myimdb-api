# express-myimdb-api

Initial steps to create api, which runs in node.

1. `npm init -y` creates package.json
2. download express frameword `npm i express`
3. `echo node_modules >> .gitignore` creates .gitignore files and write node_modules
4. create a application folder `mkdir app` with index.js file.
5. Install the Dev dependencies `npm i -D nodemon`
    - `npm i morgan` prints the http log in the terminal
    - `npm i joi` used to validate the user data given to the api.
    - `npm i dotenv` used to maintain the secret files that should not pushed to the git repo, confidential datas.
    - `npm i uuid` used to create unique id.

6. change the script in package.json