import { useAdminQuery } from "../service/loginService.ts"
export const Admin = () => {

    const { data, error, isLoading } = useAdminQuery('667f1b585ac9245940317c29')

    const handleClick = () => {
        console.log('DATA',data);
        console.log('ERROR',error);
        console.log('ISLOADING',isLoading);
        
    }
  return (
    <div>Admin
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat eaque et laudantium esse sapiente harum ab rerum minima in, velit quisquam ad, dolore deleniti. Ab reiciendis odio saepe totam?</p>
        <button onClick={handleClick}>Admin</button>
    </div>
  )
}
