import React, {createContext, useState, useContext} from 'react';
import Toast from 'react-native-toast-message';
import api from '../services/api';

const BookContext = createContext({});

interface ChildrenProps {
  children: React.ReactNode;
}

interface BooksProps {
  id: Number;
  name: String;
  author: String;
  description: String;
  cover: String;
}

interface BookRequest {
  search: String;
  page: Number;
  perPage: Number;
}

export const BookProvider = ({children}: ChildrenProps) => {
  const [books, setBooks] = useState<BooksProps[]>([]);

  async function getBooks({search, page, perPage}: BookRequest) {
    try {
      const response = await api.get(
        `/?search=${search}&page=${page}&perPage=${perPage}`,
      );

      setBooks(response.data);
    } catch (err) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Oops... This is awkward.',
        text2: 'It looks like we had some problem. Please try again',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }
  }

  async function createBook({name, author, description}: BooksProps) {
    try {
      await api.post('/', {name, author, description});

      getBooks({search: '', page: 1, perPage: 50});
    } catch (err) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Oops... This is awkward.',
        text2: 'It looks like we had some problem. Please try again',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }
  }

  return (
    <BookContext.Provider value={{books, getBooks, createBook}}>
      {children}
    </BookContext.Provider>
  );
};

export function useBook() {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error('useBook must be used within an BookProvider');
  }

  return context;
}
