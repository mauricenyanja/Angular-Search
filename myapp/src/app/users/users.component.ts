import { Component, OnInit } from '@angular/core';

import { Userservice } from '../userservice';
import {User} from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
user: User;
repo: Repo;
  constructor(public myService: Userservice, private repoService: Userservice) {
  }

  searchs(searchName) {
    this.myService.searchUSer(searchName).then(
      (success)=>{
        this.user = this.myService.foundUser;
      },
      (error)=>{
        console.log(error)
      }
    );
      this.repoService.getRepos(searchName).then(
        (results)=>{
          this.repo =this.repoService.allRepos
          console.log(this.repo);
        },
        (error)=>{
          console.log(error);
        }
      );
  }

  ngOnInit() {
    this.searchs(' Wigwa ');
  }
}
