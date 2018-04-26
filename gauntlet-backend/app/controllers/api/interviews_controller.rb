class Api::InterviewsController < ApplicationController

  def create
    company = Company.find_or_create_by(interview_params[:name])

    round = Interview.where(user_id: current_user.id, company_id: company.id).count + 1

    interview = Interview.new(round: round, user_id: current_user.id, company_id: company.id)

    if interview.save
      render json: interview
    else
      render json: {error: interview.errors.first}
    end

  end

  def index
    interviews = Interview.all

    render json: interviews
  end

  def update

  end

  def show
    interview = Interview.find(:id)

    render json: interview
  end

  private

  def interview_params
    params.permit(:name, :contact, :format)
  end

end
