import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { register } from 'swiper/element/bundle';
register();

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { SectionResultsComponent } from './components/section-results/section-results.component';
import { SectionAboutComponent } from './components/section-about/section-about.component';
import { SectionFeedbacksComponent } from './components/section-feedbacks/section-feedbacks.component';
import { SectionPricesComponent } from './components/section-prices/section-prices.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { SectionHowItWorksComponent } from './components/section-how-it-works/section-how-it-works.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionTitleComponent,
    SectionResultsComponent,
    SectionAboutComponent,
    SectionFeedbacksComponent,
    SectionPricesComponent,
    PageHomeComponent,
    SeparatorComponent,
    SectionHowItWorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
