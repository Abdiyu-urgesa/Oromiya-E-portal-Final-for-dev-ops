pipeline {
  agent {
    label 'docker' 
  }
  stages {
      
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/Abdiyu-urgesa/Oromiya-E-portal-Final-for-dev-ops.git', branch: 'main')
      }
    }
      stage('Docker node test') {
      agent {
        docker {
          // Set both label and image
          label 'docker'
          image 'node:7-alpine'
          args '--name docker-node' // list any args
        }
      }
      steps {
        // Steps run in node:7-alpine docker container on docker agent
        sh 'node --version'
      }
    }

    stage('build image') {
      steps {
        sh 'node --version'
      }
    }

  }
}