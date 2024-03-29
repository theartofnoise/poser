import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
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
  deleteLyric: async function(id) {
    console.log("front end API")
    try {
      const response = await axios({
        method: "DELETE",
        url: "/api/lyrics/lyrics/" + id
      })
      return response
    } catch (error) {
      console.log(error)
    }
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
  getLyric: function(userEmail) {
    return axios.get("/api/lyrics/" + userEmail);
  },
  // Saves a Lyric to the database
  updateLyric: function(id, userData) {
    return axios.put(`/api/lyrics/lyrics/${id}`, userData);
  },
  getLyricById: function(id) {
    return axios.get("/api/lyrics/lyrics/" + id);
  },
  getMusicByMood: function(id) {
    return axios.get("/api/music/" + id);
  },
  getMusicByStyle: function(id) {
    return axios.get("/api/music/" + id);
  },
  getMusicByTempo: function(id) {
    return axios.get("/api/music/" + id);
  },
  getMusic: function() {
    return axios.get("/api/music/");
  },
  getMoreMusic: function(style, mood) {
    return axios.get("api/music/" + style + mood);
  },

};
