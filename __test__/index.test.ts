import { InterestPaid } from "../enums";
import { calculateFinalBalance } from "../utils";

describe("Term Deposit Calculator", () => {
  it("calculates the final balance with interest paid at maturity", () => {
    const details = {
      startAmount: 10000,
      interestRate: 1.1,
      investmentTerm: 3,
      interestPaid: InterestPaid.AtMaturity,
    };
    const result = calculateFinalBalance(details);
    expect(result).toBe(10330);
  });

  it("calculates the final balance with monthly interest", () => {
    const details = {
      startAmount: 10000,
      interestRate: 1.1,
      investmentTerm: 3,
      interestPaid: InterestPaid.Monthly,
    };
    const result = calculateFinalBalance(details);
    expect(result).toBe(10335);
  });

  it("calculates the final balance with quarterly interest", () => {
    const details = {
      startAmount: 10000,
      interestRate: 1.1,
      investmentTerm: 3,
      interestPaid: InterestPaid.Quarterly,
    };
    const result = calculateFinalBalance(details);
    expect(result).toBe(10335);
  });

  it("calculates the final balance with annual interest", () => {
    const details = {
      startAmount: 10000,
      interestRate: 1.1,
      investmentTerm: 3,
      interestPaid: InterestPaid.Annually,
    };
    const result = calculateFinalBalance(details);
    expect(result).toBe(10334);
  });

  it("throws an error for negative start amount", () => {
    const details = {
      startAmount: -10000,
      interestRate: 1.1,
      investmentTerm: 3,
      interestPaid: InterestPaid.AtMaturity,
    };
    expect(() => calculateFinalBalance(details)).toThrow(
      "Invalid input: All values must be positive."
    );
  });

  it("throws an error for zero interest rate", () => {
    const details = {
      startAmount: 10000,
      interestRate: 0,
      investmentTerm: 3,
      interestPaid: InterestPaid.Monthly,
    };
    expect(() => calculateFinalBalance(details)).toThrow(
      "Invalid input: All values must be positive."
    );
  });

  it("throws an error for negative investment term", () => {
    const details = {
      startAmount: 10000,
      interestRate: 1.1,
      investmentTerm: -3,
      interestPaid: InterestPaid.Annually,
    };
    expect(() => calculateFinalBalance(details)).toThrow(
      "Invalid input: All values must be positive."
    );
  });

  it("throws an error for invalid interest payment frequency", () => {
    const details = {
      startAmount: 10000,
      interestRate: 1.1,
      investmentTerm: 3,
      interestPaid: "invalid" as any, // Simulate an invalid value
    };
    expect(() => calculateFinalBalance(details)).toThrow(
      "Invalid interest payment frequency."
    );
  });
});
