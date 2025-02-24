class PostsController < ApplicationController
  before_action :authenticate_user!, only: %i[ new create ]

  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)

    @post.user = current_user

    if @post.save
      flash[:success] = "Nice! Your post was created."
      redirect_to root_path
    else
      flash.now[:error] = "Your post couldn't be created."
      render :new, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.expect(post: [ :title, :body ])
  end
end
