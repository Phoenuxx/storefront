import axios from "axios";

export default {
  // Gets all books
  getInv: function () {
    return axios.get("/api/all");
  },
  // Gets the book with the given id
  getAndCount: function (offset) {
    return axios.get("/api/:category/:" + offset);
  }
}
