
pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                checkout scm
            }
        }

        stage('Comprobar Docker') {
            steps {
                bat 'where docker'
                bat 'docker --version'
                bat 'where docker-compose'
                bat 'docker-compose --version'
                bat 'docker -H npipe:////./pipe/dockerDesktopLinuxEngine info'
            }
        }

        stage('Construir imagenes Docker') {
            steps {
                bat 'docker -H npipe:////./pipe/dockerDesktopLinuxEngine compose -f docker-compose-desacoplado.yml build'
            }
        }

        stage('Desplegar aplicacion') {
            steps {
                bat 'docker -H npipe:////./pipe/dockerDesktopLinuxEngine compose -f docker-compose-desacoplado.yml up -d'
            }
        }

        stage('Verificar contenedores') {
            steps {
                bat 'docker -H npipe:////./pipe/dockerDesktopLinuxEngine compose -f docker-compose-desacoplado.yml ps'
            }
        }
    }
}
