pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/durga295/Quiz-WebApp.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Quiz Web App'
            }
        }

        stage('Test') {
            steps {
                echo 'Running Tests'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Application'
            }
        }
    }
}
