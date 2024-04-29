// Arry of current_user
let current_users =["Usman","Ali","Areeba","Zain","osama"]

// Arry of New Users
let new_user =["Hamza","Ayesha","Ali","Mahad","Areeba",]

// loop through new_users to check for usernames avaibility
new_user.forEach(new_one_user => {
   
   //Making a candition for username already exist and save in our_conition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
   
   // Print Different message using If-Else statements
    if(our_condition){
      console.log(`Sorry ${new_one_user} is already taken!`)
    
    }else{
        console.log(`This Username  ${new_one_user} is available`)
        
    }   
})

