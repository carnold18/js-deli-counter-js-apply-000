var katzDeli = [];
var otherDeli = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
 if (katzDeliLine.length > 0) {
   var statement = `Currently serving ${katzDeliLine[0]}.`;
   katzDeliLine.shift();
   return statement;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var array = [];
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      array[i] = `${i+1}. ${katzDeliLine[i]}`;
    }
    return `The line is currently: ${array.join(', ')}`;
  }
  else {
    return "The line is currently empty.";
  }
}














function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing() {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  else {
    return `Currently serving ${katzDeliLine[0]}.`;
  }
  return katzDeliLine.shift();
}

function currentLine(katzDeliLine) {
  var array = [];
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }
  else {
    for (var i=0; i < katzDeliLine.length; i++) {
      array.push(`${i+1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently: ${array.join(', ')}`;
  }
}


 
    