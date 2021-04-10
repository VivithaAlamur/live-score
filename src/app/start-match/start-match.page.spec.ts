import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartMatchPage } from './start-match.page';

describe('StartMatchPage', () => {
  let component: StartMatchPage;
  let fixture: ComponentFixture<StartMatchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartMatchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartMatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
