pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out To-Do Application'
            }
        }

        stage('Build') {
            steps {
                echo 'Building To-Do Application'
                sh 'ls -l'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing application files'

                sh 'test -f index.html'
                sh 'test -f style.css'
                sh 'test -f script.js'
                sh 'test -f server.js'

                echo 'All application files are available!'
            }
        }
    }
}
