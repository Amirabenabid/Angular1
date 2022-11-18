import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { musiquesComponent } from './musiques/musiques.component';
import { AddmusiqueComponent } from './add-musique/add-musique.component';
import { FormsModule } from '@angular/forms';
import { UpdatemusiqueComponent } from './update-musique/update-musique.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RechercheParstyleComponent } from './recherche-par-style/recherche-par-style.component';
import { listestylesComponent } from './liste-styles/liste-styles.component';
import { UpdatestyleComponent } from './update-style/update-style.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    musiquesComponent,
    AddmusiqueComponent,
    UpdatemusiqueComponent,
    RechercheParstyleComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    listestylesComponent,
    UpdatestyleComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
