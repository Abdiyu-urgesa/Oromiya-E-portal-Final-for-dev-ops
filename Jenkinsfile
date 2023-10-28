pipeline {
  agent {
    docker {
      image 'node:18.18.2-alpine3.18'
    }

  }
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/Abdiyu-urgesa/Oromiya-E-portal-Final-for-dev-ops', branch: 'main')
      }
    }

  }
}