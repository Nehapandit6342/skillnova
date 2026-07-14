import { registerSchema } from "../validators/auth.validator.js";
import { registerUser } from "../services/auth.service.js";
import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const validatedData = registerSchema.parse(req.body);

    const user = await registerUser(validatedData);

    return res.status(201).json({
      success: true,
      message: "Account created successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.issues,
      });
    }

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};
// Login Controller
export const login = async (req, res) => {

    try {

        const { email, password } = req.body;


        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }


        // Find user
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });


        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Invalid email or password"
            });
        }


        // Compare password
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );


        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }


        // Generate token
        const token = jwt.sign(
            {
                id: user.id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );


        return res.json({

            success: true,

            message: "Login successful",

            data: {

                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                },

                token

            }

        });


    } catch(error){

        console.error(error);

        res.status(500).json({
            success:false,
            message:"Server error"
        });

    }

};