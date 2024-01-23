from flask import Flask, request
import os

app = Flask(__name__)

def vulnerable_function(input_data):
    # Vulnerabilité : Injection de commande
    # Ce code vulnérable permet l'exécution de commandes arbitraires.
    result = os.popen(f"echo {input_data}").read()
    return result

@app.route('/execute', methods=['GET'])
def execute_code():
    user_input = request.args.get('input', '')
    output = vulnerable_function(user_input)
    return output

if __name__ == '__main__':
    app.run(debug=True)
