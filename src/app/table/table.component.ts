import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  headers = ['ID', 'name', 'race', 'address', 'email', 'birthday', 'social', 'pcp', 'weight ', 'height', 'bmi'];
  index = 0;
  rows = [
    {
      id: this.index++,
      Name: 'bob',
      race: 'white',
      address: 'one mars',
      email: 'bob@bob.com',
      birthday: 'march 1 2013',
      social: 123456789,
      pcp: 'dr jack',
      weight: 210,
      height: '5-11',
      bmi: 20.5
    },
    {
      id: this.index++,
      Name: 'john',
      race: 'white',
      address: 'one mars',
      email: 'bob@bob.com',
      birthday: 'march 1 2013',
      social: 123456789,
      pcp: 'dr jack',
      weight: 210,
      height: '5-11',
      bmi: 20.5
    },
    {
      id: this.index++,
      Name: 'john',
      race: 'white',
      address: 'one mars',
      email: 'bob@bob.com',
      birthday: 'march 1 2013',
      social: 123456789,
      pcp: 'dr jack',
      weight: 210,
      height: '5-11',
      bmi: 20.5
    },
    {
      id: this.index++,
      Name: 'john',
      race: 'white',
      address: 'one mars',
      email: 'bob@bob.com',
      birthday: 'march 1 2013',
      social: 123456789,
      pcp: 'dr jack',
      weight: 210,
      height: '5-11',
      bmi: 20.5
    },
    {
      id: this.index++,
      Name: 'john',
      race: 'white',
      address: 'one mars',
      email: 'bob@bob.com',
      birthday: 'march 1 2013',
      social: 123456789,
      pcp: 'dr jack',
      weight: 210,
      height: '5-11',
      bmi: 20.5
    },
    {
      id: this.index++,
      Name: 'john',
      race: 'white',
      address: 'one mars',
      email: 'bob@bob.com',
      birthday: 'march 1 2013',
      social: 123456789,
      pcp: 'dr jack',
      weight: 210,
      height: '5-11',
      bmi: 20.5
    }
  ];

}




