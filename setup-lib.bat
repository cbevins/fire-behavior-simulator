@echo off
IF "%1"=="" goto useage
echo Creating directory structure ...
mkdir %1
cd %1
echo Copying package config files ...
copy ..\starter-lib\.babelrc .
copy ..\starter-lib\.editorconfig .
copy ..\starter-lib\.eslintignore .
copy ..\starter-lib\.eslintrc.js .
copy ..\starter-lib\.gitignore .
copy ..\starter-lib\.npmrc .
copy ..\starter-lib\.prettierignore .
copy ..\starter-lib\rollup.config.js .
copy ..\starter-lib\starter-package.json .\package.json
echo Installing required packages ...
call npm i -D @babel/core
call npm i -D @babel/preset-env
call npm i -D @rollup/plugin-babel
call npm i -D @rollup/plugin-json
call npm i -D @rollup/plugin-node-resolve
call npm i -D @rollup/pluginutils
call npm i -D coveralls
call npm i -D eslint
call npm i -D eslint-config-standard
call npm i -D eslint-plugin-import
call npm i -D eslint-plugin-jest
call npm i -D eslint-plugin-node
call npm i -D eslint-plugin-promise
call npm i -D eslint-plugin-standard
call npm i -D jest
call npm i -D rimraf
call npm i -D rollup
call npm i -D rollup-plugin-terser
call npm i -D rollup-plugin-uglify
call git init
echo Next steps:
echo - Read the README.md
echo - Edit package.json name, version, description, keywords, repository, homepage, etc
echo - git add remote origin
goto end
:useage
echo USEAGE: setup-lib folder
:end