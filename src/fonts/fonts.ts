import localFont from 'next/font/local';

export const figTree = localFont({
  src: './Figtree-VariableFont_wght.ttf',
  variable: '--font-figtree', // Custom CSS variable for the font
  display: 'swap', // Optional: Control font-display behavior
});
export const inter = localFont({
  src: './Inter-VariableFont_opsz,wght.ttf',
  variable: '--font-inter', // Custom CSS variable for the font
  display: 'swap', // Optional: Control font-display behavior
});
