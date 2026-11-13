import { describe, it, expect } from "vitest";
import { generateSixDigitCode } from "../../../src/utils/generateCode.util.ts";

describe('generateCode.util - six-digit code unit tests', () => {
    
    it('should generate a string containing exactly 6 numeric digits', () => {
        expect(generateSixDigitCode()).toMatch(/^\d{6}$/);
    });

    it('should generate a valid number greater than or equal to the minimum 6-digit threshold (100000)', () => {
        const codeNumber = Number(generateSixDigitCode());
        expect(codeNumber).toBeGreaterThanOrEqual(100000);
    });

    it('should generate unique codes on consecutive separate calls', () => {
        const code1 = generateSixDigitCode();
        const code2 = generateSixDigitCode();
        
        expect(code1 !== code2).toBe(true);
    });
});