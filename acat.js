#!/usr/bin/env node

let process = require('process');
let fs = require('fs');

if (process.argv.length == 2){
  console.log('Usage: acat <filename>');
} else {
  for (var i = 2; i < process.argv.length; ++i) {
    fs.readFile(process.argv[i], 'utf-8', (error, data)=> {
      if (error) {
        console.error(error);
      } else {
        console.log(data);
      }
    });
  }
}
