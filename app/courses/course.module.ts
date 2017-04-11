import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CourseListComponent } from './course-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'course', component: CourseListComponent }
        ])
    ],
    exports: [],
    declarations: [CourseListComponent],
    providers: [],
})
export class CourseModule { }
