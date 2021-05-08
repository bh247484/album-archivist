import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAlbumFormComponent } from './update-album-form.component';

describe('UpdateAlbumFormComponent', () => {
  let component: UpdateAlbumFormComponent;
  let fixture: ComponentFixture<UpdateAlbumFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAlbumFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAlbumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
