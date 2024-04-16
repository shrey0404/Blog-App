const { createHmac, randomBytes } = require("crypto"); // used to convert password into hashed code for security reasons
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      // we want to hash the password so .. we have to use salt and pepper technique.
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    profileImageURL: {
      type: String,
      default: "./images/default.jpeg",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return;

  const salt = randomBytes(16).toString(); // generated randobytes as secret code for hasing.
  const hashedpassword = createHmac("sha256", salt) // hashed the password with the saltc{randombytes of string type}
    .update(user.password)
    .digest("hex");

  this.salt = salt;
  this.password = hashedpassword;
});
// pre function is used to trigger a function { here we are hasing the password
// security reasons } so in this .. whenever the user generated or
// updates its password before saving the user info this pre function middleware occurs.

const User = mongoose.model("user", userSchema);

module.exports = User;
