pipeline {
  agent any

  stages {
    
    stage('Using Worktile Pipeline') {
      steps {
        sh 'wtctl'
      }
    }
    stage('run the docker') {
      steps {
        sh 'docker run -d --name express -p 3000:3000 problemrc/aaa'
      }
    }
  }
}