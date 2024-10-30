// 1. Printing array elements:

const dc = ["flash", "superman", "batman"]

for(let i=0; i<dc.length; i++) {
    console.log(dc[i])
}

// 2. Break and Continue:

// break - breaks control flow

for(let i=0; i<10; i++) {
    if(i == 5) {
        console.log("breaking the loop as detected 5")
        break
    }
    console.log(i)
}

// continue - skips one particular control flow

for(let i=0; i<10; i++) {
    if(i == 5) {
        console.log("skipping the flow as detected 5")
        continue
    }
    console.log(i)
}