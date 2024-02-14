import * as z from "zod"


export const threadValidation = z.object({
  thread:z.string().nonempty().min(3),
  accountId:z.string()
})


export const commentsValidation = z.object({
    thread:z.string().nonempty().min(3),
  })