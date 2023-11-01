function skillsMember() {
  var member = {
    name: 'John',
    age: 30,
    skills: ['JS', 'CSS', 'HTML'],
    salary: 2000,
    bonus: 1000,
    getSalary: function () {
      return this.salary + this.bonus;
    },
    getSkills: function () {
      return this.skills;
    },
    setSkills: function (skills) {
      this.skills = skills;
    },
  };
  return member;
}