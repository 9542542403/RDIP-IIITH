
//task1

 function dis(val) 
         { 
             document.getElementById("result").value+=val 
         } 
           
         //function that evaluates the digit and return result 
         function solve() 
         { 
             let x = document.getElementById("result").value 
             let y = eval(x) 
             document.getElementById("result").value = y 
         } 
           
         //function that clear the display 
         function clr() 
         { 
             document.getElementById("result").value = "" 
         } 


//task2

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function validateForm()
  {
    var name = document.contactForm.name.value;
    var mobile = document.contactForm.mobile.value;
    var email = document.contactForm.email.value;
    
    }
    
	
    var nameErr = mobileErr = emailErr = true;
    
    
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Cannot take a number as starting letter.");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
  
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
  
    
    if(email == "") 
    {
        printError("emailErr", "Please enter your email address");
    } 
    else 
    {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address,@ and . should be there");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    if((nameErr || mobileErr || emailErr ) == true)
    {
       return false;
    } 
  else
    {    
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Email Address: " + email + "\n" ;
        alert(dataPreview);
    }
};


//task3


		function myFunction()
		{
			
			var str = document.getElementById('txtbox').value;
			var result = checkPalindrome(str);
			alert('The Entered String "'+str +'" is "'+result+'"');
		}
		
		function checkPalindrome(str)
		{
			var orignalStr; 
			str = str.toLowerCase();
			orignalStr = str;
			
			str = str.split('');
            str = str.reverse();
			str = str.join(''); 
			
			var reverseStr = str;
			
		ript>
		function check2(){
        var s1 = document.getElementById('check1').value;
        var s2= document.getElementById('check2').value;
        if (s1 == "") {
        alert("String can't be blank");
        return false;
    }
        if (s2 == "") {
        alert("String can't be blank");
        return false;
    }
        var sortStr1 = s1.split('').sort().join('');
    var sortStr2 = s2.split('').sort().join('');
        if(sortStr1 === sortStr2){
            alert("Anagram");
            return false;
        }
        else{
            alert("not anagram");
            return false;
        }
        
    }
						
			if(orignalStr == reverseStr){
				return 'true'; 
			}else{
				return 'false';
			}
		}


//task4
