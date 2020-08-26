import React from 'react'
import Allapps from './Allapps'
import Bundleapps from './Bundleapps'
import './CSS/home.css'
import Featuredapps from './Featuredapps'
import Sponsor from './Sponsor'


function Home() {
    return (
        <div>
            <Featuredapps />
            <Bundleapps />
            <Allapps />
            <Sponsor />
        </div>
    )
}

export default Home
