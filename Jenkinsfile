pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/Abdiyu-urgesa/Oromiya-E-portal-Final-for-dev-ops.git', branch: 'main')
      }
    }

    stage('build') {
      steps {
        sh 'docker --version'
      }
    }

  }
}