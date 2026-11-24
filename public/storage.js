const key='av-rescue-banks-v1';
export function loadBrowserBanks(storage=globalThis.localStorage){
  try{const banks=JSON.parse(storage.getItem(key)||'[]');return Array.isArray(banks)?banks:[];}catch(_){return [];}
}
export function saveBrowserBank(bank,storage=globalThis.localStorage){
  const banks=loadBrowserBanks(storage).filter(b=>b&&b.id!==bank.id);
  banks.push(bank);
  try{storage.setItem(key,JSON.stringify(banks));}
  catch(_){throw new Error('Der Browser kann die Aufgaben nicht speichern. Prüfe den verfügbaren Speicher oder verwende ein normales Browserfenster.');}
}
