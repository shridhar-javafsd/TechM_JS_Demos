
// const loginFun = () => {
//     const user = document.getElementById("userName").value;
//     const pass = document.getElementById("password").value;
//     // alert(`Logged in`);
//     console.log(`${user} ${pass}`);
//     document.getElementById("loginInfo").innerHTML = `Hi ${user}. Your password is hidden.`;
// }


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
        document.getElementById("loginInfo").innerHTML = `Hi. Your username and password are wrong!.`;
    }
}