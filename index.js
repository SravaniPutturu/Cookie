   

let user = prompt("Enter user name");
let age = prompt("Enter user age");

var gender = "";
let isMale = confirm("Are you male?");
if (isMale) {
   gender = "Male";
} else {
    gender = "Female";
}

setCookie(user, age, gender);

function setCookie(user, age, gender) {
    var expireTime = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);

    var Name = "Uame"
    var Expires = 'Expires'
    var Age = "Age"

    console.log(expireTime);
    console.log(new Date().getTime());

    var storedCookie = Name+"="+user+" "+Expires+"="+ expireTime.toUTCSring() +" "+Age+"="+age+" "+"Gender"+"="+gender;

    document.cookie = storedCookie;
    console.log(document.cookie);

}

getCookie();

function getCookie(){
    var arr = document.cookie.split(" ");
    for (let i = 0; i < arr.length; i++) {
        
        console.log(arr[i].split("=")[1])
    }
    console.log(arr)
}

//encodedURIComponent,decodedURIComponent
//By using encodeURIComponent to encode the cookie name and value before setting the cookie, any special characters are converted into percent-encoded format. This encoding replaces special characters with their respective hexadecimal representation, ensuring that the resulting cookie string is safe and can be correctly interpreted.
//When retrieving a cookie value, it is necessary to decode the cookie string to obtain the original value. The decodeURIComponent function is used to decode the encoded cookie value. This ensures that any percent-encoded characters are properly decoded back to their original form, allowing you to retrieve the intended value of the cookie.