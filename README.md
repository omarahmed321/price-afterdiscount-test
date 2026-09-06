# price-afterdiscount-test (JavaScript Discount Calculator)

**Live Demo:** [https://omarahmed321.github.io/price-afterdiscount-test/](https://omarahmed321.github.io/price-afterdiscount-test/)

A focused utility script and web interface for calculating net prices after percentage-based promotional discounts using vanilla JavaScript.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white)

---

## Table of Contents
- [About](#about)
- [Architecture](#architecture)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Run Locally](#run-locally)
- [Project Structure](#project-structure)

---

## About
This project was developed as an introductory JavaScript practice milestone focusing on numerical computation, input handling, and dynamic element creation. It provides a minimal interface where users can supply an original product price and a discount percentage to evaluate the final reduced cost.

---

## Architecture
The application executes entirely on the client side using pure JavaScript DOM methods. When the user triggers the calculation button, the `priceAfterDiscount()` function extracts the original price and discount percentage from the input fields, converts the discount value into a fractional multiplier, calculates the net discounted total, and programmatically appends a new paragraph element to the document body to display the output.

---

## Features
- **Discount Percentage Computation**: Computes exact net pricing using percentage discount formulas.
- **Dynamic DOM Output**: Instantiates and appends new paragraph text nodes dynamically to display computed results.
- **Minimal Form Layout**: Direct input fields for original sum and discount values.
- **Lightweight Execution**: Zero external dependencies with rapid in-browser execution.

---

## Tech Stack
- **Language**: JavaScript (ES6)
- **Markup**: HTML5
- **Styling**: Bootstrap 5.3 (via CDN)
- **Deployment**: GitHub Pages

---

## Run Locally

### Prerequisites
A modern web browser.

### Installation
Clone the repository:
```bash
git clone https://github.com/omarahmed321/price-afterdiscount-test.git
cd price-afterdiscount-test
```

Open `index.html` directly in your browser:
```bash
# On Linux
xdg-open index.html

# On macOS
open index.html

# On Windows
start index.html
```

Or serve using any local static development server:
```bash
npx serve .
```

---

## Project Structure
```text
price-afterdiscount-test/
├── index.html
├── index.js
└── style.css
```
