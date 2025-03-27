import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { fetchUsers } from "./userSlice";
import { fetchCloths } from './clothSlice'

const UserView = () => {
  const dispatch = useDispatch()
  const cloth = useSelector(state => state.user)

  console.log('cloth:', cloth)

  useEffect(() => {
    dispatch(fetchCloths())
  }, [])

  return (
    <div>
      {/* <div className="flex justify-center items-center">
        <h1 className="text-xl font-semibold">List of users</h1>
      </div>
      {users.isLoading && <p>Loading...</p>}
      {users.data && (
        <>
          <div className="flex flex-col gap-3">
            {users &&
              users.data.map((user, i) => (
                <div className="flex gap-4">
                  <p>{user.id}</p>{" "}
                  <div className="flex gap-4">
                    <p>Name: {user?.name}</p>
                    <p>Email: {user.email}</p>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
      {users.error && <p>{users.error}</p>} */}
    </div>
  )
}

export default UserView
