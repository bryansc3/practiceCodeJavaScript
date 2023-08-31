const Person = function(first, last) {
  let firstName=first;
  let lastName=last;
  //get
  this.getFirstName = function() {
    return firstName;
  }
  this.getLastName = function() {
    return lastName; 
  }
  this.getFullName = function() {
    return `${this.getFirstName()} ${this.getLastName()}`;
  };
  //set
  this.setFirstName = function(first) {
    return firstName=first;
  }
  this.setLastName = function(last) {
    return lastName=last;
  }
  this.setFullName = function(first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};
console.log(Object.keys(Person).length);
