class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :set_user

  def set_user
    @user = User.first
  end

end
