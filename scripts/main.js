const tabla = document.getElementById("section1")

console.log(tabla)

function cambiarAcomisiones(){
    console.log("hizo algo")
    tabla.innerHTML=`<button class="conversion-de-moneda__botonTabla" onclick="cambiarAcomisiones()"></button>
    <h4>Comisiones</h4>
    <table>
        <tr>
            <td>Bitrade</td>
            <td>$ 12.96</td>
          </tr>
          <tr>
            <td>Ethereum</td>
            <td>$ 13.07</td> 
          </tr>
          <tr>
            <td>Novadax</td>
            <td>$ 13.15</span></td>
          </tr>
          <tr>
            <td>Coinext</td>
            <td>$ 14.96 </td>
          </tr>
    </table>
    <div class="tasas-de-cambio__actualizacion"><b>Actualizado:</b><p> 19 Julio 23:45</p></div>`
}