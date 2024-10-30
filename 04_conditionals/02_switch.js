// 1. switch syntax:

// switch (key) {
//     case value:
//         break;
//     default:
//         break;
// }

// 2. example:

const month = 3

switch(month) {
    case 1:
        console.log("jan")
        break
    case 2:
        console.log("feb")
        break
    case 3:
        console.log("mar")
        break
    default:
        console.log("other months")
}

// 3. If condition match and break statement is not used then every case after that will be executed 
//    except default case.