const ingresos = [
    new Ingresos('salario', 2100.00),
    new Ingresos('Venta de carro', 500),
   

]

const egresos = [
    new Egresos('Pago de servicios publicos', 900),
    new Egresos('Impuesto predial', 500),
]

const cargarApp = ()=> {
    cargarCabecera()
    cargarIngresos()
    cargarEgresos()
}

const totalIngresos = ()=> {
    let totalIngresos = 0

    for(let ingreso of ingresos){
        totalIngresos += ingreso.valor
    }
    return totalIngresos
}

const totalEgresos = ()=> {
    let totalEgresos = 0

    for(let egreso of egresos){
        totalEgresos += egreso.valor
    }
    return totalEgresos
}

const cargarCabecera = ()=>{
    let presupuesto = totalIngresos() - totalEgresos()
    let porcentaje = totalEgresos()/totalIngresos()
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto)
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentaje)
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos())
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos())
}

const formatoMoneda = (valor)=> {
    return valor.toLocaleString('en-US',{style: 'currency', currency: 'USD',minimumFractionDigits:2 })
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US',{ style:'percent', minimumFractionDigits:2})
}

const cargarIngresos = () =>{
    let ingresosHTML = ''
    for(let ingreso of ingresos){
        ingresosHTML += caragarIngresosHTML(ingreso)
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML
} 

const caragarIngresosHTML = (ingreso)=> {
    let ingresoHTML = `<div class="elemento limpiarEstilos">
    <div class="elemento_description">${formatoMoneda(ingreso.descripcion)}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_elimiebar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"
                onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
            </button>
        </div>
    </div>
</div>`
    return ingresoHTML
}

const eliminarIngreso = (id)=> {
    let indiceEliminar = ingresos.findIndex( ingreso => ingreso.id === id)
    ingresos.splice(indiceEliminar,1)
    cargarCabecera()
    cargarIngresos()
}

const cargarEgresos = () => {
    let egresosHTML = ''
    for(let egreso of egresos){
        egresosHTML += cargarEgresosHTML(egreso)
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML
}

const cargarEgresosHTML =(egreso) =>{
    let egresoHTML = `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${formatoMoneda(egreso.descripcion)}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">-${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_porcentaje">21%</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"
                onclicl='eliminarEgresos(${egreso.id})' ></ion-icon>
            </button>
        </div>
    </div>
</div>`
    return egresoHTML
    
}

const eliminarEgreso=(id) => {
    let indiceEliminarEgreso = egresos.findIndex(egreso => egreso.id === id)
    egresos.splice(indiceEliminarEgreso, 1)
}
cargarCabecera()
cargarIngresos()
cargarEgresos()
