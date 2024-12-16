```markdown
# Git Hooks with ESLint

This project demonstrates how to set up Git hooks, specifically the `pre-commit` hook, to run **ESLint** and block commits if there are any linting errors in the code.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project uses **Git hooks** to automatically run **ESLint** when committing changes. The `pre-commit` hook checks the code for linting errors and prevents the commit if any are found. This helps ensure that code adheres to a consistent style before being committed to the repository.

## Features

- **Pre-commit hook**: Automatically runs **ESLint** on staged files before allowing a commit.
- **Customizable ESLint rules**: The ESLint configuration can be easily modified to suit your project's needs.
- **Error blocking**: If there are any linting errors (e.g., `console.log` usage, unused variables), the commit is blocked.

## Prerequisites

Before setting up this project, make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (for running ESLint)
- [npm](https://www.npmjs.com/) (for managing dependencies)

## Setup

Follow these steps to set up Git hooks with ESLint in your project:

### 1. Initialize a Node.js Project

If you haven't already, initialize a **Node.js** project by running:

```bash
npm init -y
```

### 2. Install ESLint

Install **ESLint** and the necessary dependencies:

```bash
npm install eslint --save-dev
```

### 3. Set Up ESLint Configuration

Create an `.eslintrc.json` file in the root of your project and add your custom linting rules, such as:

```json
{
  "rules": {
    "no-console": "error",
    "no-unused-vars": "error"
  }
}
```

### 4. Create the Git Hooks Directory

Create the `.git/hooks` directory if it doesn't already exist:

```bash
mkdir -p .git/hooks
```

### 5. Add the Pre-commit Hook

Create a file named `pre-commit` inside the `.git/hooks` directory with the following content:

```bash
#!/bin/sh

# Run ESLint before commit
npm run lint
if [ $? -ne 0 ]; then
  echo "ESLint errors found. Commit blocked."
  exit 1
fi
```

### 6. Make the Hook Executable

Make sure the `pre-commit` hook is executable by running:

```bash
chmod +x .git/hooks/pre-commit
```

### 7. Add a Lint Script to `package.json`

Add a linting script to your `package.json`:

```json
"scripts": {
  "lint": "eslint ."
}
```

### 8. Test the Setup

To test the setup, try to make a commit with an intentional ESLint error (e.g., `console.log` or an unused variable). If there are any linting issues, the commit will be blocked, and ESLint will show an error message.

## Usage

To use this setup in your own project:

1. **Clone the repository** or copy the `.git/hooks/pre-commit` file into your own project.
2. **Modify the ESLint configuration** (`.eslintrc.json`) according to your project's coding style.
3. **Install dependencies** using `npm install`.
4. Make changes, stage them, and try to commit.

If any linting errors are detected, the commit will be blocked until the issues are resolved.

## Contributing

If you want to contribute to this project, feel free to fork the repository, create a branch, and submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##ScreenShots
![image](https://github.com/user-attachments/assets/a53e9b8d-1968-42c1-be71-e696673b77ac)

