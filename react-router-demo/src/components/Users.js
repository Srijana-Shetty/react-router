import { Outlet , useSearchParams} from "react-router-dom"

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active'
    return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet/>
    
    <div>
    <button onClick={() => setSearchParams({ filter: 'active'})}>Active users</button>
    <button onClick={() => setSearchParams({ })}>Rest filter</button>
    </div>
    
    </div>
   
    
  )
}

