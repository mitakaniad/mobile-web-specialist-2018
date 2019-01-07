pipeline {
  agent any
  stages {
    stage('Git') {
      steps {
        git 'https://github.com/mitakaniad/mobile-web-specialist-2018.git'
      }
    }
    stage('Print') {
      steps {
        echo 'Git done'
      }
    }
  }
}