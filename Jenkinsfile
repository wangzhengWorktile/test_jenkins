pipeline {
  agent any

  stages {
    stage('stop the old docker image') {
      steps {
        sh 'sudo docker stop express || true \
            && sudo docker rm express || true \
            && sudo docker rmi problemrc/aaa \
            '
      }
    }
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