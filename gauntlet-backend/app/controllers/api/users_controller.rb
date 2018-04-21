class Api::UsersController < ApplicationController

  def create
    user = User.new(user_params)

    if user.save
      # Login after user creation
      user = User.find_by(username: params[:username])
      if user.present? && user.authenticate(params[:password])
        created_jwt = issue_token({id: user.id})
        render json: {
          user: UserSerializer.new(user),
          jwt: created_jwt
        }
      end
    else
      render json: {error: user.errors.first}
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
end
