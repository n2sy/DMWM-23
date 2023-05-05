import { TestBed } from '@angular/core/testing';

import { LoopGuard } from './loop.guard';

describe('LoopGuard', () => {
  let guard: LoopGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoopGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
