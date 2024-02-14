import * as z from "zod"


export const userValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z.string().min(3).max(30),
  username: z.string().min(4).max(30),
  bio: z.string().max(30).min(0).optional(),
})