const fs = require("fs");

const main = async () => {
timeOffsets = {

    'MIT':-11,
    'HST':-10,
    'AST':-9,
    'PST':-8,
    'PNT':-7,
    'MST':-7,
    'PDT':-7,
    'CST':-6,
    'MDT':-6,
    'EST':-5,
    'IET':-5,
    'CDT':-5,
    'PRT':-4,
    'EDT':-4,
    'CNT':-3.5,
    'AGT':-3,
    'BET':-3,
    'CAT':-1,
    'GMT':-0,
    'ECT':+1,
    'EET':+2,
    'ART':+2,
    'EAT':+3,
    'MET':+3.5,
    'NET':+4,
    'PLT':+5,
    'IST':+5.5,
    'BST':+6,
    'VST':+7,
    'CTT':+8,
    'JST':+9,
    'ACT':+9.5,
    'AET':+10,
    'SST':+11,
    'NST':+12
};


while (true)
{

    var data = fs.readFileSync('input.txt', 'utf8');
    splitInput = data.split(" ")
    if (splitInput.length !== 3)
    {
        continue;
    }
    await new Promise(r => setTimeout(r, 100));
    // split string into first time zone abbr, second time zone abbr, time
    var convertFrom = splitInput[0];
    var convertTo = splitInput[1];
    var timeToConvert = splitInput[2];

    // split up time input into hours and minutes and cast to integer
    var [hours, minutes] = timeToConvert.split(':');
    var intHours = parseInt(hours);

    // set variable for to and from offsets and get the difference between the two
    var fromOffset = timeOffsets[convertFrom];
    var toOffset = timeOffsets[convertTo];

    var timeDifference = toOffset - fromOffset;

    var convertedHours = intHours + timeDifference;

    // cast value to integer
    var convertedHoursString = convertedHours.toString();

    // concatenate string
    var convertedTime = convertedHoursString + ':' + minutes;

    fs.writeFileSync('input.txt', convertedTime);
    
}
}

main();