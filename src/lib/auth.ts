import { configureAuth } from 'react-query-auth'

import {
  getUserProfile,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  AuthResponse,
  logout,
} from './api'

import { storage } from './utils'

export type LoginCredentials = {
  email: string
  password: string
}

export type RegisterCredentials = {
  email: string
  name: string
  password: string
}

const handleUserResponse = (data: AuthResponse) => {
  const { jwt, user } = data
  storage.setToken(jwt)
  return user
}

const userFn = async () => {
  const { user } = await getUserProfile()
  return user ?? null
}

const loginFn = async (data: LoginCredentials) => {
  const response = await loginWithEmailAndPassword(data)
  const user = handleUserResponse(response)
  return user
}

const registerFn = async (data: RegisterCredentials) => {
  const response = await registerWithEmailAndPassword(data)
  const user = handleUserResponse(response)
  return user
}

const logoutFn = async () => {
  await logout()
}

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } = configureAuth({
  userFn,
  loginFn,
  registerFn,
  logoutFn,
})
