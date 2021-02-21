#  ![](favicon.png) cbevins/template-node-lib

A template repository for development of Node module libraries with rollup, jest, eslint, coveralls, and babel packages.

To create a new repository from this template, press the green `Use this template` button on this page.  Enter the new repo name and description, and copy the new repo's URL.

From your computer, enter:
```
> git clone https://github.com/cbevins/new-repo-name.git
> cd new-repo-name
> npm install
```

Modify the `package.json` file and apply the new repo name.

---

#  ![](favicon.png) Previous installation Notes

A custom starter package for projects that produce an NPM library package.

Produces a new project folder with configuration files and NPM packages installed for:
- Babel
- Eslint
- Jest, Coveralls
- Rollup


## setup-lib.bat

`setup-lib.bat` is a Windows batch file that creates a new project folder structure and copies starter configuration files and development packages into it.  Copy the `setup-lib.bat` file to the folder that will contain the new project folder, and run it as follows:
```
> setup-lib my-project-folder
```

## package.json

Change into the new my-project-folder and edit the following fields within the `package.json` file:
- name
- version
- description
- keywords
- repository
- publishConfig
- bugs
- homepage

## Scripts
```
npm run test
npm run test:coverage
npm run test:watch
npm run build
```

## Git

Create a new GitHub repo without a .gitignore, README.md or LICENSE file.  Then copy the new GIT repo URL and paste it into the following command line:
```
 git remote add origin remote-repository-URL
 ```
