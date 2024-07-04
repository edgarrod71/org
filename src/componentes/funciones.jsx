/// mediante esta función se puede generar un uuid (no lo he probado)
const uuidFromCode = () => {
  const newUuid = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16),
  )
  ///setId(newUuid)
    return newUuid
}

const randomColor = () => {
    let color = Math.floor(Math.random()*16777215).toString(16);
    color = "#" + "0".repeat(6 - color.length) + color;
    return color;
}

function hexToRgba(hex, tono) {
    // Extraer los componentes de color
    var r = parseInt(hex.substring(1, 3), 16);
    var g = parseInt(hex.substring(3, 5), 16);
    var b = parseInt(hex.substring(5, 7), 16);
    var resultado = `rgba(${r}, ${g}, ${b}, ${tono})`;
    console.log(resultado)
    return resultado;
}
    
function darker(hex, dec) {
    var r = parseInt(hex.substring(1, 3), 16);    
    var g = parseInt(hex.substring(3, 5), 16);    
    var b = parseInt(hex.substring(5, 7), 16);
    var resultado = `rgb(${r-dec}, ${g-dec}, ${b-dec})`
    return resultado
}

export default {hexToRgba, uuidFromCode, darker, randomColor}