import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters"),

    email: z
      .string()
      .trim()
      .email("Invalid email address")
      .toLowerCase(),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    role: z.enum(["STUDENT", "EMPLOYER"]),

    // Student fields
    college: z.string().trim().optional(),
    degree: z.string().trim().optional(),
    careerGoal: z.string().trim().optional(),

    // Employer fields
    companyName: z.string().trim().optional(),
    industry: z.string().trim().optional(),
    website: z
      .string()
      .trim()
      .url("Invalid website URL")
      .optional()
      .or(z.literal("")),
  })
  .superRefine((data, ctx) => {
    if (data.role === "STUDENT") {
      if (!data.college) {
        ctx.addIssue({
          code: "custom",
          path: ["college"],
          message: "College is required",
        });
      }

      if (!data.degree) {
        ctx.addIssue({
          code: "custom",
          path: ["degree"],
          message: "Degree is required",
        });
      }

      if (!data.careerGoal) {
        ctx.addIssue({
          code: "custom",
          path: ["careerGoal"],
          message: "Career goal is required",
        });
      }
    }

    if (data.role === "EMPLOYER") {
      if (!data.companyName) {
        ctx.addIssue({
          code: "custom",
          path: ["companyName"],
          message: "Company name is required",
        });
      }

      if (!data.industry) {
        ctx.addIssue({
          code: "custom",
          path: ["industry"],
          message: "Industry is required",
        });
      }
    }
  });

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .toLowerCase(),

  password: z
    .string()
    .min(1, "Password is required"),
});