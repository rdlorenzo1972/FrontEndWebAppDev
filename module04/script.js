// *******************************
// Randy Lorenzo Module 04 Assignment
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
  console.log(" "); // To add row between first and second list prints

  //
  // Array.prototype.map
  //
  var mappingNames = function (oneName) {
    var firstLetter = oneName.charAt(0).toLowerCase();

    if (firstLetter === "j") {
      return byeSpeaker.speakSimple(oneName);
    } else {
      return helloSpeaker.speakSimple(oneName);
    }
  };

  var mappedNamesVer3 = names.map(mappingNames);
  for (greeting of mappedNamesVer3) {
    console.log(greeting);
  }

  //**********************************************************
  // Alternate method to achieve same output
  //**********************************************************
  // var mappedNames = names.map(function (n) {
  //   for (var i = 0; i < n.length; i++) {
  //     var firstLetter = n.charAt(0).toLowerCase();

  //     if (firstLetter === "j") {
  //       return byeSpeaker.speakSimple(n);
  //     } else {
  //       return helloSpeaker.speakSimple(n);
  //     }
  //   }
  // });
  // console.log(mappedNames);

  //**********************************************************
  // Another alternate method to achieve same output
  //**********************************************************
  // var mappedNamesVer2 = Array.prototype.map.call(names, mappingNames);
  // for (greeting of mappedNamesVer2) {
  //   console.log(greeting);
  // }

  //**********************************************************
  // Alternate method to iterate through array
  //**********************************************************
  // mappedNamesVer2.forEach((element) => console.log(element));

  //**********************************************************
  // Bonus content
  //**********************************************************
  console.log(" "); // To add row between first and second list prints
  var doubleArray = names.reduce(
    (tester, name) => {
      var firstLetter = name.charAt(0).toLowerCase();

      if (firstLetter === "j") {
        tester["bye"].push("Good Bye " + name);
      } else {
        tester["hello"].push("Hello " + name);
      }

      return tester;
    },
    { hello: [], bye: [] }
  );

  for (var I = 0; I < doubleArray["bye"].length; I++) {
    console.log(doubleArray["bye"][I]);
  }
  for (var I = 0; I < doubleArray["hello"].length; I++) {
    console.log(doubleArray["hello"][I]);
  }
})();
