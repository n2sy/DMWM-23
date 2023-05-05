import { TestBed } from '@angular/core/testing';

import { WithoutTokenGuard } from './without-token.guard';

describe('WithoutTokenGuard', () => {
  let guard: WithoutTokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WithoutTokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
