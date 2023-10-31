pipeline {
    agent {
        docker {
            image 'node:latest
            args '-p 3000:3000 -v /C:/Program Files/Jenkins:/var/jenkins_home -w /var/jenkins_hom' 
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
