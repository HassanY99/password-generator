// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var len = 0;
    while(true)
    {
        len = prompt("Please enter the length of password", 8);
        if( 8 <= len && len <= 128 )
        {
            break;
        }
    }

    var lowercase_flag = confirm("include lowercase?");
    var uppercase_flag = confirm("include uppercase?");
    var numeric_flag = confirm("include numeric?");
    var special_flag = confirm("special characters?");

    var lowercase_list = 'abcdefghijklmnopqrstuvwxyz';
    var upper_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numeric_list = '0123456789';
    var special_list = '~!@#$%^&*()_+=-,.<>?/|\'';

    var char_list = '';
    if( lowercase_flag )
        char_list += lowercase_list;
    if( uppercase_flag )
        char_list += upper_list;
    if( numeric_flag )
        char_list += numeric_list;
    if( special_flag )
        char_list += special_list;


    password = '';
    for(var i = 0; i < len; i++) {
        var n = Math.floor(Math.random() * char_list.length);
        if( n >= char_list.length )
            n = char_list.length - 1;
            
        password += char_list[n];
    }

    return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);