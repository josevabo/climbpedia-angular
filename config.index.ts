import { environment } from './src/environments/environment.prod'
import { writeFile } from 'fs';

const targetPath = './src/environments/environment.prod.ts';
let replacedEnvironment: any = {};

console.log("Replacing environment variables")
Object.entries(environment).forEach(([key, value], index) => {
  value = value as string;
  let systemValue: any = value;
  if (process.env[value] && process.env[value] != null) {
    console.log("Replacing " + key)
    systemValue = process.env[value];
  }
  replacedEnvironment[key] = systemValue;
})

const envConfigFile = "export const environment = " + JSON.stringify(replacedEnvironment,null, "\t");
writeFile(targetPath, envConfigFile, 'utf-8', (err) => {
  if (err) console.error(err);
})

console.log(envConfigFile)
console.log(process.env)
