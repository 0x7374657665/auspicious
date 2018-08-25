export class App {
  message = 'Steve was here.';

  logClick(event: Event) {
    console.log('button was clicked',event.target);
  }
}
