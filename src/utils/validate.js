

const checkvalidData=(email, password,name, signIn)=>{
    const isEmailValid= /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
    const isPasswardValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isNameValid = /^[A-Za-z\s'-]{2,}$/.test(name);
    if(!isEmailValid){
        return "Email is not valid";
    }
    if(!isPasswardValid){
        return "Password is not valid";
    }
    if(!isNameValid && !signIn){
        return "Name is not valid";
    }
}

export default checkvalidData;