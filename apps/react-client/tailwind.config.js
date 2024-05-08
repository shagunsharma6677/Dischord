import config from '../../packages/tailwind-config/tailwind.config';
import { nextui } from '@nextui-org/react';

const tailwindConfig = {
  content: [
    // Include your project files here
    // For example: './src/**/*.html',
    // Add Next UI theme files path
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
  // Export config
  config: config,
};

export default tailwindConfig;
