let isOpen: boolean
isOpen = true

let message: string
message = `foo ${isOpen}`

let total: number
total = 1

let items: number[]
items = [1, 2, 3]

let labels: string[]
labels = ['1', '2', '3']

let list: [number, string, number]
list = [1, '1', 1]

enum Colors {
    white = '#fff',
    black = '#000'
}

function logger(): void {
    console.log('foo')
}

type Neo = string | undefined

function error(): never {
    throw new Error('error')
}

let cart: object
cart = {}

let msg = 'mensagem definida'