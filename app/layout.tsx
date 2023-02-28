import { ReactNode } from 'react';
import Navbar from './Components/Navbar';
import '../styles/globals.css';

export default function RootLayout({ children }: {
  children: ReactNode
}) {
  return (
    <Navbar>
      {children}
    </Navbar>
  );
}
