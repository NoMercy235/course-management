import { Course } from './course.model';
import { IMyOptions } from 'mydatepicker';
import { CourseService } from './course.service';
import { APIResponse } from '../shared/response.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from '../shared/components/modal.component';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'cm-course-save',
    template: require('./course-save.component.html')
})

export class CourseSaveComponent implements OnInit {
    @ViewChild(ModalComponent) public readonly modal: ModalComponent;
    @Input() course: Course;
    @Output() courseSaved = new EventEmitter();

    public title: FormControl;
    public candidate_limit: FormControl;
    public begin: FormControl;
    public end: FormControl;
    public saveCourseForm: FormGroup;

    private myDatePickerOptions: IMyOptions = {
        dateFormat: 'dd/mm/yyyy',
    };

    constructor(
        private _courseService: CourseService
    ) { }

    ngOnInit() {
        this.initForm();
     }
     
     setDate(): void {
        // Set today date using the setValue function
        let date = new Date();
        this.saveCourseForm.setValue({begin: {
        date: {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()}
        }});
        console.log()
    }

    clearDate(): void {
        this.saveCourseForm.setValue({myDate: ''});
    }

    validateControl(control: FormControl): boolean {
        return !(control.invalid && control.dirty);
    }

    minValidator(nr: number): (FormControl) => {[key: string]: any} {
        return (control: FormControl): {[key: string]: any} => {
            if (!control.value) return null;
            return control.value < nr ? { 'minValue': nr } : null;
        };
    }

    initForm(): void {
        this.title = new FormControl(this.course ? this.course.title : '', Validators.required);
        this.candidate_limit = new FormControl(this.course ? this.course.candidate_limit : '', 
            [ Validators.required, this.minValidator(1) ]);
        this.begin = new FormControl(this.course ? this.course.begin : '', Validators.required);
        this.end = new FormControl(this.course ? this.course.end : '', Validators.required);
        this.saveCourseForm = new FormGroup({
            title: this.title,
            candidate_limit: this.candidate_limit,
            begin: this.begin,
            end: this.end
        });
    }

    showModal(): void {
        this.initForm();
        this.modal.show();
    }

    saveCourse(): void {
        let course = {
            id: this.course ? this.course.id : undefined,
            title: this.saveCourseForm.value.title,
            candidate_limit: this.saveCourseForm.value.candidate_limit,
            begin: (new Date(this.saveCourseForm.value.begin)).getTime(),
            end: (new Date(this.saveCourseForm.value.end)).getTime(),
            candidates: []
        };
        this._courseService.saveCourse(course).subscribe((response: APIResponse) => {
            if (response.data) course.id = response.data.id;
            this.courseSaved.emit(course);
            this.modal.hide();
            this.saveCourseForm.reset();
        });
    }
}