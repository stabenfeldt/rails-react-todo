Rails.application.routes.draw do
  devise_for :users
  resources :users do
  end
  resources :todos
  namespace :todos do
    post :update_order
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'todos#index' # shortcut for the above
end
