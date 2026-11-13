import { describe, it, expect } from 'vitest';
import { hashPassword, comparePassword } from '../../../src/utils/password.util.ts';

describe('password.util', () => {
  const password1 = 'ClaveUno123!';
  const password2 = 'ClaveDos456!';

  it('should generate non-empty hashes different from the original passwords', async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    expect(typeof hash1).toBe('string');
    expect(hash1.length).toBeGreaterThan(0);
    expect(hash1).not.toBe(password1);

    expect(typeof hash2).toBe('string');
    expect(hash2.length).toBeGreaterThan(0);
    expect(hash2).not.toBe(password2);
  });

  it('should return true when comparing matching passwords with their hashes', async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    const isMatch1 = await comparePassword(password1, hash1);
    const isMatch2 = await comparePassword(password2, hash2);

    expect(isMatch1).toBe(true);
    expect(isMatch2).toBe(true);
  });

  it('should return false when comparing non-matching passwords with the hashes', async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    const isMatchWrong1 = await comparePassword(password2, hash1);
    const isMatchWrong2 = await comparePassword(password1, hash2);

    expect(isMatchWrong1).toBe(false);
    expect(isMatchWrong2).toBe(false);
  });
});