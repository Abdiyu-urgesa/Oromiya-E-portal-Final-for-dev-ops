pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/Abdiyu-urgesa/Oromiya-E-portal-Final-for-dev-ops', branch: 'main')
      }
    }

    stage('build') {
      steps {
        sh 'echo second bbb'
      }
    }

  }
}