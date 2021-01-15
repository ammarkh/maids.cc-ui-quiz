import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userListService: UserListService) { }

  collection = {};
  pages = 0;

  ngOnInit(): void {
    this.getData(1);

  }

  getData(pageNumber: number) {
    this.userListService.getList(pageNumber).subscribe((result) => {
      console.log(result);
      this.collection = result["data"];
    });
  }

  moveToUserPage(ev: any) {
    window.location.href = "/user/" + ev.id;
  }

}
