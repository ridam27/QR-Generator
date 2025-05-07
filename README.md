# QR-Generator

This is a simple web-based QR Code Generator built with HTML, CSS, and JavaScript. It allows users to input a team name and team members, generates a QR code from that data, and offers an option to download the QR code as a PNG file.

## Deployment
The website is deployed on [Netlify](https://ridam-qr-generator.netlify.app/).

## Features

- Input fields for team name and team members
- Converts spaces in team name to underscores for scanning purposes
- Generates a high-quality QR code
- Allows downloading the QR code as a PNG file
- Input validation to ensure no field is left blank

## Usage

- Clone the repository:
``` git clone https://github.com/your-username/qr-code-generator.git ```

- Open index.html in any modern browser.

- Enter the Team Name and Team Members.

- Click Generate QR to display the QR code.

- Click Download QR to save the QR as a PNG file.


## Technologies Used
- HTML
- CSS
- JavaScript
- QRCode.js library

## File Structure

```
/QR-Generator
│
├── index.html
├── style.css
├── script.js
├── qrcode.min.js
└── README.md
```

## Example QR Data Format
```
Team_Name
Member1, Member2, Member3, Member4
```

## License
This project is open source and available under the MIT License.


