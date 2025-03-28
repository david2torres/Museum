/* eslint-disable @typescript-eslint/no-explicit-any */
// secure-storage.service.ts
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class SecureStorageService {
  public secretKey = 'tu-clave-secreta';

  constructor() {}

  public encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, this.secretKey).toString();
  }

  public decrypt(textToDecrypt: string): string {
    return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey).toString(
      CryptoJS.enc.Utf8,
    );
  }

  setItem(key: string, value: any): void {
    sessionStorage.setItem(key, value);
  }
  /*   setItem(key: string, value: any): void {
    const encryptedValue = this.encrypt(JSON.stringify(value));
    sessionStorage.setItem(key, encryptedValue);
  } */

  getItem(key: string): any {
    return sessionStorage.getItem(key);
  }
  /* getItem(key: string): any {
    const storedValue = sessionStorage.getItem(key);
    if (storedValue) {
      try {
        return JSON.parse(this.decrypt(storedValue));
      } catch (error) {
        console.warn('Error al desencriptar el valor:', error);
        return null;
      }
    }
    return null;
  } */

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  clear(): void {
    sessionStorage.clear();
  }
}
