

export function guardar(clave, valor){
    if (typeof valor !== "string") {
        valor = JSON.stringify(valor);
    }
    localStorage.setItem(clave, valor)
}
export function obtener(clave){
   return localStorage.getItem(clave)
}
export function limpiar(){
    localStorage.clear()
}