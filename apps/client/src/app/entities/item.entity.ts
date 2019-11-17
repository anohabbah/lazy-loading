export class Item {
  constructor(
    public id: number,
    public title: string,
    public type: string,
    public img: string,
    public imgLarge: string,
    public description: string,
    public text: string,
    public tags: string[]
  ) {}
}
