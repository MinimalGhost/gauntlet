class Api::AuthController < ApplicationController
  before_action :authorize_user!, only: [:show]

  def show
    created_jwt = issue_token({id: current_user.id})

    render json: {
      user: UserSerializer.new(current_user),
      jwt: created_jwt
    }
  end

  def create
    # The current user
    user = User.find_by(username: params[:username])

    if user.present? && user.authenticate(params[:password])
      created_jwt = issue_token({ id: user.id })
      render json: {
        user: UserSerializer.new(user),
        jwt: created_jwt
      }
    else
      render json: {
        error: 'Username or password incorrect'
      }, status: 404
    end
  end

end
