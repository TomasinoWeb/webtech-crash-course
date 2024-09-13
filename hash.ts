import { pbkdf2 } from "pbkdf2";

export function hashPassword(plaintext: string, salt: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    pbkdf2(plaintext, salt, 10, 128, (err, key) => {
      if (err) reject(err);
      else resolve(key.toString("base64"));
    });
  });
}
