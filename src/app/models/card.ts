export class Card {
  constructor(
    public set: string,
    public card1: string,
    public card2: string,
    public state = {
      covered: true,
        hidden: false,
        highlight: true
    }
  ) {}
  getRGBA() {}
}
