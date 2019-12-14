class ApplicationController < ActionController::Base
  # CSRF対策無効
  skip_before_action :verify_authenticity_token
end
