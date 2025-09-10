export default class Todo {
  id: string; // need to define these properties ahead of time, unlike plain Javascript
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}
