# README

This app uses:

* Ruby 3.0.2
* Rails 6.1.4
* Postgresql 
* Webpacker
* ReactJS
* FastJson API
* Rspec + Capybara
* Brakeman


To run locally, run the following commands:
* bundle install
* bundle exec rails webpacker:install
* rails db:create
* rails db:migrate
* rails s --binding=0.0.0.0
  
  Then go to http://localhost:3000/ 
  
  
To run testing, run the following commands:
* rspec spec/.


To run linter, run the following command:
* rubocop -A


To run secuirty analysis, run the following commad:
* brakeman

  Then open the 'output.html' in a browser
  

Deployment Info:
* Hosting service: Heroku

Coninuous Deployment w/ corresponding branch:
* Production app: main
* Review app: frontend-dev


Continuous Integration:
* Rspec tests ran with every push and/or pull request
* Find the configurations in .github/workflows/workflow.yml

