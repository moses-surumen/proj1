class PokemonsController < ApplicationController
  # before_action :set_pokemon, only: [:show, :edit, :update, :destroy]
  # before_action only: [:capture, :damage, :heal, :new]

  # # PATCH/PUT /pokemons/1
  # # PATCH/PUT /pokemons/1.json
  def capture
    @pokemon = Pokemon.find(params[:id])
    @pokemon.trainer = current_trainer
    redirect_to '/'
  end

  # # PATCH/PUT /pokemons/1
  # # PATCH/PUT /pokemons/1.json
  def damage
    @pokemon = Pokemon.find(params[:id])
    @pokemon.trainer = current_trainer
    @pokemon.health -= 10     #reduce health by 10
    redirect_to '/'
  end

  # # PATCH/PUT /pokemons/1
  # # PATCH/PUT /pokemons/1.json
  def heal
    self.health += 10     #reduce health by 10
    redirect_to '/'
  end


  # GET /pokemons/new
  def create
    render 'new.html.erb'
  end

  # # GET /pokemons
  # # GET /pokemons.json
  # def index
  #   @pokemons = Pokemon.all
  # end

  # # GET /pokemons/1
  # # GET /pokemons/1.json
  # def show
  # end





  # GET /pokemons/1/edit
  # def edit
  # end

  # POST /pokemons
  # POST /pokemons.json
  # def create
  #   @pokemon = Pokemon.new(pokemon_params)

  #   respond_to do |format|
  #     if @pokemon.save
  #       format.html { redirect_to @pokemon, notice: 'Pokemon was successfully created.' }
  #       format.json { render :show, status: :created, location: @pokemon }
  #     else
  #       format.html { render :new }
  #       format.json { render json: @pokemon.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # PATCH/PUT /pokemons/1
  # # PATCH/PUT /pokemons/1.json
  # def update
  #   respond_to do |format|
  #     if @pokemon.update(pokemon_params)
  #       format.html { redirect_to @pokemon, notice: 'Pokemon was successfully updated.' }
  #       format.json { render :show, status: :ok, location: @pokemon }
  #     else
  #       format.html { render :edit }
  #       format.json { render json: @pokemon.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # DELETE /pokemons/1
  # # DELETE /pokemons/1.json
  # def destroy
  #   @pokemon.destroy
  #   respond_to do |format|
  #     format.html { redirect_to pokemons_url, notice: 'Pokemon was successfully destroyed.' }
  #     format.json { head :no_content }
  #   end
  # end

  # private
  #   # Use callbacks to share common setup or constraints between actions.
  #   def set_pokemon
  #     @pokemon = Pokemon.find(params[:id])
  #   end

  #   # Never trust parameters from the scary internet, only allow the white list through.
  #   def pokemon_params
  #     params.require(:pokemon).permit(:name, :level, :trainer_id)
  #   end
end
