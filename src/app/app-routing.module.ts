import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { NavComponent } from './nav/nav.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent

    },
    {
        path: 'user',
        component: UserComponent,
        // resolve: {
        //     csrf: CsrfResolver
        // }
    },
     {
        path: 'library',
        component: LibraryComponent,
    },
     {
        path: 'events',
        component: EventsComponent,
    },
    {
        path: 'calendar',
        component: CalendarComponent,
    },
    {
        path:'**',
        component: HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
