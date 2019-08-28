pipeline {
  agent any

  stages {
    stage('Using Worktile Pipeline') {
      steps {
        sh 'wtctl plantform=2'
      }
    }
    stage('run the docker') {
      steps {
        sh 'echo "run docker ready"'
      }
    }
  }
}