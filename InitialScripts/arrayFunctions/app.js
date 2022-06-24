const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    console.log(this); // window object, NOT person
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this.fullName());
    }, 3000);
  },
};
