type Uid = number | string

function logDetails(uid: Uid, item: string) {
    console.log(`${uid}, ${item}`)
}

function logInfo(uid: Uid, user: string) {
    console.log(`${uid}, ${user}`)
}

logDetails(123, 'asd')
logDetails('123', 'asd')

logInfo(123, '123')
logInfo('123', '123')

type Plataform = 'Windows' | 'Linux' | 'Mac'

function renderPlataform(plataform: Plataform) {
    return plataform
}

renderPlataform('Mac')
// renderPlataform('ios')