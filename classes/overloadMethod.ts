//can be used for functions as well
class NewUser {
  skills: string[] = [];

  addSkill(skills: string): void;
  addSkill(skills: string[]): void;
  addSkill(skills: string | string[]): void {
    if (typeof skills === "string") {
      this.skills = [...this.skills, skills];
    }

    if (typeof skills === "object") {
      this.skills = [...this.skills, ...skills];
    }
  }
}

const newUser = new NewUser();
newUser.addSkill("coding");
newUser.addSkill(["thinking, writing"]);
