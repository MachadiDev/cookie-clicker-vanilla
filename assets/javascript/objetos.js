class bonus {
    constructor(nome, custo, producao) {
        this._nome = nome;
        this._custo = custo;
        this._quantidade = 0;
        this._producao = producao;
    }

    getNome() {
        return this._nome;
    }

    getCusto() {
        return this._custo
    }

    getQuantidade() {
        return this._quantidade;
    }

    getProducao() {
        return this._producao;
    }

    setQuantidade(valor){
        this._quantidade = quantidade + valor;
    }

    setCusto(valor) {
        this._custo = valor;
    }



    aumentoBonus() {
        return cookie_segundo + (this._producao * this._quantidade);
    }

    aumentaCusto() {
        valor = this._custo + (this._custo * 13 / 100);
        this.setCusto(valor);
    }

    compraBonus() {
        if (cookies < this._custo) {
            alert("Não é possível comprar");
        } else  {
            this._quantidade = this._quantidade + 1;
            cookies = cookies - this._custo;

        }
    }


}
