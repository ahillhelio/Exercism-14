//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {

  constructor() {
    this.theSchool = {};
  }

  roster() {
    return JSON.parse(JSON.stringify(this.theSchool));
  }

  add(name, grade) {
      if (!this.theSchool[grade]) {
        this.theSchool[grade] = [name]
    } else {
        this.theSchool[grade].push(name)
    }
    this.theSchool[grade].sort()
  }

  grade(grade) {
    if (!this.theSchool.hasOwnProperty(grade)) {
      return [];
    } else {
      return  JSON.parse(JSON.stringify(this.theSchool[grade]));
    }
  }

}
