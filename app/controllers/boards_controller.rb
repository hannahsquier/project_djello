class BoardsController < ApplicationController
  before_filter :authenticate_user!

  def index
    @boards = current_user.boards

    respond_to do |format|
      format.json { render  json: @boards, status: 200 }
    end
  end

  def create
    @board = current_user.boards.create(board_params)

    respond_to do |format|
       format.json { render  json: @board, status: 200 }
    end
  end

  def show
    @board = Board.find_by_id(params[:id])


    respond_to do |format|
      format.json { render  json: @board, status: 200 }
    end
  end

  def update
    @board = Board.find_by_id(params[:id]).update(board_params)

    respond_to do |format|
      format.json { render  json: @board, status: 200 }
    end
  end

  def destroy
    @board = Board.find_by_id(params[:id])

    @board.destroy()

    respond_to do |format|
      format.json { render  json: @board, status: 200 }
    end

  end
  private

  def board_params
    params.require(:board).permit(:name, :user_id)
  end
end
