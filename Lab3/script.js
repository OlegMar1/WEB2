   var User=require('./user');
   var user=new User('Oleh','Mykhasiv');
   console.log('firstname:'+user.first);
   console.log('lastname:'+user.last);
   user.fullName();
