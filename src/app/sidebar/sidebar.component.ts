import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
// import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  // styleUrls: ['./sidebar.component.less'],

})

export class SidebarComponent implements OnInit {
  
  @Output() chooseTab: EventEmitter<string> = new EventEmitter<string>();

  selectedTab:any;
  logout: boolean = false;

  constructor() {

   }

  ngOnInit() {
    this.selectedTab = 'Dashboard';
    //this.dataService.userLoggedIn.subscribe(res => 
    //  this.logout = res
    //  )
  }

  choose_tab(tab){
    this.chooseTab.emit(tab);
  }

  logOut(){
    localStorage.removeItem("userEmail");
    localStorage.removeItem("name");
    // this.dataService.returnIsAuthorized.next(false);
  }
  
}
