import mongoose from "mongoose";
import validator from "validator";

// schema -> structure of document
// model -> using schema, name

// structure: name, email, age
const UserSchema = mongoose.Schema({
  usernamename: String,
  email: {
    type: String,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
  passowrd: String,
});

// model -> collections
const UserModel = mongoose.model("users", UserSchema);

export { UserModel };