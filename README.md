# Code Exercise - Term deposit calculator


This CLI application calculates the term deposit balance based on user input. It takes the deposit amount, interest rate, investment tenure, and interest payment frequency.


## Project Structure

```
term-deposit-calculator/
│
├── index.ts                  # Main logic of the app
├── enums/
│   └── index.ts              # Enums
├── interface/
│   └── index.ts              # TypeScript interfaces
├── utils/
│   └── index.ts              # Utility functions
└── __test__/
    └── index.ts              # Unit tests
```


## Tech Stack
- TypeScript
- Node.js
- Inquirer: For CLI prompts
- Jest: For unit testing.


## Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd term-deposit-calculator
    ```

2. **Install Node.js**:
   - Download and install Node.js LTS from [Node.js official website](https://nodejs.org/).

3. **install ts-node**

    ```
    npm install -g ts-node
    ```

4. **Install dependencies:**

    ```
    npm install
    ```

## Usage

1. **Start the application:**

    ```bash
    npm start
    ```

   Follow the prompts to enter:
   - Start deposit amount
   - Interest rate (as a percentage)
   - Investment term (in years and months)
   - Interest payment frequency (Monthly, Quarterly, Annually, or At Maturity)

2. **View results:**
   The final balance will be displayed based on the provided inputs.

## Running Tests

To run unit tests with Jest:

```bash
npm test
```


## Time taken

~2 hours

## Assumptions
The final amount will be rounded to the nearest whole number, as per the bank's website standards.


## Design decision
Utilise an interactive CLI prompt to gather user inputs.This approach allows users to enter values directly after the command prompt, making the application straightforward to use in a terminal environment.

Implement an investment term selector with separate prompts for years and months, This design provides users with the flexibility to specify investment terms with greater precision. By splitting the input into years and months, users can easily define terms that range from 3 months to 5 years.


## Improvements
- Error Handling: Enhance error handling for edge cases and invalid inputs.
- Enhanced User Experience: Improve prompts and user interaction for better clarity and usability.
- Configuration Options: Add options for different compounding frequencies and investment types.
- Documentation: Expand documentation with examples and use cases.

