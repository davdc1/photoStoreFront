import React from 'react'

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <span>user profile</span>
                <div>
                    <span>userName: {this.props.userLogged.userName}</span>
                    {this.props.userLogged.logged && <span>you're logged in</span>}
                </div>
            </div>
        )
    }
}

export default Profile