import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {

  let comp: VoteComponent;

  beforeEach(() => {
    comp = new VoteComponent();
  });

  it('should increment totalVotes when upvoted', () => {
    //let comp = new VoteComponent();
    comp.upVote();
    expect(comp.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    //let comp = new VoteComponent();
    comp.downVote();
    expect(comp.totalVotes).toBe(-1);
  });
});