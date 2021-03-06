import React from 'react';
import { resetButton } from '../actions/actions';

//  inicia código de validación de formulario para añadir mi cuenta

const regExpNumber = /^\d+$/

let validateBank = false;
let validateNumberAccount = false;
let validateTypeAccount = false;
let validateMoney = false;
let disabledButton = true;

function onChangeBank(bank, changeButton) {
  if (bank) {
    validateBank = true;
  } else {
    validateBank = false;
    disabledButton = true
  }
  allInputsValid(changeButton);  
}

function onChangeTypeAccount(account, changeButton) {
  if (account) {
    validateTypeAccount = true;
  } else {
    validateTypeAccount = false;
    disabledButton = true
  }
  allInputsValid(changeButton);  
}

function onChangeMoney(money, changeButton) {
  if (money) {
    validateMoney = true;
  } else {
    validateMoney = false;
    disabledButton = true;
  }
  allInputsValid(changeButton);  
}

function onChangeNumberAccount(number, changeButton) {
  if (regExpNumber.test(number)) {
    validateNumberAccount = true;
  } else {
    validateNumberAccount = false;
    disabledButton = true
  }
  allInputsValid(changeButton)  
}

function allInputsValid(changeButton) {
  if (validateBank && validateTypeAccount && validateMoney && validateNumberAccount) {
    disabledButton = false;
  } else {
    disabledButton = true;
  }
  changeButton(disabledButton);  
}

// inicia componente para añadir una nueva cuenta personal

const AddMyAccount = ({navigateTo, disabledButton, changeButton, buttonReset}) => (
  <div className="container-fluid">
    <div className="row justify-content-center">
    <div className="card col-11 col-md-10 p-0 m-5">
    <h5 className="card-header grey lighten-3 grey-text text-center">Añadir Mi Cuenta Bancaria</h5>
    <div className="card-body">
    <form>
      <div className="form-row justify-content-center">
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputdestination">Selecciona el Banco de tu Cuenta</label>
          <select id="inputdestination" className="form-control" onChange={(event) => onChangeBank(event.target.value, changeButton) }>
            <option value="">Selecciona tu Banco</option>
            <option value="BBVA">BBVA</option>
            <option value="Scotiabank">Scotiabank</option>
            <option value="BCP">BCP</option>
            <option value="Interbank">Interbank</option>
            <option value="Citibank">Citibank</option>
            <option value="Banco de la Nación">Banco de la Nación</option>
            <option value="Banco de Comercio">Banco de Comercio</option>
            <option value="Banco Financiero">Banco Financiero</option> 
            <option value="BanBif">BanBif</option>
            <option value="Crediscotia Financiera">Crediscotia Financiera</option>
            <option value="Mi Banco">Mi Banco</option>
            <option value="Agrobanco">Agrobanco</option>
            <option value="Banco GNB">Banco GNB</option>
            <option value="Banco Falabella">Banco Falabella</option>
            <option value="Banco Ripley">Banco Ripley</option>
            <option value="Banco Santander">Banco Santander</option>
            <option value="Banco Azteca">Banco Azteca</option>
            <option value="ICBC">ICBC</option>
          </select>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="card-number">Número de Cuenta</label>
          <input type="text" className="form-control" id="card-number" placeholder="Número de Cuenta" onChange={(event) => onChangeNumberAccount(event.target.value, changeButton)}/>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputOrigin">Selecciona el tipo de Cuenta</label>
          <select id="inputOrigin" className="form-control" onChange={(event)=> onChangeTypeAccount(event.target.value, changeButton)}>
            <option value="">Elige el tipo de Cuenta</option>
            <option value="Ahorros">Cuenta de Ahorros</option>
            <option value="Corriente">Cuenta Corriente</option>
          </select>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputOrigin">Selecciona el tipo de Cambio</label>
          <select id="inputOrigin" className="form-control" onChange={(event) => onChangeMoney(event.target.value, changeButton)}>
            <option value="">Elige el tipo de Cambio</option>
            <option value="soles">Soles</option>
            <option value="dólares">Dólares</option>
          </select>
        </div>
        <div className="form-check mb-2 mr-sm-2">
          <input className="form-check-input" type="checkbox" id="inlineFormCheckMD" />
          <label className="form-check-label" for="inlineFormCheckMD">
            Selecciona esta cuenta bancaria para tu próxima operación.
          </label>
        </div>
      </div>
    </form>
    <div className="row justify-content-center">
      <a className="btn btn-back" onClick={() => navigateTo('myAccounts')}>Cancelar</a>
      <button className="btn btn-success" disabled={ disabledButton ? "disabled" : false } onClick={() => { buttonReset(); navigateTo('myAccounts') }}>Añadir</button> 
    </div>     
    </div>
    </div>
    </div>
  </div>
)

export default AddMyAccount;