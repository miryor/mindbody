// Script to copy the UMD file to the public directory
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Derive __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve paths relative to the client directory root
const clientDir = path.resolve(__dirname, '..'); 
const sourceDir = path.resolve(clientDir, 'dist/lib');
const targetDir = path.resolve(clientDir, 'public');

// Adjust source filename to look for .umd.cjs
const sourceFileName = 'mindbody-widgets.umd.cjs'; 
// Keep target filename as .umd.js for consistency with HTML
const targetFileName = 'mindbody-widgets.umd.js'; 

const sourcePath = path.join(sourceDir, sourceFileName);
const targetPath = path.join(targetDir, targetFileName);

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Function to copy the file
async function copyUmdFile() {
    try {
        console.log(`Copying ${sourcePath} to ${targetPath}...`);
        await fs.promises.copyFile(sourcePath, targetPath);
        console.log('UMD file copied successfully!');
        
        // --- Versioned Copy Logic (Keep as is) ---
        // Read package.json to get the version
        const packageJsonPath = path.resolve(clientDir, 'package.json');
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
        const version = packageJson.version;
        
        if (version) {
            const versionedTargetFileName = `mindbody-widgets.${version}.umd.js`;
            const versionedTargetPath = path.join(targetDir, versionedTargetFileName);
            console.log(`Copying ${targetPath} to ${versionedTargetPath}...`);
            await fs.promises.copyFile(targetPath, versionedTargetPath);
            console.log(`Versioned UMD file copied to ${versionedTargetPath}`);
        } else {
            console.warn('Could not determine version from package.json to create versioned copy.');
        }
        // --- End Versioned Copy Logic --- 

    } catch (err) {
        console.error('Error copying UMD file:', err);
    }
}

copyUmdFile(); 