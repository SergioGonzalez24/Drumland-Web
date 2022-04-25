import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeContentComponent,
    FooterComponent,
    LoginComponent,
    UserComponent,
    RankingComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeContentComponent },
      { path: 'ranking', component: RankingComponent },
      { path: 'search', component: SearchComponent },
      { path: 'login', component: LoginComponent },
      { path: 'profile/:username', component: UserComponent },

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
