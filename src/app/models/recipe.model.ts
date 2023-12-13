export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
/*
Other Example: ->

export class Recipe {
  public name!: string;
  public description!: string;
  public imagePath!: string;
} */

/*
Other Example 2: ->

export class Recipe {
  constructor(public name: string, public description: string, public imagePath: string) {}
} */
