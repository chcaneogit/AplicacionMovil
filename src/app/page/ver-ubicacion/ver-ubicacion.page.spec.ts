import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerUbicacionPage } from './ver-ubicacion.page';

describe('VerUbicacionPage', () => {
  let component: VerUbicacionPage;
  let fixture: ComponentFixture<VerUbicacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerUbicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
