# Issues Management Tests

## Description

This project automates the management of issues using Playwright and Allure for report generation.

## Installation

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/deadshvt/issues-automation.git
    cd issues-automation
    ```

2. Initialize the project and install dependencies:

    ```bash
    make init
    ```

3. Set the `TOKEN` environment variable:

    #### Windows:

    ```cmd
    set TOKEN=your_github_token_here
    ```

    #### Linux/macOS:

    ```bash
    export TOKEN=your_github_token_here
    ```

## Usage

### Run Tests

```bash
make test
```

### Generate Allure Reports

```bash
make allure-generate
```

### Open Allure Reports

```bash
make allure-open
```

### Clean The Project

```bash
make clean
```
