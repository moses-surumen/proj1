Rails.application.routes.draw do
  resources :pokemons
  patch '/pokemons/', :to => 'pokemons#capture', :as => :capture
  patch '/pokemons/', :to => 'pokemons#damage', :as => :damage
  patch '/pokemons/', :to => 'pokemons#heal', :as => :heal
  post "/pokemons/" => "pokemons#new", :as => :create_pokemon
  devise_for :pokemons


  root to: 'home#index'
  devise_for :trainers
  resources :trainers
end
