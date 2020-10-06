import { menuPral } from '../view/menuPral'
import { leerTeclado } from '../view/entradaTeclado'
const main = async () => {
    let n: number
    do {
        n = await menuPral()
        switch(n){
            case 1:
                console.log("Comprobando letra DNI")
                let DNI: number
                DNI =  parseInt( await leerTeclado('Dame tu número de DNI')) 
                let letra: string
                letra = await leerTeclado('Introduzca letra de DNI')
                if (dni(DNI, letra)==false){
                    console.log("La letra introducida no es correcta")
                }else{
                    console.log("La letra introducida si es correcta")
                }
                break
            case 2:
                console.log("Estoy en opción 2")
                let n1: number
                let n2: number
                n1 =  parseInt( await leerTeclado('Dame un número')) 
                n2 =  parseInt( await leerTeclado('Dame otro número'))
                console.log(`El resultado es: ${multiplicar(n1, n2)}`)
                break
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
const dni = (num: number, char: string) => {
    let res:boolean
    let letra=num%23
    let lista=["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
    if (char!=lista[letra]) {
        res=false
    } else {
        res=true
    }
    return res
}

const multiplicar = (n1: number, n2: number): number => n1 * n2
main()
