# Bin2Dec

## Overview
Bin2Dec is a binary-to-decimal converter application that allows users to input binary digits and convert them to their decimal equivalent.

## Features
- Accepts binary inputs (0s and 1s)
- Validates input to ensure only valid binary digits are entered
- Converts binary to decimal in real-time
- Simple and intuitive user interface

## How It Works
The application uses JavaScript to convert binary numbers to decimal. The conversion is done using the following algorithm:

1. The input is validated to ensure it only contains 0s and 1s
2. Each digit in the binary number is processed from right to left
3. Each binary digit is multiplied by its corresponding power of 2 based on its position
4. All values are summed to produce the decimal result

## Code Explanation
The main conversion function:

```javascript
function convertBinaryToDecimal(binary) {
    let decimal = 0;
    const binaryLength = binary.length;
    
    for (let i = 0; i < binaryLength; i++) {
        const digit = parseInt(binary[binaryLength - 1 - i]);
        decimal += digit * Math.pow(2, i);
    }
    
    return decimal;
}
```

## How to Run the Application
1. Clone the repository:
```bash
git clone https://github.com/AWERDdev/Bin2Dec.git
```

2. Navigate to the project directory:
```bash
cd Bin2Dec
```

3. If it's a Node.js application, install dependencies:
```bash
npm install
```

4. Start the application:
```bash
npm start
```

5. For development mode:
```bash
npm run Devstart
```

6. Open your browser and navigate to `http://localhost:3000` (or the port specified in the application)
```

## DevChallenge1

```markdown
# DevChallenge1

## Overview
DevChallenge1 is a web development challenge project that demonstrates front-end skills and responsive design principles.

## Features
- Responsive layout that works on mobile, tablet, and desktop
- Modern UI components
- Interactive elements with JavaScript functionality
- CSS animations and transitions

## How It Works
The project is built using HTML, CSS, and JavaScript. It implements a responsive design using CSS media queries and flexbox/grid layouts.

## Code Structure
- `index.html`: Main HTML structure
- `styles/`: Directory containing CSS files
  - `main.css`: Primary styles
  - `responsive.css`: Media queries for different screen sizes
- `scripts/`: Directory containing JavaScript files
  - `app.js`: Main application logic

## How to Run the Application
1. Clone the repository:
```bash
git clone https://github.com/AWERDdev/DevChallenge1.git
```

2. Navigate to the project directory:
```bash
cd DevChallenge1
```

3. If it uses Node.js, install dependencies:
```bash
npm install
```

4. For backend development:
```bash
npm run devstart
```

5. For frontend development:
```bash
npm run dev
```

6. Open your browser and navigate to the local development server (typically `http://localhost:3000` or `http://localhost:5173` depending on the setup)
```
