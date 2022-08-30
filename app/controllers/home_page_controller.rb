class HomePageController < ApplicationController
  def index
    @countries = Country.all
  end
end
