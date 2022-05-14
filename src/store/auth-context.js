import React from 'react'
const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onToggle: ()=> {},
	isOpen: false
})
export default AuthContext
