import React from 'react'
import ErrorImage from '../../assets/404.png'

function ErrorPage() {
    return (
        <div className={'errorDiv'}>
            <img src={ErrorImage} alt='404' className='error'/>
        </div>
    )
}

export default ErrorPage
