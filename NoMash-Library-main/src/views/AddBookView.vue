<template>
    <div class="add-book-container">
      <h1>Add Book</h1>
      <form @submit.prevent="addBook" class="book-form">
        <div class="form-group">
          <label for="isbn">ISBN:</label>
          <input type="text" v-model="isbn" id="isbn" required class="form-control" />
        </div>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" v-model="name" id="name" required class="form-control" />
        </div>
        <button type="submit" class="submit-button">Add Book</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import db from '../firebase/init.js';
  import { collection, addDoc } from 'firebase/firestore';
  
  import BookList from '../components/BookList.vue';
  
  export default {
    setup() {
      const isbn = ref('');
      const name = ref('');
  
      const addBook = async () => {
        try {
          const isbnNumber = Number(isbn.value);
          if (isNaN(isbnNumber)) {
            alert('ISBN must be a valid number');
            return;
          }
  
          await addDoc(collection(db, 'books'), {
            isbn: isbnNumber,
            name: name.value
          });
          isbn.value = '';
          name.value = '';
          alert('Book added successfully!');
        } catch (error) {
          console.error('Error adding book: ', error);
        }
      };
  
      return {
        isbn,
        name,
        addBook
      };
    },
    components: {
      BookList
    }
  };
  </script>
  
  <style scoped>
  .add-book-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  h1 {
    text-align: center;
    color: #333;
  }
  
  .book-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
    outline: none;
  }
  
  .form-control:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.2);
  }
  
  .submit-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    align-self: center;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  
  </style>
  