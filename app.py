from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/Pokedex')
def pokedex():
    return render_template('pokedex.html')

@app.route('/Bulbasaur')
def Bulbasaur():
    return render_template('bulbasaur.html')
@app.route('/Charmander')
def Charmander():
    return render_template('charmander.html')

if __name__ == '__main__':
    app.run(debug=True)
