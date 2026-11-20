
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
                bat 'docker-compose -H npipe:////./pipe/dockerDesktopLinuxEngine -f docker-compose-desacoplado.yml build'
            }
        }

        stage('Limpiar despliegue anterior') {
            steps {
                bat 'docker-compose -H npipe:////./pipe/dockerDesktopLinuxEngine -f docker-compose-desacoplado.yml down --remove-orphans'
            }
        }

        stage('Desplegar aplicacion') {
            steps {
                bat 'docker-compose -H npipe:////./pipe/dockerDesktopLinuxEngine -f docker-compose-desacoplado.yml up -d'
            }
        }

        stage('Verificar contenedores') {
            steps {
                bat 'docker-compose -H npipe:////./pipe/dockerDesktopLinuxEngine -f docker-compose-desacoplado.yml ps'
            }
        }
    }
}
