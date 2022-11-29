import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFilho02Component } from './componente-filho02.component';

describe('ComponenteFilho02Component', () => {
  let component: ComponenteFilho02Component;
  let fixture: ComponentFixture<ComponenteFilho02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteFilho02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteFilho02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
