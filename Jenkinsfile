
pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                checkout scm
            }
        }

        stage('Construir imagenes Docker') {
            steps {
                bat 'docker compose -f docker-compose-desacoplado.yml build'
            }
        }

        stage('Desplegar aplicacion') {
            steps {
                bat 'docker compose -f docker-compose-desacoplado.yml up -d'
            }
        }

        stage('Verificar contenedores') {
            steps {
                bat 'docker compose -f docker-compose-desacoplado.yml ps'
            }
        }
    }
}
