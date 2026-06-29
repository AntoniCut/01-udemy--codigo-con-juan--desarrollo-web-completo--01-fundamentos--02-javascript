/*
    *  -----------------------------------------------------------------------------  *
    *  -----  /predev.js  --  /predev.js  ------------------------------------------  *
    *  -----------------------------------------------------------------------------  *
    * 
    *  Limpia el entorno de desarrollo antes de `pnpm run dev`:
    *  - Elimina la carpeta `app/` (artefacto servible).
    *  - Elimina todo el contenido de `src/markdown-shiki/` (se regenera con generateShiki).
    *  - Elimina `dist/` por seguridad.
    *  Uso: `node predev.js` (ejecutado automáticamente por pnpm como `predev`).
*/


import { deleteAsync } from 'del';
import { existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));


const main = async () => {

    const targets = [
        { path: join(__dirname, 'app'), label: 'app' },
        { path: join(__dirname, 'dist'), label: 'dist' },
        { path: join(__dirname, 'src', 'markdown-shiki', '**', '*'), label: 'src/markdown-shiki/**/*' },
        { path: join(__dirname, 'src', 'markdown-shiki'), label: 'src/markdown-shiki' },
    ];

    console.log('\n🧹  Limpiando entorno de desarrollo...\n');

    for (const { path, label } of targets) {
        if (existsSync(path)) {
            await deleteAsync([path]);
            console.log(`   ✅  Eliminar: ${label}/`);
        } else {
            console.log(`   ⏭️  Omitido (no existe): ${label}/`);
        }
    }

    console.log('\n✨  Entorno listo. Iniciando pnpm dev...\n');
};


main().catch((err) => {
    console.error('❌  Error en predev:', err);
    process.exit(1);
});
