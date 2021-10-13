export const isAuth = () => {
 const auth = localStorage.getItem('Token')
 if(!auth){
   return false
 }
 return true
}