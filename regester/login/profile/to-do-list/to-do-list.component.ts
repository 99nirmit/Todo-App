import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/appService/data.service';
import { DatePipe } from '@angular/common';

export interface Lists{
  id:number,
  listName:string,
  description:string,
  startDate:Date,
  endDate:Date
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {

  

lists:Lists[]=[];

  myListForm !: FormGroup;

  constructor(private dataService:DataService,private date:DatePipe){}

  isUpdate:boolean=false;
  selectedIndex:any;

  ngOnInit(){
    this.myListForm = new FormGroup({
      id : new FormControl(null),
      listName : new FormControl(null),
      description : new FormControl(null),
      startDate : new FormControl(null),
      endDate : new FormControl(null)
    })
  
  
  const list = JSON.parse(localStorage.getItem('lists') || '[]');
  this.lists = list;

  this.lists = list.map((item:any) => ({
    ...item,
    startDate: this.date.transform(item.startDate, 'yyyy-MM-dd'),
    endDate: this.date.transform(item.endDate, 'yyyy-MM-dd')
  }));
}

  onSubmit(){
    const selectedList = this.myListForm.value;
    if(this.isUpdate){
      this.onUpdate(this.selectedIndex)
    }else{
      selectedList.id = this.lists.length;
      this.lists.push(selectedList)
      localStorage.setItem('lists', JSON.stringify(this.lists));
      this.myListForm.reset();
    }
  }

  onDelete(index:number){
    this.lists.splice(index,1);
    localStorage.setItem('lists',JSON.stringify(this.lists))
  }

  currentIndex : any;
  onEdit(id:number,index:number){
    this.isUpdate = true;
    this.selectedIndex = index;

    const tempList = this.lists[index];
    this.myListForm.patchValue(tempList)
}

onUpdate(index:number){
  const updatedList = this.myListForm.value;
  this.lists[index] = updatedList;
  localStorage.setItem('lists', JSON.stringify(this.lists));
  this.isUpdate = false;
  this.myListForm.reset();
}


}
