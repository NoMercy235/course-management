import { Course } from './course.model';
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

    constructor(
        private _courseService: CourseService
    ) { }

    ngOnInit() {
        this.initForm();
     }

    validateControl(control: FormControl): boolean {
        return !(control.invalid && control.dirty);
    }

    initForm(): void {
        this.title = new FormControl(this.course ? this.course.title : '', Validators.required);
        this.candidate_limit = new FormControl(this.course ? this.course.candidate_limit : '', Validators.required);
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
            begin: this.saveCourseForm.value.begin,
            end: this.saveCourseForm.value.end,
            candidates: []
        }
        course.begin = 1000000000;
        course.end = 1000000000;
        this._courseService.saveCourse(course).subscribe((response: APIResponse) => {
            if (response.data) course.id = response.data.id;
            this.courseSaved.emit(course);
            this.modal.hide();
            this.saveCourseForm.reset();
        });
    }
}