/*
    *  -----------------------------------------------------------------------------  *
    *  -----  /generate-shiki-from-scripts.js  ------------------------------------  *
    *  -----------------------------------------------------------------------------  *
    *  Genera los HTML resaltados con Shiki (tema dark-plus) para cada archivo .js
    *  de cada sección de src/scripts/0X-*.  La estructura de salida replica el
    *  patrón de la ruta 02-route-variables.js:
    *    src/markdown-shiki/0X-seccion/archivo.html
    *  Uso: node generate-shiki-from-scripts.js
*/

import { codeToHtml } from 'shiki';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCRIPTS_DIR = join(__dirname, 'src', 'scripts');
const OUTPUT_DIR = join(__dirname, 'src', 'markdown-shiki');
const THEME = 'dark-plus';


const walk = (dir) => {
    const out = [];
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        const stat = statSync(full);
        if (stat.isDirectory()) out.push(...walk(full));
        else if (entry.endsWith('.js')) out.push(full);
    }
    return out;
};


const main = async () => {
    const files = walk(SCRIPTS_DIR);
    let generated = 0;
    let skipped = 0;

    for (const file of files) {
        const rel = file.slice(SCRIPTS_DIR.length + 1);
        const outRel = rel.replace(/\.js$/, '.html');
        const outPath = join(OUTPUT_DIR, outRel);

        const code = readFileSync(file, 'utf-8');
        const html = await codeToHtml(code, { lang: 'javascript', theme: THEME });

        mkdirSync(dirname(outPath), { recursive: true });
        writeFileSync(outPath, html, 'utf-8');

        console.log(`✅ src/markdown-shiki/${outRel}`);
        generated++;
    }

    console.log(`\n🎉  Completado — generados: ${generated} | omitidos: ${skipped}`);
};


main().catch((err) => {
    console.error('Error generando Shiki:', err);
    process.exit(1);
});
