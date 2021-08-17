
function Footer(){
    return(
        <div style={style1} className="bg-light py-20 text-gray-700">
            <div style={style2}>
                <div>
                    <p>contact us:</p>
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
                <div>
                    <p>social media:</p>
                    <a href="">facebook</a>
                    <br />
                    <a href="">tweeter</a>
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