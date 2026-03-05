pipeline {

agent any

stages {

stage('Clone Repo') {
steps {
git 'https://github.com/your-username/quiz-app.git'
}
}

stage('Build') {
steps {
echo 'Building Application'
}
}

stage('Test') {
steps {
echo 'Running Tests'
}
}

stage('Deploy') {
steps {
echo 'Deploying Application'
}
}

}

}
