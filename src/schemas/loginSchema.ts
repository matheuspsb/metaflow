import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: 'Por favor, insira um e-mail válido.' }),
  password: z.string().min(6, { message: 'A senha precisa ter ao menos 6 caracteres.' }),
  remember: z.boolean(),
})

export type LoginFormData = z.infer<typeof loginSchema>
