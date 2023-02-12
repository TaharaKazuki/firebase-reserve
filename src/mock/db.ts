export type DBUser = {
  email: string
  name: string
  password: string
}

const users: Record<string, DBUser> = JSON.parse(window.localStorage.getItem('db_users') || '{}')

export const setUser = (data: DBUser) => {
  if (!data?.email) return
  users[data.email] = data
  window.localStorage.setItem('db_users', JSON.stringify(users))
  return data
}

export const getUser = (email: string | null) => {
  if (email) {
    return users[email]
  }
}
