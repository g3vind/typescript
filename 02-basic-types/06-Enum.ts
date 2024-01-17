// An enum is a group of named constant values. Enum stands for enumerated type.


// To define an enum, you follow these steps:

// First, use the enum keyword followed by the name of the enum.
// Then, define constant values for the enum.



// The following example creates an enum that represents the days of week:
enum daysOfWeek {Sun, Mon, Tue, Wed, Thu, Fri, Sat}
console.log(daysOfWeek)

// --------------OUTPUT---------------

// {
//     '0': 'Sun',
//     '1': 'Mon',
//     '2': 'Tue',
//     '3': 'Wed',
//     '4': 'Thu',
//     '5': 'Fri',
//     '6': 'Sat',
//     Sun: 0,
//     Mon: 1,
//     Tue: 2,
//     Wed: 3,
//     Thu: 4,
//     Fri: 5,
//     Sat: 6
//   }


// -------------------EXAMPLE 2---------------------
enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}

console.log(isItSummer(Month.Jun)); // true

// however
console.log(isItSummer(6)); // true



// ------- ENUM USE CASE----------
enum approvalStatus  {
    draft, submitted, approved, rejected
}

// using the enum now,
const request = {
    id:1,
    status:approvalStatus.approved,
    description:"Please approve my request"
}

if(request.status===approvalStatus.approved){
    console.log("Success")
}


// Do use an enum when you have a small set of fixed values that are closely related and known at compile time.
