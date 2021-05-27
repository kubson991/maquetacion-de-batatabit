const tabla = document.getElementById("section1")
function cambiarAcomisiones(){
    tabla.innerHTML=`
    <h4 class= "conversion-de-moneda__tituloComisiones"> Comisiones </h4>
    <table>
        <tr>
            <td>Bitrade</td>
            <td>$ 12.96</td>
          </tr>
          <tr>
            <td>Bitpreco</td>
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
    <button class="conversion-de-moneda__botonTabla izquierda" onclick="cambiarAmonedas()"></button>
    <div class="tasas-de-cambio__actualizacion comisiones"><b>Actualizado:</b><p> 19 Julio 23:48</p></div>`
}

 function cambiarAmonedas(){
    tabla.innerHTML= 
     `<h4 class="conversion-de-moneda__titulomoneda">Monedas</h4>
     <table>
         <tr>
             <td>Bitcoin</td>
             <td>$ 1.96 <span class="conversion-de-moneda__decrecimientoTabla"></span></td>
           </tr>
           <tr>
             <td>Ethereum</td>
             <td>$ 0.07 <span class="conversion-de-moneda__crecimientoTabla"></span></td> 
           </tr>
           <tr>
             <td>Ripple</td>
             <td>$ 2.15 <span class="conversion-de-moneda__decrecimientoTabla"></span></td>
           </tr>
           <tr>
             <td>Stellar</td>
             <td>$ 4.96 <span class="conversion-de-moneda__decrecimientoTabla"></span></td>
           </tr>
     </table>
     <button class="conversion-de-moneda__botonTabla derecha" onclick="cambiarAcomisiones()"></button>
     <div class="tasas-de-cambio__actualizacion"><b>Actualizado:</b><p> 19 Julio 23:45</p></div>`

}