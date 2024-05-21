import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsListComponent } from './tutorials-list.component';
import { TutorialDetailsComponent } from '../tutorial-details/tutorial-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { TutorialService } from '../../services/tutorial.service';

describe('TutorialsListComponent', () => {
  let component: TutorialsListComponent;
  let fixture: ComponentFixture<TutorialsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TutorialsListComponent,
        TutorialDetailsComponent, // Assurez-vous de déclarer tous les composants utilisés
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]), // Utiliser withRoutes pour configurer des routes spécifiques si nécessaire
        FormsModule, // Ajouter FormsModule ici
      ],
      providers: [TutorialService],
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
