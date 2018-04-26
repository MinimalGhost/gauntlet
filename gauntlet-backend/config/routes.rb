Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :interviews
    post "/auth", to: "auth#create"
    get "/current_user", to: "auth#show"
  end
end
