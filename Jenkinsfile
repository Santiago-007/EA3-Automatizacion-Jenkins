
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
                bat '''
                    @echo off
                    for %%C in (proyectos-micros proyectos-micros-2 microservicio-cliente loader-balancer) do (
                        docker -H npipe:////./pipe/dockerDesktopLinuxEngine rm -f %%C 2>nul
                    )
                    exit /b 0
                '''
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
