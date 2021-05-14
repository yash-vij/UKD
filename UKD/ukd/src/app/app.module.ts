import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleBarComponent } from './middle-bar/middle-bar.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { DonationComponent } from './donation/donation.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { IdeologyComponent } from './ideology/ideology.component';
import { VisionComponent } from './vision/vision.component';
import { ConstitutionComponent } from './constitution/constitution.component';
import { FoundersComponent } from './founders/founders.component';
import { ManifestoComponent } from './manifesto/manifesto.component';
import { PressReleasesComponent } from './press-releases/press-releases.component';
import { NewsComponent } from './news/news.component';
import { ProgramsComponent } from './programs/programs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { StructureComponent } from './structure/structure.component';
import { HistoryComponent } from './history/history.component';
import { OfficeBearersComponent } from './office-bearers/office-bearers.component';
import { MissionComponent } from './mission/mission.component';
import { JanAndolanComponent } from './jan-andolan/jan-andolan.component';
import { LeadersComponent } from './leaders/leaders.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { TncComponent } from './tnc/tnc.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    MiddleBarComponent,
    JoinUsComponent,
    DonationComponent,
    VolunteerComponent,
    IdeologyComponent,
    VisionComponent,
    ConstitutionComponent,
    FoundersComponent,
    ManifestoComponent,
    PressReleasesComponent,
    NewsComponent,
    ProgramsComponent,
    GalleryComponent,
    BlogComponent,
    StructureComponent,
    HistoryComponent,
    OfficeBearersComponent,
    MissionComponent,
    JanAndolanComponent,
    LeadersComponent,
    ContactUsComponent,
    TncComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgScrollbarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
