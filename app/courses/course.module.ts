import { SharedModule } from '../shared/shared.module';
import { CourseService } from './course.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CourseListComponent } from './course-list.component';

@NgModule({
    imports: [ SharedModule,
        RouterModule.forChild([
            { path: 'course', component: CourseListComponent }
        ])
    ],
    exports: [],
    declarations: [ CourseListComponent ],
    providers: [ CourseService ],
})
export class CourseModule { }
