/*
  Copy *.ts and *.d.ts files from ./jspm_packages/npm/ to ./node_modules/@types/
  This tool is for TypeScript 2.0.
*/
const lodash = require('lodash');
const fs = require('fs-extra');
const path = require('path');
const root = path.resolve();

require(root + '/jspm_packages/system.src'); // SystemJS
require(root + '/jspm.config'); // jspm config file

console.log(SystemJS.map);
/* {
  '@angular/common': 'npm:@angular/common@2.0.0-rc.4', 
  '@angular/compiler': 'npm:@angular/compiler@2.0.0-rc.4', 
  ... 
} */

lodash.forEach(SystemJS.map, (value, key) => {
  const isNpm = value.split(':')[0] === 'npm' ? true : false;
  if (isNpm) {
    console.log(key); // @angular/core
    const dirPath = value.replace(':', '/');
    console.log(dirPath); // npm/@angular/core@2.0.0-rc.4

    fs.copySync(root + '/jspm_packages/' + dirPath, root + '/node_modules/@types/' + key, { filter: /\.ts/ });
  }
});