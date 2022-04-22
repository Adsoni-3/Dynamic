import { Component, OnInit } from '@angular/core';
import { TestModel } from 'src/app/models/test-model';
import { TestModelService } from 'src/app/services/test-model.service'; 

@Component({
  selector: 'app-test-model',
  templateUrl: './test-model.component.html',
  styleUrls: ['./test-model.component.css']
})
export class TestModelComponent implements OnInit {

  testModels?: TestModel[];
  currentTestModel: TestModel = {};
  currentIndex = -1;
  title = '';

  constructor(private testModelService:TestModelService) { }

  ngOnInit(): void {
    this.retrievetestModels();
  }
  retrievetestModels(): void {
    this.testModelService.getAll()
      .subscribe(
        data => {
          this.testModels = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrievetestModels();
    this.currentTestModel = {};
    this.currentIndex = -1;
  }
  searchTitle(): void {
    this.currentTestModel = {};
    this.currentIndex = -1;

    this.testModelService.findByTitle(this.title)
      .subscribe(
        data => {
          this.testModels = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  removeAllTests(): void {
    this.testModelService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
  setActiveTests(testModel: TestModel, index: number): void {
    this.currentTestModel = testModel;
    this.currentIndex = index;
  }
}
