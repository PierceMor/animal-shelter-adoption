import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { Energy_Level } from '../../models/animal';

@Component({
  selector: 'app-animal-filter',
  templateUrl: './animal-filter.component.html',
  styleUrls: ['./animal-filter.component.css']
})
export class AnimalFilterComponent implements OnInit {

  Operators = ['>', '>=', '==', '<=', '<'];
  query: QueryItem[];

  queryItems: any = [
    {
      label: 'Gender',
      property: 'sex',
      operators: null,
      options: [
        {
          label: 'Male',
          value: 'm'
        },
        {
          label: 'Female',
          value: 'f'
        }
      ],
      value: null,
      selectedOperator: '==',
      showFilter: true
    },
    {
      label: 'Age',
      property: 'age',
      operators: ['<', '<=', '==', '>=', '>'],
      options: null,
      value: null,
      selectedOperator: null,
      showFilter: true
    },
    {
      label: 'Weight',
      property: 'weight',
      operators: ['<', '<=', '==', '>=', '>'],
      options: null,
      values: null,
      selectedOperator: null,
      showFilter: true
    },
    {
      label: 'Energy Level',
      property: 'energy_level',
      operators: null,
      options: [
        {
          label: 'High',
          value: Energy_Level.HIGH
        },
        {
          label: 'Moderate',
          value: Energy_Level.MODERATE
        },
        {
          label: 'Low',
          value: Energy_Level.LOW
        }
      ],
      selectedOperator: '==',
      value: null,
      showFilter: true
    }
  ];

  genders = [

  ];

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
  }

  applyFilters() {
    this.buildQueryItems();
    this.animalService.filterAnimals(this.query);
  }

  buildQueryItems() {
    this.query = [];
    this.queryItems.forEach(item => {
      const qItem = new QueryItem();
      qItem.field = item.property;
      qItem.operator = item.selectedOperator;
      qItem.value = item.value;
      this.query.push(qItem);
    });
  }

}

export class QueryItem {
  field: string;
  operator: WhereFilterOp;
  value: any;
}


export type WhereFilterOp = '<' | '<=' | '==' | '>=' | '>';
