
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom'

function Footer(){
    return(
        <div className="flex flex-col items-center bg-light py-20 text-gray-700 z-40 relative">
            <div className="flex flex-col sm:flex-row justify-around w-full">
                <div>
                    <p className="border border-1 rounded border-turq"><Link to="/contactUs">contact us:</Link></p>
                    <address>
                    <span>1-222-333-444</span>
                    <br />
                        <a href="mailto:mail@mail.com">mail@mail.com</a>
                    </address>
                </div>
                <div>
                    <p>links:</p>
                    <a href="index.html">this</a>
                    <br/>
                    <a href="index.html">that</a>
                </div>
                <div className="mt-5">
                    <a rel="noreferrer" target="_blank" href="https://www.facebook.com"><FontAwesomeIcon className="mx-1" icon={faFacebook}/></a>
                    <a rel="noreferrer" target="_blank" href="https://www.twitter.com"><FontAwesomeIcon className="mx-1" icon={faTwitter}/></a>
                    <a rel="noreferrer" target="_blank" href="https://www.instagram.com"><FontAwesomeIcon className="mx-1" icon={faInstagram}/></a>
                </div>
            </div>
            <div className="mt-6">
                <p>all rights reserved ©</p>
            </div>
        </div>
    )
}

export default Footer;