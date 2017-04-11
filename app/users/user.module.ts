import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserListComponent } from './user-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'user', component: UserListComponent }
        ])
    ],
    exports: [],
    declarations: [
        UserListComponent
    ],
    providers: [],
})
export class UserModule { }
