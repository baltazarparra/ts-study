type AccountInfo = {
    id: number
    name: string
    email?: string
}

const account: AccountInfo = {
    id: 123,
    name: 'Baltz'
}

type CharInfo = {
    nick: string
    level: number
}

const char: CharInfo = {
    nick: 'raven',
    level: 666
}

type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id: 666,
    name: 'baltz',
    nick: 'raven',
    level: 666
}