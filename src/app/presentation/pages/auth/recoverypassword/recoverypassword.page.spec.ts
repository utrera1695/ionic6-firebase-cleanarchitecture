import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecoverypasswordPage } from './recoverypassword.page';

describe('RecoverypasswordPage', () => {
  let component: RecoverypasswordPage;
  let fixture: ComponentFixture<RecoverypasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverypasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecoverypasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
