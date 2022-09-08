import mongoose from "mongoose";
import User from "../modals/User.js";
import bcrypt from "bcrypt";
export const signup = async (req, res, next) => {
  console.log("ppppppppppppppppppppppppppppppppppppppppppppppppppppppppp");
  try {
    console.log("[[[[[[[[[[[[[[[[[[[[[[[[[[[[");
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(200).send("User has been created!");
    console.log("-------------------signup-----------");
  } catch (error) {
    next(error);
    console.log(error);
  }
};
