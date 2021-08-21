
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom'

function Footer(){
    return(
        <div style={style1} className="bg-light py-20 text-gray-700">
            <div style={style2}>
                <div>
                    <p><Link to="/contactUs">contact us:</Link></p>
                    <address>
                    <span>1-222-333-444</span>
                    <br />
                        <a href="mailto:mail@mail.com">mail@mail.com</a>
                    </address>
                </div>
                <div>
                    <p>links:</p>
                    <a href="">this</a>
                    <br/>
                    <a href="">that</a>
                </div>
                <div className="mt-5">
                    <a className="" href=""><FontAwesomeIcon className="mx-1" icon={faFacebook}/></a>
                    <a className="" href=""><FontAwesomeIcon className="mx-1" icon={faTwitter}/></a>
                    <a href=""><FontAwesomeIcon className="mx-1" icon={faInstagram}/></a>
                </div>
            </div>
            <div className="mt-6">
                <p>all rights reserved ©</p>
            </div>
        </div>
    )
}

let style1 = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}
let style2 = {
    display: "flex",
    justifyContent: "space-around",
    width: "100%"
}
export default Footer;