import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoSelectorComponent } from './empleado-selector.component';

describe('AreaSelectorComponent', () => {
    let component: EmpleadoSelectorComponent;
    let fixture: ComponentFixture<EmpleadoSelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmpleadoSelectorComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmpleadoSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
