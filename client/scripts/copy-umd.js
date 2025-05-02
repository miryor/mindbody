// Script to copy the UMD file to the public directory
import { copyFile } from 'fs/promises';
import { existsSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __dirname = dirname(fileURLToPath(import.meta.url));

const SOURCE_FILE = './dist/lib/mindbody-widgets.umd.js';
const DEST_FILE = './public/mindbody-widgets.umd.js';

async function copyUmdFile() {
  try {
    console.log(`Copying ${SOURCE_FILE} to ${DEST_FILE}...`);
    
    // Ensure the destination directory exists
    const destDir = dirname(DEST_FILE);
    if (!existsSync(destDir)) {
      console.log(`Creating directory ${destDir}...`);
      mkdirSync(destDir, { recursive: true });
    }
    
    // Copy the file
    await copyFile(SOURCE_FILE, DEST_FILE);
    console.log('UMD file copied successfully!');
    
    // Also make a copy with the version in the name
    const packageJson = await import('../package.json', { assert: { type: 'json' } });
    const version = packageJson.default.version;
    const versionedFile = DEST_FILE.replace('.umd.js', `.${version}.umd.js`);
    
    await copyFile(SOURCE_FILE, versionedFile);
    console.log(`Versioned UMD file copied to ${versionedFile}`);
  } catch (error) {
    console.error('Error copying UMD file:', error);
    process.exit(1);
  }
}

copyUmdFile(); 