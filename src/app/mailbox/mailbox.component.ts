
import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from "@angular/core";
import { UserService } from '@/_services';
import { mainModule } from "process";
// import { DataService } from "../../services/data.service";

@Component({
  selector: "app-mailbox",
  templateUrl: "./mailbox.component.html",
})
export class MailboxComponent implements OnInit {

  @Output() chooseTab: EventEmitter<string> = new EventEmitter<string>();

  selectedTab:any;
  logout: boolean = false;
  mockData: any;
  searchText;
  selectedEmail:any;

  constructor(private userService: UserService) {
   }

  ngOnInit() {
    this.selectedTab = "Dashboard";
    this.userService.getData().subscribe(res=>{
      this.mockData = res;
      console.log(res);
    });
    // console.log(mockData);
    //this.dataService.userLoggedIn.subscribe(res => 
    //  this.logout = res
    //  )
  }

  choose_tab(tab){
    this.chooseTab.emit(tab);
  }

  logOut(){
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("authToken");
    // this.dataService.returnIsAuthorized.next(false);
  }
  selectAllEmail(){
      for(var i=0; i<this.mockData.length; i++){
        this.selectedEmail[i] = {
          name: this.selectedEmail[i].name, 
          msg: this.selectedEmail[i].msg,
          time: this.selectedEmail[i].time
        }
      }
  }
  selectEmail(i){
    this.selectedEmail.forEach(mail => {
      if(this.selectedEmail[i].name === mail.name){
        delete this.selectedEmail[i];
      }
      else{
        this.selectedEmail[i] = {
          name: this.selectedEmail[i].name, 
          msg: this.selectedEmail[i].msg,
          time: this.selectedEmail[i].time
        }
      }
    });
  }

}