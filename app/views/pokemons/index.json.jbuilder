json.array!(@pokemons) do |pokemon|
  json.extract! pokemon, :id, :name, :level, :trainer_id
  json.url pokemon_url(pokemon, format: :json)
end
