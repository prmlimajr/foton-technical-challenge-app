import React from 'react';
import {BookProvider} from './BookContext';

interface ChildrenProps {
  children: React.ReactNode;
}

export default function AppProvider({children}: ChildrenProps) {
  return <BookProvider>{children}</BookProvider>;
}
