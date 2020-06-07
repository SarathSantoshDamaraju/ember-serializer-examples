pipeline {
    agent {
        docker {
            image 'node:12.16.3'
            args '-p 4200:4200'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
