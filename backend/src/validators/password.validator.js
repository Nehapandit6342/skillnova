import { z } from "zod";


export const verifyOtpSchema = z.object({

    email: z
        .string()
        .email(),

    otp: z
        .string()
        .length(6)

});


export const resetPasswordSchema = z.object({

    email: z
        .string()
        .email(),

    otp: z
        .string()
        .length(6),

    newPassword: z
        .string()
        .min(8)

});