from flask import Flask, render_template, request
from livereload import Server

app = Flask(__name__)


@app.route("/")
def inicio():
    return render_template("index.html")


@app.route("/gerar-orcamentos", methods=["POST"])
def gerarorcamento():

    logo = request.files.get("logo")

    if logo and logo.filename:
        print("Logo recebida", logo.filename)
    else:
        print("Logo não recebida")

    nome_cliente = request.form.get("nome_cliente")

    servicos = request.form.getlist("servico")
    quantidades = request.form.getlist("quantidade")
    valores_unitarios = request.form.getlist("valor_unitario")

    print("Cliente:", nome_cliente)
    print("Serviços:", servicos)
    print("Quantidades:", quantidades)
    print("Valores unitários:", valores_unitarios)

    return "Orçamento recebido"

if __name__ == "__main__":
    server = Server(app.wsgi_app)

    server.watch("templates/")
    server.watch("static/css/")
    server.watch("static/js/")

    server.serve(port=5000)



