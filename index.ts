import { calculateFinalBalance } from "./utils";
import { input, number, select } from "@inquirer/prompts";
import { InterestPaid } from "./enums";

/**
 * Main logic of the app, it prompts the user for input to calculate the final balance.
 *
 * This function collects the following inputs from users:
 * - deposit amount
 * - Interest rate
 * - Investment term
 * - Interest payment frequency (monthly, quarterly, annually, at maturity)
 *
 * After collecting the inputs, it calculates the final balance based on the provided
 * details and displays the result.
 *
 * @async
 */
const prompt = async (): Promise<void> => {
  const startAmount = await number({
    message: "Enter the start deposit amount:",
    validate: (value) => {
      const numberValue = Number(value);
      return (
        (!isNaN(numberValue) && numberValue > 0) ||
        "Please enter a valid positive number."
      );
    },
  });

  const interestRate = await input({
    message: "Enter the interest rate (as a percentage):",
    validate: (value) => {
      const parsedValue = parseFloat(value);
      return (
        (!isNaN(parsedValue) && parsedValue > 0) ||
        "Please enter a valid positive number."
      );
    },
  });

  // Prompt for investment term in years and months
  const investmentYears = await number({
    message: "Enter the investment term (years):",
    validate: (value) => {
      const numberValue = Number(value);
      return (
        (!isNaN(numberValue) && numberValue >= 0) ||
        "Please enter a valid number of years."
      );
    },
  });

  const investmentMonths = await number({
    message: "Enter the remaining investment term (months):",
    validate: (value) => {
      const numberValue = Number(value);
      return (
        (!isNaN(numberValue) && numberValue >= 0 && numberValue <= 11) ||
        "Please enter a valid number of months (0-11)."
      );
    },
  });

  // Calculate total investment term in months
  const totalInvestmentTermMonths =
    (investmentYears || 0) * 12 + (investmentMonths || 0);
  const investmentTermYears = totalInvestmentTermMonths / 12;

  // Define interest payment options based on the investment term
  const interestChoices = [
    {
      name: "Monthly",
      value: InterestPaid.Monthly,
    },
    {
      name: "Quarterly",
      value: InterestPaid.Quarterly,
    },
    {
      name: "At Maturity",
      value: InterestPaid.AtMaturity,
    },
  ];

  if (totalInvestmentTermMonths >= 12) {
    interestChoices.push({
      name: "Annually",
      value: InterestPaid.Annually,
    });
  }

  const interestPaid = await select({
    message: "How is the interest paid?",
    choices: interestChoices,
  });

  if (!startAmount || !interestRate || !totalInvestmentTermMonths) {
    console.error(
      "Error: Missing input values. Please provide valid inputs for all fields."
    );
    return;
  }

  const finalBalance = calculateFinalBalance({
    startAmount,
    interestRate: Number(interestRate),
    investmentTerm: investmentTermYears,
    interestPaid,
  });

  // Display the final amount
  console.info(
    `Final balance: $${finalBalance}, interest paid ${interestPaid}`
  );
};

prompt();
