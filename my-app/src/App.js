import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BookTable from './components/BookTable';
import DisplayBoard from './components/DisplayBoard';
import CreateBook from './components/CreateBook';
import CreateTodo from './components/CreateTodo';
import TodoTable from './components/TodoTable';
import { getAllBooks, createBook, createTodos, getAllTodos } from './services/BookService';
import Footer from './components/Footer';

function App () {

  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);

  const [myTodo, setMyTodo] = useState({});
  const [todos, setTodos] = useState([]);
  const [numberOfTodos, setNumberOfTodos] = useState(0);

  const handleSubmit = () => {
      createBook(bookShelf)
        .then(() => {
          setNumberBooks(numberOfBooks+1);
      });
  }

  const handleTodoSubmit = () => {
    createTodos(myTodo)
      .then(() => {
        setNumberOfTodos(numberOfTodos+1);
    });
}

  const getAllBook = () => {
    getAllBooks()
      .then(data => {
        setBooks(data);
        setNumberBooks(data.length);
      });
  }

  const getAllTodo = () => {
    getAllTodos()
      .then(data => {
        console.log(data)
        setTodos(data);
        setNumberOfTodos(data.length);
      });
  }

  const handleOnChangeForm = (e) => {
      let inputData = bookShelf;
      if (e.target.name === 'book') {
        bookShelf.book = e.target.value;
      } else if (e.target.name === 'category') {
        bookShelf.category = e.target.value;
      } else if (e.target.name === 'author') {
        bookShelf.author = e.target.value;
      }
      setBookShelf(inputData);
  }

  const handleOnChangeTodoForm = (e) => {
    let inputData = myTodo;
    if (e.target.name === 'todo') {
      myTodo.todo = e.target.value;
    } else if (e.target.name === 'category') {
      myTodo.category = e.target.value;
    } else if (e.target.name === 'isComplete') {
      myTodo.isComplete = e.target.value;
    }
    setMyTodo(inputData);
}

  
  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <CreateBook 
          bookShelf={bookShelf}
          onChangeForm={handleOnChangeForm}
          handleSubmit={handleSubmit}
        />
        <CreateTodo 
        myTodo={myTodo}
        onChangeForm={handleOnChangeTodoForm}
        handleSubmit={handleTodoSubmit}
        />
        <DisplayBoard 
          numberOfBooks={numberOfBooks} 
          getAllBook={getAllBook} 
          getAllTodo={getAllTodo} 
          numberOfTodos={numberOfTodos}
        />
        <BookTable books={books} />
        <TodoTable todos={todos} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
