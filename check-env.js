const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env');

try {
    if (!fs.existsSync(envPath)) {
        console.error('❌ .env file not found!');
        process.exit(1);
    }

    const envContent = fs.readFileSync(envPath, 'utf8');
    const envVars = {};

    envContent.split('\n').forEach(line => {
        const match = line.match(/^([^=]+)=(.*)$/);
        if (match) {
            const key = match[1].trim();
            const value = match[2].trim();
            envVars[key] = value;
        }
    });

    const required = ['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'NEXTAUTH_SECRET'];
    let missing = false;

    console.log('Checking .env variables:');
    required.forEach(key => {
        if (envVars[key] && envVars[key].length > 0) {
            console.log(`✅ ${key} is present`);
        } else {
            console.log(`❌ ${key} is MISSING`);
            missing = true;
        }
    });

    if (missing) {
        console.log('\nPlease add the missing variables to your .env file.');
    } else {
        console.log('\nAll required variables are present. If you still have issues, try restarting the server.');
    }

} catch (err) {
    console.error('Error reading .env file:', err);
}
