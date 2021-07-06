import React,{useState,useEffect} from 'react'; 
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl =  'https://api.github.com';


const GithubContext = React.createContext();


// Provider, consumer - GithubContext.Provider


const GithubProvider = ({children}) => {

    

    const [githubUser,setGithubUser] = useState(mockUser);
    const [repos,setRepos] = useState(mockRepos);
    const [followers,setFollowers] = useState(mockFollowers);

    // Request loading
    const [request,setRequest] = useState(0)
    const [isLoading, setIsLoading] = useState(true)


    // error

    const [error,setError] = useState({show:false,msg:''})


    const searchGithubUser = async(user) => {

        toogleError()
        setIsLoading(true)
        const response = await axios(`${rootUrl}/users/${user}`)
       
        
        if (response) {
            setGithubUser(response.data) 
            const {login,followers_url}  = response.data;

            //repos
            axios(`${rootUrl}/users/${login}/repos?per_page=100`)
            .then(response => setRepos(response.data))


            //followers

                axios(`${followers_url}?per_page=100`)
                .then(response => setFollowers(response.data))

        } else {
            toogleError(true,'there is no user with this search name !! ')
        }

    }
    const checkRequest = async() => {
        try {
            const response = await fetch(`${rootUrl}/rate_limit`)
            const data = await response.json()
            let { rate: {remaining},
        } = data;
        
        setRequest(remaining)
        if(remaining === 0) {
            toogleError(true,'Sorry the user cannot be found')
        }
        } catch (error) {
            console.log(error)
        }
    }


    function toogleError (show=false,msg='') {
        setError({show,msg})
    }

    useEffect(() => {
        checkRequest()
        
    }, [])


return (
    <GithubContext.Provider value={
        {
            githubUser,
            repos,
            followers,
            request,
            error,
            searchGithubUser,
            isLoading,
        }
    }>
        {children}
    </GithubContext.Provider>
)
}

export {GithubProvider,GithubContext}