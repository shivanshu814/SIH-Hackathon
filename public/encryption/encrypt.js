const CryptoJS = require('crypto-js');

const BLOCK_SIZE = 16;

// Secret key
const aesKey = CryptoJS.enc.Hex.parse('0f000000000000070000000000000009');

// Note: generate a random IV using a cryptographically secure random generator of course
const aesIv = CryptoJS.enc.Hex.parse('01000000000000000000000000000000');

const toEncrypt = "Hello, World!";

function encrypt(data) {
    const dataUtf8 = CryptoJS.enc.Utf8.parse(data);
    const encrypted = CryptoJS.AES.encrypt(dataUtf8, aesKey, {
        iv: aesIv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    // Concatenate IV and ciphertext
    const enciphered = aesIv.toString() + encrypted.ciphertext.toString();
    return enciphered;
}

function decrypt(enciphered) {
    const ivHex = enciphered.substring(0, BLOCK_SIZE * 2);
    const encryptedHex = enciphered.substring(BLOCK_SIZE * 2);

    const iv = CryptoJS.enc.Hex.parse(ivHex);
    const encrypted = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Hex.parse(encryptedHex)
    });

    const decrypted = CryptoJS.AES.decrypt(encrypted, aesKey, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
}

// Example Usage
const encrypted = encrypt(toEncrypt);
console.log('Encrypted message:', encrypted);

const decrypted = decrypt(encrypted);
console.log('Decrypted message:', decrypted);
