import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css'],
  providers: [ApiServiceService]
})
export class DependencyInjectionComponent implements OnInit {
  users: [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.fetchData().subscribe((data) => {
      this.users = data;
    })
  }

}
