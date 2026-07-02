# QR Code Generator

> A vanilla JavaScript application that converts text or URLs into QR codes using a public QR Code API.

---

## Demo

---

## Tech Stack

| Technology       | Purpose                          |
| ---------------- | -------------------------------- |
| HTML5            | Page structure                   |
| CSS3             | Responsive layout and animations |
| JavaScript (ES6) | Application logic                |
| QR Code API      | QR code generation               |

---

## Features

* Generate QR codes from any text or URL
* One-click QR code generation
* Press **Enter** to generate instantly
* Input validation with visual error feedback
* Smooth animated QR code reveal
* Responsive design for desktop and mobile

---

## Project Structure

```text
qr-code-generator/
├── index.html
├── style.css
└── script.js
```

---

## How It Works

1. The user enters text or a URL.
2. JavaScript validates that the input isn't empty.
3. The input is safely encoded using `encodeURIComponent()`.
4. The encoded text is appended to the QR Code API URL.
5. The generated URL becomes the `src` of the `<img>` element.
6. The browser automatically downloads and displays the QR code.

---

## Key JavaScript Concepts

* DOM manipulation
* Event listeners
* Keyboard events
* `encodeURIComponent()`
* Dynamic image loading
* CSS class manipulation
* Input validation

---

## What I Learned

* Not every API returns JSON—some return images or other resources.
* `encodeURIComponent()` prevents invalid URLs when users enter spaces or special characters.
* CSS classes are an effective way to control UI state without rewriting HTML.
* Small animations and validation feedback significantly improve user experience.

---

## Future Improvements

* Download QR code as PNG
* QR code size selector
* Copy generated image to clipboard
* Generate colored QR codes
* Dark mode
* Loading indicator while the QR code is generated

---

## License

MIT
