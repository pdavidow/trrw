import React from 'react';
import { Provider } from 'react-redux';

import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';
import Footer from './Footer.js';
import store from '../store';


const TodoApp = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

export default (
  <Provider store={store}>
    <TodoApp />
  </Provider>
)