import {mkdir,readFile,writeFile,readdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {dirname,resolve,join} from 'node:path';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
export const publicFiles=['index.html','styles.css','app.js','engine.js','math.js','scene.js','storage.js','codebreaker.js','football.js','favicon.svg'];
export async function build(output=join(root,'dist')){
  await mkdir(output,{recursive:true});
  for(const item of await readdir(output,{withFileTypes:true})){
    if(!item.isFile()||!publicFiles.includes(item.name))throw new Error('Im Ausgabeordner liegt eine unerwartete Datei. Es werden keine fremden Dateien veröffentlicht.');
  }
  for(const name of publicFiles){
    const content=await readFile(join(root,'public',name));
    if(/OPENAI_API_KEY\s*=\s*["']?sk-/i.test(content.toString('utf8')))throw new Error('Ein Schlüssel darf nicht in den öffentlichen Dateien stehen.');
    await writeFile(join(output,name),content);
  }
  console.log('Vercel-Build fertig: Startseite und '+(publicFiles.length-1)+' öffentliche Dateien in dist.');
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))await build();
