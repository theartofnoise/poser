import axios from "axios";

export default {
  // Gets all books
  getUser: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  //login USER
  loginUser: function(data){
    return axios.post('/api/users/login', data)
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Saves a Lyric to the database
  saveLyric: function(userData) {
    return axios.post("/api/lyrics", userData);
  },
};
