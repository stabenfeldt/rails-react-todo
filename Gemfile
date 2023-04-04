source 'https://rubygems.org'



# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.1.7', '>= 6.1.7.3'
# Use sqlite3 as the database for Active Record
gem 'sqlite3'
# Use Puma as the app server
gem 'puma', '~> 4.3', '>= 4.3.12'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2', '>= 4.2.2'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails', '>= 4.4.0'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.6', '>= 2.6.4'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'devise', '>= 4.7.1'

gem 'bootstrap-sass', '~> 3.4.0'
gem 'sass-rails', '~> 6.0', '>= 6.0.0'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  gem 'rspec-rails', '~> 3.5', '>= 3.5.1'
  gem 'railroady'
  gem 'rubocop', '>= 0.49.0'
  gem 'rails-controller-testing', '>= 1.0.3'
  gem 'fabrication'
  gem 'faker'
  # Javascript test tools
  # Your choice of test library.
  # Also available, teaspoon-mocha / teaspoon-qunit
  gem "teaspoon-jasmine"

  # Teaspoon's front-end is written in CoffeeScript but it's not a dependency
  gem "coffee-script"
end

group :test do
  gem 'capybara'
  gem 'database_cleaner'
end

gem 'slim-rails'
gem 'slim'

# Brakeman is an vulnerability scanner designed for Ruby on Rails applications.
# It statically analyzes Rails application code to find
# security issues at any stage of development.
gem 'brakeman', :require => false

# browserify-rails helps with Browserify integration within Rails
gem 'browserify-rails', '>= 4.3.0'

# react-rails eases React integration
gem 'react-rails', '~> 1.8', '>= 1.8.2'


group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console'
  gem 'listen', '~> 3.0.8'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'annotate', '>= 2.7.5'
  gem 'guard'
end


group :production do
  gem 'exception_notification', '>= 4.4.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
