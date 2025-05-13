import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth"
import { JournalRoutes } from "../journal"
import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRouter = () => {

	const { status } = useCheckAuth();

	if ( status === 'checking' ) {
		return <CheckingAuth />
	}

  return (
	<Routes>
			{/* Login y registro */}
		{
			( status === 'authenticated' )
			? <Route path="/*" element={ <JournalRoutes />}/>
			: <Route path="/auth/*" element={ <AuthRoutes />}/>
		}
		<Route path='/*' element={ <Navigate to='/auth/login' />}/>

	</Routes>
  )
}