// each movie has its own cost
//modified by showtime (matinee %50 discount)
//multiply movie total by appropriate age modifier

//object : tickets
//object : movies
  // new release, old release1, old release 2
//object: showtimes
  // morning/matinee/evening
//object: ages
  //kid/adult/senior

function Tickets() {
  this.movie = {};
  this.showTimes = {};
  this.age = {};
}

Tickets.prototype.populateTicket = function() {
  this.movie = new Movies();
  this.showTimes = new ShowTimes();
  this.age = new AgeGroups();
}


function Movies() {
  this.newRelease = "Top Gun"
  this.oldRelease1 = "Halloween"
  this.oldRelease2 = "Last House on the Left"
}

function AgeGroups() {
  if (i = 0, i <= 12, i++) {
    // this.child = [];
    this.child.push(i);
  } else if  (i > 12 && i <= 21, i++) {
    // this.student = [];
    this.student.push(i);
  } else if (i > 22 && i <= 64, i++) {
    // this.adult = [];
    this.adult.push(i);
  } else  (i > 64 && i <= 100, i++)
    // this.senior = [];
    this.senior.push(i);
  }

  function ShowTimes() {
    this.morning = "Morning";
    this.matinee = "Matinee";
    this.evening = "Evening";
  }


  //UI Logic