function validateForm(){
    var name = document.myform.name.value;
    var password = document.myform.password.value;
    var email = document.myform.email.value;
    if (name ==null || name ==''){
        alert('Name cannot be blank!');
        return false;
    }else if(password.length < 6){
        alert('Password must be at least 6 characters long!');
        return false;
    } else if(password.length > 20){
        alert ('Password cannot be longer than 20 characters!');
        return false;
    } else if (email ==null || email ==''){
        alert ('e-Mail cannot be blank!');
        return false;
    }
}