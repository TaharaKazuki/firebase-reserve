import { storage } from './utils'

export type AuthResponse = {
  user: User
  jwt: string
}

export type User = {
  id: string
  email: string
  name?: string
}

export const handleApiResponse = async (response: Response) => {
  const data = await response.json()

  if (response.ok) {
    return data
  } else {
    console.error(JSON.stringify(data, null, 2))
    return Promise.reject(data)
  }
}

export const getUserProfile = async (): Promise<{ user: User | undefined }> => {
  const response = await fetch('/auth/me', {
    headers: {
      Authorization: storage.getToken(),
    },
  })
  return handleApiResponse(response)
}

export const loginWithEmailAndPassword = async (data: unknown): Promise<AuthResponse> => {
  const response = await fetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  })
  return handleApiResponse(response)
}

export const registerWithEmailAndPassword = async (data: unknown): Promise<AuthResponse> => {
  const response = await fetch('/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  })
  return handleApiResponse(response)
}

export const logout = async (): Promise<{ message: string }> => {
  const response = await fetch('/auth/logout', { method: 'POST' })
  return handleApiResponse(response)
}
