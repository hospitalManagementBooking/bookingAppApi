
module.exports = {
    development: {
      HOST: "localhost",
      USER: "",
      PASSWORD: "",
      DATABASE: "todo",
      PORT: 27017,
      PROTOCOL: "mongodb"
    },
  
    production: {
      HOST: "cluster0.t0h0y.mongodb.net",
      USER: "pofahon545",
      PASSWORD: "6ptyUq3Zc6AjOBZR",
      DATABASE: "todo",
      PROTOCOL: "mongodb+srv"
    }
  }

//mongodb://localhost:27017/

//mongodb+srv://pofahon545:6ptyUq3Zc6AjOBZR@cluster0.t0h0y.mongodb.net/todo?retryWrites=true&w=majority