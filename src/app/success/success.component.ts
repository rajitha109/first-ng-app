import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
successId:number =10;
successName:string="My Success";
successStatus:string = "Good";
serverStatus:String ="No server is created";
allowNewUser = false;
serverName:String = "TestServer";
//propery binding - disable property


constructor()
{
  setTimeout(()=>{
    this.allowNewUser=true;
  },2000);  
}

successStatusfunc()
{
  return this.successStatus;
}
onServerCreate(){
  this.serverStatus = "Serve Created "+ this.serverName;
}

onUpdateServer(event:any){
  this.serverName = (<HTMLInputElement>event.target).value;
}

userName:String ="Rajitha";
EmptyUser=false;
checkEmptyUserFunc(event:any) {  
  console.log(this.userName);
  if (this.userName==""){
    this.EmptyUser=true;
  }
  else
  {
    this.EmptyUser=false;
  }  
}

updateUserName()
{
  this.userName=null;  
  
}

}

