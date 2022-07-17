// https://stackoverflow.com/questions/35990538/extending-vs-implementing-a-pure-abstract-class-in-typescript

abstract class Logger {
  abstract log(message: string): void;

  printDate(date: Date) {
    this.log(date.toISOString());
  }
}

class MyLogger extends Logger {
  log(message: string): void {
    console.log(message);
  }

  loginWithDate(message: string) {
    this.printDate(new Date());
    this.log(message);
  }
}
