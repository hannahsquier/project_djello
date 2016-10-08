class CardsController < ApplicationController
before_filter :authenticate_user!

  # def index

  #   @lists = Board.find_by_id(params[:board_id]).lists

  #   respond_to do |format|

  #     format.json { render  json: @lists.to_json(include: :cards, status: 200) }
  #     # format.json { render  json: @list, status: 200 }

  #   end
  # end

  # def create
  #   @list = Board.find_by_id(params[:board_id]).lists.create(list_params)

  #   respond_to do |format|
  #      format.json { render  json: @list, status: 200 }
  #   end
  # end

  # def show
  #   @list = List.find_by_id(params[:id])

  #   respond_to do |format|
  #     format.json do
  #      render  json: @list, status: 200
  #     end
  #   end

  # end

  def update
    @card = Card.find_by_id(params[:id]).update(card_params)

    respond_to do |format|
      format.json { render  json: @list, status: 200 }
    end
  end

  # def destroy
  #   @list = List.find_by_id(params[:id]).destroy()

  #   respond_to do |format|
  #     format.json { render  json: @list, status: 200 }
  #   end

  # end

  private

  def card_params
    params.require(:card).permit(:name, :list_id, :description, :completed)
  end
end
