import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TestRoutingPageComponent } from './routing/test-routing-page/test-routing-page.component';
import { Routing2Component } from './routing/routing2/routing2.component';
import { DynamicRoutingComponent } from './routing/dynamic-routing/dynamic-routing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './pages/main/main.component';
import { EventComponent } from './pages/event/event.component';
import { FriendComponent } from './pages/friend/friend.component';
import { EventCreateComponent } from './pages/event-create/event-create.component';
import { EventMyeventComponent } from './pages/event-myevent/event-myevent.component';
import { EventEditComponent } from './pages/event-edit/event-edit.component';
import { EventInfoComponent } from './pages/event-info/event-info.component';
import { FriendInfoComponent } from './pages/friend-info/friend-info.component';
import { FriendRequestComponent } from './pages/friend-request/friend-request.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { InputCommentComponent } from './components/comment/input-comment/input-comment.component';
import { ShowCommentComponent } from './components/comment/show-comment/show-comment.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    TestRoutingPageComponent,
    Routing2Component,
    DynamicRoutingComponent,
    MainComponent,
    EventComponent,
    FriendComponent,
    EventCreateComponent,
    EventMyeventComponent,
    EventEditComponent,
    EventInfoComponent,
    FriendInfoComponent,
    FriendRequestComponent,
    ProfileComponent,
    InputCommentComponent,
    ShowCommentComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    
  ],
  providers: [
    // provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
