import React from 'react'

import Navbar from '../components/Navbar'
import UserInfo from '../components/Info'
import User from '../components/User'
import Repos from '../components/Repos'
import Search from '../components/Search'
import { GithubContext } from '../context/context'
const Dashboard = () => {
    const {isLoading} = React.createContext(GithubContext)


    return (
        <main>
            <Navbar></Navbar>
            <Search></Search>
            <UserInfo></UserInfo>
            <User></User>
            <Repos></Repos>
        </main>
    )
}

export default Dashboard;