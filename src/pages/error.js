import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Error = () => {
    return (
        <Wrapper>
            <div>
                <h1>
                    404 Error !!!
                </h1>
                <h3>Sorry, the page that you're trying cannot be found</h3>
                <button className='btn'>
                    <Link to='/'>Home</Link>
                </button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section `
min-height:100vh;
display: grid;
place-items:center;
background:var(--clr-primary-10);
text-align:center;


h1 {
    color:red;
    font-size: 10rem;
}

h3 {
    color:var(--clr-grey-3);
    margin-bottom: 1.5rem;
}
`

export default Error;