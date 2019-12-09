Rails.application.routes.draw do
  namespace :api, format: 'json' do
    resources :todos, only: %i[index create destroy update]
  end
  root to: 'homes#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
