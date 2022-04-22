import { Component, OnInit } from '@angular/core'; 
import { TestModel } from 'src/app/models/test-model';
import { TestModelService } from 'src/app/services/test-model.service'; 

@Component({
  selector: 'add-test-model',
  templateUrl: './add-test-model.component.html',
  styleUrls: ['./add-test-model.component.css']
})
export class AddTestModelComponent implements OnInit {

  testModel: TestModel = {
    title: '' 
  };
  submitted = false;

  constructor(private testModelService: TestModelService) { }

  ngOnInit(): void {
  }

  saveTestModel(): void {
    const data = {
      title: this.testModel.title ,
      description:this.testModel.description
    };

    this.testModelService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTestModel(): void {
    this.submitted = false;
    this.testModel = {
      title: '' 
    };
  }

}
