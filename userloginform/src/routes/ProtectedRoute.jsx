import { useAuth } from "../authcontext/authcontext"
import { Navigate } from "react-router"

function ProtectedRoute({ children }) {

    const { user } = useAuth();

    if (!user) {
        return <Navigate to={"/register"} replace />
    }
    
    return children

}

export default ProtectedRoute
