import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ConstitutionComponent } from './constitution/constitution.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DonationComponent } from './donation/donation.component';
import { FoundersComponent } from './founders/founders.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HistoryComponent } from './history/history.component';
import { IdeologyComponent } from './ideology/ideology.component';
import { JanAndolanComponent } from './jan-andolan/jan-andolan.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { LeadersComponent } from './leaders/leaders.component';
import { ManifestoComponent } from './manifesto/manifesto.component';
import { MissionComponent } from './mission/mission.component';
import { NewsComponent } from './news/news.component';
import { OfficeBearersComponent } from './office-bearers/office-bearers.component';
import { PressReleasesComponent } from './press-releases/press-releases.component';
import { ProgramsComponent } from './programs/programs.component';
import { StructureComponent } from './structure/structure.component';
import { VisionComponent } from './vision/vision.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

const routes: Routes = [
  { path: 'ideology', component: IdeologyComponent, data: { animation: 'isRight' } },
  { path: 'vision', component: VisionComponent, data: { animation: 'isRight' } },
  { path: 'constitution', component: ConstitutionComponent, data: { animation: 'isRight' } },
  { path: 'founders', component: FoundersComponent, data: { animation: 'isRight' } },
  { path: 'manifesto', component: ManifestoComponent, data: { animation: 'isRight' } },
  { path: 'pressReleases', component: PressReleasesComponent, data: { animation: 'isRight' } },
  { path: 'news', component: NewsComponent, data: { animation: 'isRight' } },
  { path: 'programs', component: ProgramsComponent, data: { animation: 'isRight' } },
  { path: 'gallery', component: GalleryComponent, data: { animation: 'isRight' } },
  { path: 'blog', component: BlogComponent, data: { animation: 'isRight' } },
  { path: 'janAndolan', component: JanAndolanComponent, data: { animation: 'isRight' } },
  { path: 'mission', component: MissionComponent, data: { animation: 'isRight' } },
  { path: 'history', component: HistoryComponent, data: { animation: 'isRight' } },
  { path: 'officebearers', component: OfficeBearersComponent, data: { animation: 'isRight' } },
  { path: 'structure', component: StructureComponent, data: { animation: 'isRight' } },
  { path: 'donate', component: DonationComponent, data: { animation: 'isRight' } },
  { path: 'joinUkd', component: JoinUsComponent, data: { animation: 'isRight' } },
  { path: 'volunteer', component: VolunteerComponent, data: { animation: 'isRight' } },
  { path: 'leaders', component: LeadersComponent, data: { animation: 'isRight' } },
  { path: 'contact', component: ContactUsComponent, data: { animation: 'isRight' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
