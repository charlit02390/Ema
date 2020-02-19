import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Event } from '../../models/event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})


export class EventFormComponent implements OnInit {

@Output() addEvent = new EventEmitter<any>();
@Output() editEvent = new EventEmitter<any>();
public userForm: FormGroup;
@Input() canAdd : boolean = true;
@Input('selectedEvent') event: Event = new Event();
public submitted: boolean = false;
public isEditing: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
