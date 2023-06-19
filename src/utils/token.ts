export function GET_TOKEN() {
  const token = localStorage.getItem('TOKEN')
  return token
}
export function SET_TOKEN(token: string) {
  localStorage.setItem('TOKEN', token)
}
export function REMOVE_TOKEN() {
  localStorage.removeItem('TOKEN')
}
