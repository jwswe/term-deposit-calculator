import { DepositDetails } from "../interface";

export const calculateFinalBalance = (details: DepositDetails): number => {
  const { startAmount, interestRate, investmentTerm, interestPaid } = details;

  // Validate inputs
  if (startAmount <= 0 || interestRate <= 0 || investmentTerm <= 0) {
    throw new Error("Invalid input: All values must be positive.");
  }

  const rate = interestRate / 100;
  let finalBalance = startAmount;

  switch (interestPaid) {
    case "monthly":
      finalBalance *= Math.pow(1 + rate / 12, investmentTerm * 12);
      break;
    case "quarterly":
      finalBalance *= Math.pow(1 + rate / 4, investmentTerm * 4);
      break;
    case "annually":
      finalBalance *= Math.pow(1 + rate, investmentTerm);
      break;
    case "at maturity":
      finalBalance *= 1 + rate * investmentTerm;
      break;
    default:
      throw new Error("Invalid interest payment frequency.");
  }

  return Number(finalBalance.toFixed());
};
