import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';
import { TestModelService } from 'src/app/services/test-model.service';
import { TestModel } from 'src/app/models/test-model';

@Component({
  selector: 'app-test-model-details',
  templateUrl: './test-model-details.component.html',
  styleUrls: ['./test-model-details.component.css']
})
export class TestModelDetailsComponent implements OnInit {
  currentTestModel: TestModel = {
    title: '',
    description: '' 
  };
  message = '';
  constructor(
    private testModelService:TestModelService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = ''; 
    this.getTestModel(this.route.snapshot.params.id);
  }

  getTestModel(id: string): void {
    this.testModelService.get(id)
      .subscribe(
        data => {
          this.currentTestModel = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
  }

  updateTestModel(): void {
    this.message = '';
    this.testModelService.update(this.currentTestModel.id, this.currentTestModel)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : "This TestModel was updated successfully.";
        },
        error => {
          console.log(error);
        }
      )
  }
  updatepublished(status: boolean): void {
    const data = {
      title: this.currentTestModel.title,
      description: this.currentTestModel.description,
      published: this.currentTestModel.published
    }
    this.message = '';
    this.testModelService.update(this.currentTestModel.id, data)
      .subscribe(response => {
        this.currentTestModel.published = status;
        console.log(response);
        this.message = response.message ?response.message: "The status was updated successfully";
      }, error => {
        console.log(error);
      }); 
  }

  deleteTestModel(): void {
    this.testModelService.delete(this.currentTestModel.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tests']);
        },
        error => {
          console.log(error);
        });
  }
}
