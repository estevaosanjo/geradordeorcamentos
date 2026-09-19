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

    return "Orçamento recebido"


if __name__ == "__main__":
    server = Server(app.wsgi_app)

    server.watch("templates/")
    server.watch("static/css/")
    server.watch("static/js/")

    server.serve(port=5000)