import React from 'react'
import './modal.css'

export default function (){
    return <div class="login linha-vertical">
        <div class="d-flex justify-content-center"><h5>Cadastro</h5></div>
        <form>
            <div>
                <label htmlFor="Email">Email:</label>
                <input id="Email" type="text"/>
            </div>
            <div>
                <label htmlFor="Senha">Senha:</label>
                <input id="Senha"type="password"/>
            </div>
            <div>
                <label htmlFor="Telefone">Telefone:</label>
                <input id="Telefone" type="phone"/>
            </div>
            <div>
                <label htmlFor="Cep">Cep:</label>
                <input id="Cep" type="cep"/>
            </div>
            <div>
                <label htmlFor="Endereço">Endereço:</label>
                <input id="Endereço" type="text"/>
            </div>
            <div>
                <label htmlFor="Bairro">Bairro:</label>
                <input id="Bairro" type="text"/>
            </div>
            <div>
                <label htmlFor="Nº">Nº:</label>
                <input id="Nº" type="number"/>
            </div>
            <input type="submit" name="CadCli" id="CadCli" value="Criar" class="btn btn-primary"/>
        </form>
    </div>
}