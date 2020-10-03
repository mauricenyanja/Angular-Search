import { Component, OnInit } from '@angular/core';
import { Userservice } from '../userservice';
import { Repo } from '../repo';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  repo: Repo;
  constructor(public repoService: Userservice) {}

  repoSearch(searchName) {
    this.repoService.getRepos(searchName).then(
      (results) => {
        this.repo = this.repoService.allRepos;
        console.log(this.repo);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.repoSearch(' nyash-mauro ');
  }
}
