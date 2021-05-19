var User=require('./user');
var user=new User('Petro','Petrenko');
console.log('firstname:'+user.first);
console.log('lastname:'+user.last);
user.fullName();


//var tableArr=['<table>'];
//for (i = 1; i < 10; i++){
//  tableArr.push('<tr><td>'+i+'</td></tr>');
//}
//tableArr.push('</table>');
//document.getElementById('table1').innerHTML=tableArr.join('\n')
