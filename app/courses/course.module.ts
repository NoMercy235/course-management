import { CourseRemoveUserComponent } from './course-remove-user.component';
import { UserService } from '../users/user.service';
import { CourseThumbnailComponent } from './course-thumbnail.component';
import { CourseAddUserComponent } from './course-add-user.component';
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
    declarations: [
        CourseListComponent, CourseAddUserComponent, CourseThumbnailComponent, CourseRemoveUserComponent
    ],
    providers: [ CourseService, UserService ],
})
export class CourseModule { }
