const Scorecard = require('./scorecard');

test('initial score is 0', () => {
  const scorecard = new Scorecard();
  expect(scorecard.calculateScore()).toBe(0);
});

test('adding a frame updates the score', () => {
  const scorecard = new Scorecard();
  scorecard.addFrame(2, 5);
  expect(scorecard.calculateScore()).toBe(7);
});

test('spare calculation', () => {
  const scorecard = new Scorecard();
  scorecard.addFrame(5, 5); // Spare
  scorecard.addFrame(3, 4);
  expect(scorecard.calculateScore()).toBe(20);
});

test('strike calculation', () => {
  const scorecard = new Scorecard();
  scorecard.addFrame(10, 0); // Strike
  scorecard.addFrame(3, 4);
  expect(scorecard.calculateScore()).toBe(24);
});

test('10th frame spare calculation', () => {
  const scorecard = new Scorecard();
  for (let i = 0; i < 9; i++) {
    scorecard.addFrame(1, 1);
  }
  scorecard.addFrame(5, 5, 5); // 10th frame spare
  expect(scorecard.calculateScore()).toBe(33);
});

test('10th frame strike calculation', () => {
  const scorecard = new Scorecard();
  for (let i = 0; i < 9; i++) {
    scorecard.addFrame(1, 1);
  }
  scorecard.addFrame(10, 10, 10); // 10th frame strike
  expect(scorecard.calculateScore()).toBe(48);
});
