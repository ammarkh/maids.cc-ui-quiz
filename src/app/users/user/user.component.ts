import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userListServie: UserListService) { }

  info = {};

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    this.getUserInformation(parseInt(userId));
  }

  getUserInformation(userId: Number) {
    this.userListServie.getUserById(userId).subscribe((result) => {
      console.log(result);
      this.info = result;
    });
  }

}
