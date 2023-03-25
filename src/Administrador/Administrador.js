import './Administrador.css'

export function Administrador(){
    return(
        <>
            <br></br>
            <br></br>
            <div class="container-fluid my-5">
                <div class="row">
                    <div class="col-7">
                        <img src="https://firebasestorage.googleapis.com/v0/b/tiendasisu-b70ee.appspot.com/o/alan-pennisi-escanear0008.jpg?alt=media&token=91d13b56-0db5-49b9-a1fb-a35d160361f5" alt="foto" class="img-fluid"/>
                    </div>
                    <div class="col-4">
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2>Registro de Mercancia.</h2>
                        <br></br>
                        <form>
                            <br></br>
                            <div class="row">
                                <div class="col-4">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-basket"></i></span>
                                    <input type="text" class="form-control" placeholder="Nombre"/>
                                </div>
                                </div>
                                <div class="col-4">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-image"></i></span>
                                    <input type="text" class="form-control" placeholder="Foto"/>
                                </div>
                                </div>
                                <div class="col-4">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-chevron-bar-expand"></i></span>
                                    <input type="number" class="form-control" placeholder="Cantidad"/>
                                </div>
                                </div>
                                <div class="col-4">
                                    <br></br>
                                    <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-body-text"></i></span>
                                    <input type="text" class="form-control" placeholder="Descripción"/>
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-currency-dollar"></i></span>
                                    <input type="number" class="form-control" placeholder="Precio"/>
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-check2-square"></i></span>
                                    <input type="text" class="form-control" placeholder="Clasificación"/>
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-bookmark-check-fill"></i></span>
                                    <input type="text" class="form-control" placeholder="Marca"/>
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-bag-check-fill"></i></span>
                                    <input type="text" class="form-control" placeholder="Presentación"/>
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-infinity"></i></span>
                                    <input type="number" class="form-control" placeholder="Peso"/>
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-collection"></i></span>
                                    <input type="text" class="form-control" placeholder="Proveedor"/>
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-calculator"></i></span>
                                    <input type="number" class="form-control" placeholder="Volumen"/>
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar-date"></i></span>
                                    <input type="date" class="form-control" placeholder="Fecha de Ingreso"/>
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar3"></i></span>
                                    <input type="date" class="form-control" placeholder="Fecha de Venta"/>
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-percent"></i></span>
                                    <input type="text" class="form-control" placeholder="Descuento"/>
                                </div>
                                </div>
                                <div class="d-grid gap-2">
                                    <br></br>
                                    <br></br>
                                    <button class="btn boton col-8 mx-auto" type="button">Registrar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}