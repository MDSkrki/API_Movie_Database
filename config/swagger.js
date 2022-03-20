const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movie Database API",
      version: "0.1.0",
      description:
        "This is a project to learn how to handle http requests and responses into an API",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Mihai Daniel Somkereki",
        url: "https://github.com/MDSkrki",
        email: "somkereki@hotmail.com",
      },
      servers: [
        {
          url: "http://localhost:5000/movies",
        },
        {
          url: "http://localhost:5000/users"
        },
      ],
    },
  },
  apis: ["./routes/tasksRoutes.js"],
}

export default options;