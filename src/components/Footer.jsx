
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
                    <p className="border border-1 rounded"><Link to="/contactUs">contact us:</Link></p>
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
                    <a target="_blank" href="https://www.google.com/search?q=facebook&rlz=1C1GIGM_iwIL674IL674&sxsrf=ALeKk03AVnNuYOUuBI3EmXyncFavtcfQKA%3A1629653841975&ei=UYsiYaT5OsPhgwei1oXoCw&oq=facebook&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyEQguEIAEELEDEIMBEMcBENEDMgUIABDLATIFCAAQywEyBQgAEMsBMgUIABDLATIFCAAQywEyBQgAEMsBMgUIABDLATIFCAAQywE6BwgAEEcQsAM6BwgjEOoCECc6CAgAEIAEELEDOgsILhCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQowI6CwgAEIAEELEDEIMBOg4ILhCABBCxAxDHARDRAzoFCC4QgAQ6CwguEIAEEMcBEK8BOgUIABCABDoHCCMQsQIQJzoQCC4QsQMQgwEQxwEQ0QMQCjoHCAAQsQMQCjoHCAAQChDLAToKCAAQsQMQgwEQCjoECAAQCkoECEEYAFDNHFjNZGDLaGgEcAF4AIAB2gGIAf4JkgEFMC45LjGYAQCgAQGwAQrIAQjAAQE&sclient=gws-wiz&ved=0ahUKEwjk5e3SlcXyAhXD8OAKHSJrAb0Q4dUDCA4&uact=5"><FontAwesomeIcon className="mx-1" icon={faFacebook}/></a>
                    <a target="_blank" href="https://www.google.com/search?rlz=1C1GIGM_iwIL674IL674&sxsrf=ALeKk01Kl4sWjvHgrbyufbYI9Zc5ia4MdQ:1629653993653&q=twitter&spell=1&sa=X&ved=2ahUKEwiRrZeblsXyAhVi8-AKHdKGAZ0QBSgAegQIARA3&biw=958&bih=927"><FontAwesomeIcon className="mx-1" icon={faTwitter}/></a>
                    <a target="_blank" href="https://www.google.com/search?q=instagram&rlz=1C1GIGM_iwIL674IL674&biw=958&bih=927&sxsrf=ALeKk01WN4tRaQV8al0xpQxFUyFTXZwXNQ%3A1629653995963&ei=64siYdieOo-2UpCFodAN&oq=inst&gs_lcp=Cgdnd3Mtd2l6EAMYAjIECCMQJzIECCMQJzIKCAAQsQMQgwEQQzIECAAQQzILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMggIABCABBCxAzIFCAAQgAQyCAgAEIAEELEDMgsIABCABBCxAxCDAToHCAAQRxCwAzoHCAAQsAMQQzoTCC4QxwEQ0QMQyAMQsAMQQxCTAjoQCC4QxwEQ0QMQyAMQsAMQQzoKCC4QyAMQsAMQQzoOCC4QgAQQsQMQxwEQ0QM6DgguEIAEELEDEMcBEKMCOgsILhCABBDHARCvAToOCC4QgAQQsQMQxwEQrwFKBQg4EgExSgQIQRgAUK6AA1i7iANg4ZcDaAJwAngAgAGXAYgBpAWSAQMwLjWYAQCgAQHIAQzAAQE&sclient=gws-wiz"><FontAwesomeIcon className="mx-1" icon={faInstagram}/></a>
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