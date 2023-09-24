const CryptoJS = require('crypto-js');

class AES32 {
    constructor() {
        this.key = null;
    }

    setKey(key) {
        if (key.length !== 16 && key.length !== 24 && key.length !== 32) {
            throw new Error('Invalid key length');
        }
        this.key = CryptoJS.enc.Utf8.parse(key); // Convert key to WordArray
    }

    encryptECB(input) {
        const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(input), this.key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
    }

    decryptECB(encryptedBase64) {
        const decrypted = CryptoJS.AES.decrypt(encryptedBase64, this.key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }

    encryptCBC(input, iv) {
        const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(input), this.key, {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
    }

    decryptCBC(encryptedBase64, iv) {
        const decrypted = CryptoJS.AES.decrypt(encryptedBase64, this.key, {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}

// Example Usage
const aes32 = new AES32();
aes32.setKey('1234567890123456'); // 16 bytes key for AES-128
const input = 'Text to be encrypted';
const iv = '1234567890123456'; // Initialization Vector

const encryptedECB = aes32.encryptECB(input);
console.log('Encrypted ECB:', encryptedECB);
console.log('Decrypted ECB:', aes32.decryptECB(encryptedECB));

const encryptedCBC = aes32.encryptCBC(input, iv);
console.log('Encrypted CBC:', encryptedCBC);
console.log('Decrypted CBC:', aes32.decryptCBC(encryptedCBC, iv));
