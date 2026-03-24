export const obtenerDatos = async ()=>{
    const url = 'https://dragonball-api.com/api/characters/';
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos.items;
}