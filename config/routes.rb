Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#show"

  resource :home, only: [:show]

  devise_scope :user do
    get "login", :to => "devise/sessions#new"
    delete "logout", :to => "devise/sessions#destroy"
  end

  scope :api do
    scope :v1 do
      resources :boards
    end
  end

end
