Rails.application.routes.draw do
  get '/', to:'home_page#index'
  get 'sample/index', to: 'sample#index'
  get 'group_page', to: 'group_page#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
