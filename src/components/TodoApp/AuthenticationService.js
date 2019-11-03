class AuthenticationService{

    registerSuccessfullLogin(username, password){
        sessionStorage.setItem('authenticatedUser',username);
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isLoggedin(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null) return true
        return true
    }
}

export default new AuthenticationService()