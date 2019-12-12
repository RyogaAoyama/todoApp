class ApplicationController < ActionController::Base
  # CSRF対策無効
  protect_from_forgery
end
