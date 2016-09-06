# Mais
Mais is a TypeScript/JavaScript experimental project that will host many modules.

TypeScript files default to ES6 target with commonjs (require) module format in
order for the generated JavaScript files to be picked up by the NodeJS system.

The chosen IDE is the VSCode so the project includes the basic files for it. Open
the project folder on the IDE and then press CTRL+SHFT+B to start the task
watcher which will compile the files as they are edited automatically.

---------

The project is supposed to have a focus on scripting and syncrhonous APIs. We 
try to avoid depending on Promise and async building blocks.

The project could be consumed from JavaScript projects directly. As we archive
the generated JavaScript files alongside their TypeScript sources.

The target and module system could be altered by editing the tsconfig.json file.

The confusion caused by NodeJS not yet handling the ES6 import module command
seems to be a little hard to cope with for projects that need a bit of both NodeJS
and browser love.

---------

Mais is a Portuguese word that means more. As in we want more JavaScript!
