pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/kushuextra/ci-node-app.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run App') {
            steps {
                bat 'node app.js'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'node test.js'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploy step placeholder"
            }
        }
    }

    post {
        success {
            echo "Build successful"
        }
        failure {
            echo "Build failed"
        }
    }
}
