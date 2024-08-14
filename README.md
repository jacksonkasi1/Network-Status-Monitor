# Network Status Monitor

## Overview

The **Network Status Monitor** is a simple React.js application that displays the current network or bandwidth quality status using a visual indicator. The status can be one of the following:
- **Offline**: Represented by a red indicator.
- **Poor**: Represented by a yellow indicator.
- **Good**: Represented by a green indicator.
- **Best**: Represented by a blue indicator.

The status is displayed in a header strip, providing a quick and easy way to monitor the network quality.

## Features

- **Real-time Network Status**: Automatically detects and updates the network status.
- **Responsive UI**: The header strip with the network status indicator is fully responsive and styled using Tailwind CSS.
- **Scalable Codebase**: The project is organized into modular components for easy maintenance and scalability.

## Project Structure

```
src/
│
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   ├── StatusIndicator.tsx
│   │   └── index.ts
│   └── NetworkStatus/
│       ├── NetworkStatus.tsx
│       └── index.ts
│
├── styles/
│   └── index.css
│
└── app
```

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/jacksonkasi1/Network-Status-Monitor.git
    cd Network-Status-Monitor
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

The application will be running at `http://localhost:3000`.

## Usage

Once the application is running, the header strip at the top of the page will display the current network status. The color and label of the indicator will change based on the network quality:
- **Red**: Offline
- **Yellow**: Poor
- **Green**: Good
- **Blue**: Best

The status is dynamically updated based on changes in the network connection.

## Customization

You can easily customize the appearance of the network status indicators by modifying the Tailwind CSS classes in the `StatusIndicator.tsx` component.

## Dependencies

- **React.js**
- **Tailwind CSS**
- **clsx** (for conditional class management)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any features or improvements you'd like to see.

## Acknowledgments

Thanks to the creators of [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/) for providing awesome tools for web development.
