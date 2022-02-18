
const loginFun = () => {
    const user = document.getElementById("userName").value;
    const pass = document.getElementById("password").value;
    if (user === 'Vaman' && pass === 'Vaman') {
        // alert(`Logged in`);
        console.log(`${user} ${pass}`);
        document.getElementById("loginInfo").innerHTML = `Hi ${user}. Your password is hidden.`;
    }
    else {
        console.log(`${user} ${pass}`);
        document.getElementById("loginInfo").innerHTML = `Hi. Your username and password are wrong!`;
    }
}

const showHidePassword = () => {
    if (document.getElementById("password").getAttribute('type') === "text") {
        document.getElementById("password").setAttribute('type', "password");
        document.getElementById("showHide").value = "Show password";
    }
    else {
        document.getElementById("password").setAttribute('type', "text");
        document.getElementById("showHide").value = "Hide password";
    }
}


const loginFun2 = () => {
    const user = document.getElementById("userName2").value;
    const pass = document.getElementById("password2").value;
    if (user === 'Vaman' && pass === 'Vaman') {
        // alert(`Logged in`);
        console.log(`${user} ${pass}`);
        document.getElementById("loginInfo2").innerHTML = `Hi ${user}. Your password is hidden.`;
    }
    else {
        console.log(`${user} ${pass}`);
        document.getElementById("loginInfo2").innerHTML = `Hi. Your username and password are wrong!`;
    }
}




const showHidePassword2 = (e) => {
    e.preventDefault();
    console.log('JS funciton invoked')
    if (document.getElementById("password2").getAttribute('type') === "text") {
        document.getElementById("password2").setAttribute('type', "password");
        document.getElementById("showHide2").innerHTML = `<i class="bi bi-eye">`;
    }
    else {
        document.getElementById("password2").setAttribute('type', "text");
        document.getElementById("showHide2").innerHTML = `<i class="bi bi-eye-slash"></i>`;
    }
}

// const showHidePassword = () => {
//     if (document.getElementById("showHide").value === "Show password")
//         document.getElementById("showHide").value = "Hide password";
//     else
//         document.getElementById("showHide").value = "Show password";
// }

// {
//     event.preventDefault();
//     if($('#show_hide_password input').attr("type") == "text"){
//         $('#show_hide_password input').attr('type', 'password');
//         $('#show_hide_password i').addClass( "fa-eye-slash" );
//         $('#show_hide_password i').removeClass( "fa-eye" );
//     }else if($('#show_hide_password input').attr("type") == "password"){
//         $('#show_hide_password input').attr('type', 'text');
//         $('#show_hide_password i').removeClass( "fa-eye-slash" );
//         $('#show_hide_password i').addClass( "fa-eye" );
//     }