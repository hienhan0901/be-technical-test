const prompt = require('prompt-sync')({ sigint: true })

const task1_1 = () => {
    console.log('\nT1.1: Arrange all characters according alphabet table.')

    let input1_1 = prompt('Enter a string: ')

    const result = input1_1.split('').sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join('')

    console.log('Output:', result)
}

const task1_2 = () => {
    console.log('\nT1.2: Implement RLE.')

    let input1_2
    while (true) {
        input1_2 = prompt('Enter a string (in uppercase, A-Z): ')
        if (input1_2.match(/^[A-Z]*$/)) break;
    }

    const rleEncode = (array) => {
        let result = ''

        for (let index = 0; index < array.length; index++) {
            let count = 1;
            while (array[index + count] === array[index]) {
                count++
            }
            result = result.concat(count === 1 ? '' : count.toString(), array[index])
            index = index + count - 1
        }

        return result
    }

    console.log('Output:', rleEncode(input1_2))
}

const task1_3 = () => {
    console.log('Whether any two numbers from the list add up to k.')

    let input1_3 = prompt('Enter the length of array: ')
    let array = []
    for (let i = 0; i < parseInt(input1_3); i++) {
        array.push(prompt(`array[${i}]: `))
    }
    let k = prompt('k = ')

    const checkAddUpToK = (array, k) => {
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (parseInt(array[i]) + parseInt(array[j]) === parseInt(k)) return true
            }
        }

        return false
    }

    console.log('Output:', checkAddUpToK(array, k))
}

const direct = () => {
    let directValue = prompt('\nEnter the question (T1.1: 1, T1.2: 2, T1.3: 3): ')
    switch (directValue) {
        case '1':
            try {
                task1_1()
            } catch { console.log('Something went wrong!') }
            break;
        case '2':
            try {
                task1_2()
            } catch { console.log('Something went wrong!') }
            break;
        case '3':
            try {
                task1_3()
            } catch { console.log('Something went wrong!') }
            break;
        default:
            console.log('Invalid value')
    }
}

const main = () => {
    while (true) {
        direct()
    }
}

main();