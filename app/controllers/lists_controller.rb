class ListsController < ApplicationController
  before_filter :authenticate_user!

  def index

    @lists = Board.find_by_id(params[:board_id]).lists

    respond_to do |format|
      format.json { render  json: @lists, status: 200 }
    end
  end

  # def create
  #   @list = current_user.lists.create(list_params)

  #   respond_to do |format|
  #      format.json { render  json: @list, status: 200 }
  #   end
  # end

  # def show
  #   @list = List.find_by_id(params[:id])


  #   respond_to do |format|
  #     format.json { render  json: @list, status: 200 }
  #   end
  # end

  # def update
  #   @list = List.find_by_id(params[:id]).update(list_params)

  #   respond_to do |format|
  #     format.json { render  json: @list, status: 200 }
  #   end
  # end

  # def destroy
  #   @list = List.find_by_id(params[:id])

  #   @list.destroy()

  #   respond_to do |format|
  #     format.json { render  json: @list, status: 200 }
  #   end

  # end

  private

  def list_params
    params.require(:list).permit(:name, :board_id, :description)
  end

end
