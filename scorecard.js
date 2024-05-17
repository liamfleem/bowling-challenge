class Scorecard {
    constructor() {
      this.frames = [];
    }
  
    addFrame(roll1, roll2, roll3 = null) {
      this.frames.push([roll1, roll2, roll3]);
    }
  
    calculateScore() {
      let score = 0;
      for (let i = 0; i < this.frames.length; i++) {
        const [roll1, roll2, roll3] = this.frames[i];
        if (i < 9) { // Frames 1-9
          if (roll1 === 10) { // Strike
            score += 10 + this.strikeBonus(i);
          } else if (roll1 + roll2 === 10) { // Spare
            score += 10 + this.spareBonus(i);
          } else {
            score += roll1 + roll2;
          }
        } else { // 10th frame
          score += roll1 + roll2 + (roll3 || 0);
        }
      }
      return score;
    }
  
    strikeBonus(frameIndex) {
      const nextFrame = this.frames[frameIndex + 1];
      if (nextFrame[0] === 10) {
        const nextNextFrame = this.frames[frameIndex + 2] || [0, 0];
        return 10 + nextNextFrame[0];
      } else {
        return nextFrame[0] + nextFrame[1];
      }
    }
  
    spareBonus(frameIndex) {
      const nextFrame = this.frames[frameIndex + 1];
      return nextFrame[0];
    }
  }
  
  module.exports = Scorecard;
  