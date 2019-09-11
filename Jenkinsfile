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
        sh 'echo "run docker problemrc/aaa"'
      }
    }
  }
}