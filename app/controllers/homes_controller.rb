class HomesController < ApplicationController
  def index
    p ENV['BASE_URL']
    gon.BASE_URL = ENV['BASE_URL']
  end
end
