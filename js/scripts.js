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
  this.currentId = 0;
}