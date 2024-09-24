db.createCollection("books", {
  validator: {
    $jsonSchema: {
      required: ["name", , "price"],
      properties: {
        name: {
          bsonType: "string",
          description: "name must be a string and required",
        },
        price: {
          bsonType: "number",
          description: "price must be a number and required",
        },
      },
    },
  },
  validationAction: "error", // by default error  can be set to warn
});

// Update the validation && Nested Object Schema
db.runCommand({
  callMod: "books",
  validator: {
    $jsonSchema: {
      required: ["name", "price", "author"],
      properties: {
        name: {
          bsonType: "string",
          description: "name must be a string and required",
        },
        price: {
          bsonType: "number",
          description: "price must be a number and required",
        },
        author: {
          bsonType: "array",
          description: "author must be an array and required",
          items: {
            bsonType: "object",
            required: ["name", "email"],
            properties: {
              name: {
                bsonType: "string",
                description: "author name must be a string and required",
              },
              email: {
                bsonType: "string",
                description: "author email must be a string and required",
              },
            },
          },
        },
      },
    },
  },
});
