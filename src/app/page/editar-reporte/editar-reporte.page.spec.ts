import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarReportePage } from './editar-reporte.page';

describe('EditarReportePage', () => {
  let component: EditarReportePage;
  let fixture: ComponentFixture<EditarReportePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarReportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
