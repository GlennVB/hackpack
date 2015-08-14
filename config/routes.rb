Rails.application.routes.draw do
  devise_for :users
  resources :projects
  root to: "app#index"
end
