import { Component, OnInit } from '@angular/core';
import { Repositories } from '../repositories';
import { Users } from 'src/app/users';
import { GitsearcherService } from 'src/app/gitsearcher.service';
import { GitsearchFormComponent } from 'src/app/gitsearch-form/gitsearch-form.component';
import { GitsearchComponent } from 'src/app/gitsearch/gitsearch.component';
import { AppComponent } from 'src/app/app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  details: any;
  repos: any;
  username: string;

  constructor(private gitsearcherService: GitsearcherService) {}

  ngOnInit() {}
  findUser() {
    this.gitsearcherService.getRepoInfo().subscribe((repos) => {
      console.log(repos);
      this.repos = repos;
    });
  }
}
