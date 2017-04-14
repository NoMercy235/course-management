import { UserSaveComponent } from './user-save.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserListComponent } from './user-list.component';

@NgModule({
    imports: [ SharedModule,
        RouterModule.forChild([
            { path: 'user', component: UserListComponent }
        ])
    ],
    exports: [],
    declarations: [
        UserListComponent, UserSaveComponent
    ],
    providers: [],
})
export class UserModule { }
